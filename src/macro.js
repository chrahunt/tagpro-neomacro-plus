// Userscript functions.
(function(window, document) {

// Run provided function when body is present.
function runOnBody(fn) {
  if (document.body) {
      fn();
  } else {
    setTimeout(function() {
      runOnBody(fn);
    }, 150);
  }
}

function runOnTagpro(fn) {
  if (typeof tagpro !== 'undefined') {
    fn();
  } else {
    setTimeout(function() {
      runOnTagpro(fn);
    }, 0);
  }
}

function runOnChat(fn) {
  if (typeof tagpro !== "undefined" && tagpro.playerId) {
    // Additional delay is for compatibility with chat enhancer.
    setTimeout(fn, 1000);
  } else {
    setTimeout(function() {
        runOnChat(fn);
    }, 0);
  }
}

runOnBody(function() {
  // This dummy input will handle macro keypresses
  var btn = document.createElement("input");
  btn.style.opacity = 0;
  btn.style.position = "absolute";
  btn.style.top = "-100px";
  btn.style.left = "-100px";
  btn.id = "macro-handler";
  document.body.appendChild(btn);

  btn.focus();
  btn.addEventListener('keydown', keydownHandler, false);
  document.addEventListener('keydown', documentKeydown, false);
  runOnChat(function() {
    showInfo("TNM+: TagPro NeoMacro Plus Loaded!");
  });
});

// Checks for macro inputs associated with TagPro NeoMacro and
// Watball's macro generator.
var conflictCheck = setInterval(function() {
  var input = document.getElementById("macrohandlerbutton");
  if (input !== null) {
    // Clean up changes.
    document.removeEventListener('keydown', documentKeydown, false);
    var thisInput = document.getElementById("macro-handler");
    thisInput.removeEventListener('keydown', keydownHandler, false);
    thisInput.remove();
    // Add listener to existing input, assumes focus is handled in
    // other script.
    input.addEventListener('keydown', keydownHandler, false);
    clearInterval(conflictCheck);
  }
}, 200);

// Given a string of keys pressed, parse it into an object to be
// turned into a message, or throw an exception if invalid.
function parseMacro(str) {
  if (str) {
    return Macro.parse(str);
  }
}

// TODO: Move these somewhere that makes more sense, and can be
// generated without prior knowledge.
var keyCodes = {
  111: '/',
  107: '+',
  109: '-'
};

function validFirst(keyCode) {
  return Macro.firsts.indexOf(keyCodes[keyCode]) !== -1;
}

var allowedKeys = {
  "96": true,
  "97": true,
  "98": true,
  "99": true,
  "100": true,
  "101": true,
  "102": true,
  "103": true,
  "104": true,
  "105": true,
  "111": true,
  "106": true,
  "109": true,
  "107": true,
  "110": true
};

function validKey(keyCode) {
  return allowedKeys[keyCode];
}

function controlsDisabled() {
  return typeof tagpro !== "undefined" && tagpro.disableControls;
}

// Prevent macro keys from impacting tagpro play.
runOnTagpro(function() {
  tagpro.ready(function() {
    function keyNotInUse(k) {
      return !allowedKeys[k];
    }
    for (var key in tagpro.keys) {
      tagpro.keys[key] = tagpro.keys[key].filter(keyNotInUse);
    }
  });
});

function documentKeydown(event) {
  if (!controlsDisabled()) {
    // The handler button should be always focused
    document.getElementById("macro-handler").focus();

    // Disables
    // * backspace
    // * ctrl - to prevent leaving page accidentally
    // * numpad 4 - because it is tied to right navigation.
    if ((event.keyCode==8 || event.ctrlKey || event.keyCode == 100) && !controlsDisabled()) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }
}

// Main macro keypresses handler
// Last time key was pressed.
var lastKey = 0;
// Time to wait after last keypress before trying macro, maximum time before
// macro will go after pressing keys.
var keypressLimit = 2e3;

// The . key on the numpad.
var resetKey = 110;

// Keys pressed.
var keys = [];
var macroRunner;

function keydownHandler(event) {
  if (controlsDisabled()) return;
  // If no sequence has started and this doesn't match a valid start
  // token, then disregard.
  if (keys.length === 0 && !validFirst(event.keyCode)) return;
  if (!validKey(event.keyCode)) return;
  // Remove existing macro parsing to be called if it exists.
  if (macroRunner) {
    clearTimeout(macroRunner);
  }

  // Reset key in case user presses incorrect key.
  if (event.keyCode == resetKey) {
    keys = [];
    showInfo("TNM+: Key combination reset! You can restart your macro now.");
    return;
  }
  event.preventDefault();
  event.stopPropagation();

  keys.push(event.keyCode);

  // Parse already-pressed keys if no other keys come in.
  macroRunner = setTimeout(function() {
    try {
      var result = parseMacro(keys.join(" "));
      var message = {
        text: parseMessage(result),
        global: false
      };
      chat(message);
    } catch(e) {
      showInfo("TNM+: Error, try your macro again.");
      console.debug("Parse error: " + e);
    } finally {
      keys = [];
    }
  }, keypressLimit);
}

/**
 * Send a message.
 * @param {object} chatMessage - The message information. It has
 *   properties `text` and `global` corresponding to the message
 *   to send and whether it should go to everyone (as opposed to
 *   just the user's own team.)
 * @param {boolean} group - Whether this message should be sent
 *   to the group.
 */
var lastMessage = 0;
var messageLimit = 300;
function chat(chatMessage, group) {
  if (typeof group == "undefined") group = false;
  var now = Date.now();
  var timeDiff = now - lastMessage;
  if (timeDiff > messageLimit) {
    if (!group) {
      tagpro.socket.emit("chat", {
        message: chatMessage.text,
        toAll: chatMessage.global
      });
    } else {
      tagpro.group.socket.emit("chat", chatMessage);
    }
    lastMessage = Date.now();
  } else if (timeDiff >= 0) {
    setTimeout(function() {
      chat(chatMessage, group);
    }, messageLimit - timeDiff);
  }
}

// Show feedback to user.
function showInfo(message) {
  if (typeof io !== "undefined" && io.__loopback &&
    typeof tagpro !== "undefined") {
    tagpro.socket.emit("local:chat", {
      to: "all",
      from: null,
      message: message
    });
  }
}

var Symbols = {};
Symbols.directions = {
  "sw": "\u21d9",
  "s": "\u21d3",
  "se": "\u21d8",
  "w": "\u21d0",
  "c": "\u2a00",
  "e": "\u21d2",
  "nw": "\u21d6",
  "n": "\u21d1",
  "ne": "\u21d7"
};

// Text expansions for macro values.
var Shorthand = {
  // Directions.
  "sw": "bottom left",
  "s": "bottom",
  "se": "bottom right",
  "w": "left",
  "c": "middle",
  "e": "right",
  "nw": "top left",
  "n": "top",
  "ne": "top right",
  // Powerups.
  "jj": "juke juice",
  "tp": "tagpro",
  "rb": "rolling bomb",
  "ts": "top speed",
  // Pronouns.
  "self": "I",
  "enemy": "enemy",
  "teammate": "teammate"
};

// Operation that can be applied in templates.
var Operations = {
  expand: function(val) {
    return Shorthand[val];
  },
  dir: function(val) {
    return Symbols.directions[val];
  },
  capitalize: function(val) {
    return val.slice(0, 1).toUpperCase() + val.slice(1);
  },
  dbl: function(val) {
    return val + val;
  }
};

// Sentences that the parsed key strokes are placed into.
var Templates = {
  "fc_position": "{{loc|dir|dbl}} Enemy FC is {{loc|expand}} {{loc|dir|dbl}}",
  "pup_grabbed": "{{who|expand|capitalize}} got {{what|expand}} on {{where|expand}} @ :{{when}}",
  "fc_position_lane": "Enemy FC is {{lane}}.",
  "pup_respawn": "{{where|expand|capitalize}} powerup is respawning soon.",
  "base_status": "Number of enemies in base: {{num}}"
};

// Given text from within a replacement, parse it.
function parseReplacement(replacement, info) {
  var vals = replacement.split("|");
  var out = info[vals[0]];
  var fns = vals.slice(1);
  fns.forEach(function(fn) {
    if (Operations.hasOwnProperty(fn)) {
      out = Operations[fn].call(null, out);
    }
  });
  return out;
}

// TODO: Transition to jison-backed parser?
// Parse message information into sentence for output.
function parseMessage(info) {
  var template = Templates[info.type];
  var literal_re = /(?:(.*?)(\{\{))|(?:.*)/g;
  var replace_re = /(.*?)?\}\}/g;
  var tok = literal_re.exec(template);
  var tok_type = "literal";
  var tok_stream = [];
  var out = "";
  while (tok !== null) {
    if (tok_type == "literal") {
      // Start of replacement found.
      if (tok[2]) {
        out += tok[1];
        replace_re.lastIndex = literal_re.lastIndex;
        tok = replace_re.exec(template);
        tok_type = "replacement";
      } else {
        // No replacements found.
        // Append text if matched.
        out += tok[0];  
        break;
      }
    } else {
      // Replacement.
      if (tok.length == 2) {
        // Replacement text found.
        out += parseReplacement(tok[1], info);
        literal_re.lastIndex = replace_re.lastIndex;
        tok = literal_re.exec(template);
        tok_type = "literal";
      }
    }
  }
  return out;
}

})(window, document);
