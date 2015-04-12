// ==UserScript==
// @name          TagPro Neomacro Plus
// @namespace     http://reddit.com/user/snaps_
// @description   Better macros for a brighter future.
// @require       https://gist.github.com/chrahunt/4843f0258c516882eea0/raw/loopback.user.js
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://maptest*.newcompte.fr:*
// @license       MIT
// @author        snaps
// @version       0.1.0
// @run-at        document-start
// ==/UserScript==

// Userscript functions.
(function(window, document) {

// Add button and inject script into page.
// Does it need to be injected?
var addToPage = function() {
  // This dummy input will handle macro keypresses
  var btn = document.createElement("input");
  //btn.style.opacity = 0;
  //btn.style.position = "absolute";
  //btn.style.top = "-100px";
  //btn.style.left = "-100px";
  btn.id = "macro-handler";
  document.body.appendChild(btn);

  // Create a script node holding this source code
  var elt = document.createElement('script');
  elt.setAttribute("type", "application/javascript");
  elt.textContent = '(' + script + ')();';
  document.body.appendChild(elt);
  document.body.removeChild(elt);
};

// Given a string of keys pressed, parse it into an object to be
// turned into a message, or throw an exception if invalid.
window.parseMacro = function(str) {
  if (str) {
    return Macro.parse(str);
  }
};

// TODO: Move these somewhere that makes more sense, and can be
// generated without prior knowledge.
var keyCodes = {
  111: '/',
  107: '+',
  109: '-'
};

window.validFirst = function(keyCode) {
  return Macro.firsts.indexOf(keyCodes[keyCode]) !== -1;
};

function script() {
  // Prioritize macro keypress handlers using a dummy input.
  var handlerbtn = document.getElementById("macro-handler");
  handlerbtn.focus();
  handlerbtn.addEventListener('keydown', keydownHandler, false);
  handlerbtn.addEventListener('keyup', keyupHandler, false);

  document.addEventListener('keydown', documentKeydown, false);

  function controlsDisabled() {
    return typeof tagpro !== "undefined" && tagpro.disableControls;
  }

  function documentKeydown(event) {
    if (!controlsDisabled()) {
      // The handler button should be always focused
      handlerbtn.focus();

      // Disables backspace and all ctrl interactions -- prevents leaving page by accident
      if ((event.keyCode==8 || event.ctrlKey) && !controlsDisabled()) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }
  }

  // Relasing arrow key tricks TagPro to think that you relased WASD-key too, even if you didn't
  // This code prevents that from happening
  function keyupHandler(event) {
      /*if(event.keyCode in buttons && !controlsDisabled()) {
          event.preventDefault();
          event.stopPropagation();
      }*/
  }

  // Main macro keypresses handler
  // Last time key was pressed.
  var lastKey = 0;
  // Time to wait after last keypress before trying macro, maximum time before
  // macro will go after pressing keys.
  var keypressLimit = 2e3;
  // Keys pressed.
  var keys = [];
  var macroRunner;
  
  function keydownHandler(event) {
    if (controlsDisabled()) return;
    // If no sequence has started and this doesn't match a valid start
    // token, then disregard.
    if (keys.length === 0 && !validFirst(event.keyCode)) return;

    // Remove existing macro parsing to be called if it exists.
    if (macroRunner) {
      clearTimeout(macroRunner);
    }
    event.preventDefault();
    event.stopPropagation();

    keys.push(event.keyCode);

    // Parse already-pressed keys if no other keys come in.
    macroRunner = setTimeout(function() {
      try {
        var result = parseMacro(keys.join(" "));
        chat(parseMessage(result));
      } catch(e) {
        console.debug("Parse error: " + e);
      } finally {
        keys = [];
      }
    }, keypressLimit);
  }

  // For debugging.
  function chat(message) {
    console.log(message);
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
}

addToPage();

})(window, document);
