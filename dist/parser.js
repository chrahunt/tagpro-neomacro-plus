/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Macro = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,10],$V2=[1,9],$V3=[1,11],$V4=[1,12],$V5=[1,13],$V6=[1,14],$V7=[1,15],$V8=[1,17],$V9=[1,35],$Va=[1,29],$Vb=[1,28],$Vc=[1,30],$Vd=[1,31],$Ve=[1,32],$Vf=[1,33],$Vg=[1,34],$Vh=[1,36],$Vi=[1,27],$Vj=[5,21,22,23,24,25,26,27,28,29,30],$Vk=[21,26,28,29],$Vl=[21,22,23,24,25,26,27,28,29];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expression":3,"statement":4,"EOF":5,"fc_callout":6,"/":7,"-":8,"fc_callout_lane":9,"+":10,"pup_time_callout":11,"pup_grab_callout":12,"*":13,"pup_respawn_callout":14,"own_base_status":15,"dir":16,"number":17,"pronoun":18,"powerup":19,"time":20,"NUM_8":21,"NUM_2":22,"NUM_1":23,"NUM_3":24,"NUM_4":25,"NUM_5":26,"NUM_6":27,"NUM_7":28,"NUM_9":29,"NUM_0":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"/",8:"-",10:"+",13:"*",21:"NUM_8",22:"NUM_2",23:"NUM_1",24:"NUM_3",25:"NUM_4",26:"NUM_5",27:"NUM_6",28:"NUM_7",29:"NUM_9",30:"NUM_0"},
productions_: [0,[3,2],[4,1],[4,3],[4,2],[4,3],[4,2],[4,2],[6,1],[9,1],[12,4],[11,2],[14,1],[15,1],[18,1],[18,1],[18,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[16,1],[20,2],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[19,1],[19,1],[19,1],[19,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 3: case 4: case 5: case 6: case 7:
this.$ = $$[$0];
break;
case 8:

        this.$ = {
            type: "fc_position",
            target: "enemy",
            loc: $$[$0]
        };
    
break;
case 9:

        this.$ = {
            type: "fc_position_lane",
            target: "enemy",
            lane: $$[$0]
        };
    
break;
case 10:

        this.$ = {
            type: "pup_grabbed",
            who: $$[$0-3],
            what: $$[$0-2],
            where: $$[$0-1],
            when: $$[$0]
        };
    
break;
case 11:

        this.$ = {
            type: "pup_time",
            where: $$[$0-1],
            when: $$[$0]
        };
    
break;
case 12:

        this.$ = {
            type: "pup_respawn",
            where: $$[$0]
        };
    
break;
case 13:

        this.$ = {
            type: "base_status",
            num: $$[$0]
        };
    
break;
case 14:
this.$ = "enemy";
break;
case 15:
this.$ = "self";
break;
case 16:
this.$ = "teammate";
break;
case 17:
this.$ = "sw";
break;
case 18:
this.$ = "s";
break;
case 19:
this.$ = "se";
break;
case 20:
this.$ = "w";
break;
case 21:
this.$ = "c";
break;
case 22:
this.$ = "e";
break;
case 23:
this.$ = "nw";
break;
case 24:
this.$ = "n";
break;
case 25:
this.$ = "ne";
break;
case 26:
this.$ = $$[$0-1] + $$[$0];
break;
case 27:
this.$ = "0";
break;
case 28:
this.$ = "1";
break;
case 29:
this.$ = "2";
break;
case 30:
this.$ = "3";
break;
case 31:
this.$ = "4";
break;
case 32:
this.$ = "5";
break;
case 33:
this.$ = "6";
break;
case 34:
this.$ = "7";
break;
case 35:
this.$ = "8";
break;
case 36:
this.$ = "9";
break;
case 37:
this.$ = "tp";
break;
case 38:
this.$ = "jj";
break;
case 39:
this.$ = "rb";
break;
case 40:
this.$ = "ts";
break;
}
},
table: [{3:1,4:2,6:3,7:[1,4],8:[1,7],10:[1,5],13:[1,6],16:8,21:$V0,22:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},{1:[3]},{5:[1,18]},{5:[2,2]},{8:[1,19]},{10:[1,21],11:20,16:22,21:$V0,22:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},{14:23,16:24,21:$V0,22:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},{15:25,17:26,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi},{5:[2,8]},o($Vj,[2,17]),o($Vj,[2,18]),o($Vj,[2,19]),o($Vj,[2,20]),o($Vj,[2,21]),o($Vj,[2,22]),o($Vj,[2,23]),o($Vj,[2,24]),o($Vj,[2,25]),{1:[2,1]},{9:37,17:38,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi},{5:[2,4]},{12:39,18:40,21:[1,41],22:[1,42],23:[1,43]},{17:45,20:44,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi},{5:[2,6]},{5:[2,12]},{5:[2,7]},{5:[2,13]},o($Vj,[2,27]),o($Vj,[2,28]),o($Vj,[2,29]),o($Vj,[2,30]),o($Vj,[2,31]),o($Vj,[2,32]),o($Vj,[2,33]),o($Vj,[2,34]),o($Vj,[2,35]),o($Vj,[2,36]),{5:[2,3]},{5:[2,9]},{5:[2,5]},{19:46,21:[1,48],26:[1,50],28:[1,47],29:[1,49]},o($Vk,[2,14]),o($Vk,[2,15]),o($Vk,[2,16]),{5:[2,11]},{17:51,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi},{16:52,21:$V0,22:$V1,23:$V2,24:$V3,25:$V4,26:$V5,27:$V6,28:$V7,29:$V8},o($Vl,[2,37]),o($Vl,[2,38]),o($Vl,[2,39]),o($Vl,[2,40]),{5:[2,26]},{17:45,20:53,21:$V9,22:$Va,23:$Vb,24:$Vc,25:$Vd,26:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi},{5:[2,10]}],
defaultActions: {3:[2,2],8:[2,8],18:[2,1],20:[2,4],23:[2,6],24:[2,12],25:[2,7],26:[2,13],37:[2,3],38:[2,9],39:[2,5],44:[2,11],51:[2,26],53:[2,10]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return yy_.yytext;
break;
case 2:return yy_.yytext;
break;
case 3:return yy_.yytext;
break;
case 4:return yy_.yytext;
break;
case 5:return yy_.yytext;
break;
case 6:return yy_.yytext;
break;
case 7:return yy_.yytext;
break;
case 8:return yy_.yytext;
break;
case 9:return yy_.yytext;
break;
case 10:return yy_.yytext;
break;
case 11:return yy_.yytext;
break;
case 12:return yy_.yytext;
break;
case 13:return yy_.yytext;
break;
case 14:return yy_.yytext;
break;
case 15:return yy_.yytext;
break;
case 16:return 5
break;
case 17:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:NUM_0\b)/,/^(?:NUM_1\b)/,/^(?:NUM_2\b)/,/^(?:NUM_3\b)/,/^(?:NUM_4\b)/,/^(?:NUM_5\b)/,/^(?:NUM_6\b)/,/^(?:NUM_7\b)/,/^(?:NUM_8\b)/,/^(?:NUM_9\b)/,/^(?:\/)/,/^(?:\*)/,/^(?:-)/,/^(?:\+)/,/^(?:\.)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
parser.firsts = ["NUM_1","NUM_2","NUM_3","NUM_4","NUM_5","NUM_6","NUM_7","NUM_8","NUM_9","/","+","*","-"];
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Macro;
exports.Parser = Macro.Parser;
exports.parse = function () { return Macro.parse.apply(Macro, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}