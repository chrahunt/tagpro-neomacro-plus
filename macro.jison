/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"96"                  return 'NUMPAD_0'
"97"                  return 'NUMPAD_1'
"98"                  return 'NUMPAD_2'
"99"                  return 'NUMPAD_3'
"100"                 return 'NUMPAD_4'
"101"                 return 'NUMPAD_5'
"102"                 return 'NUMPAD_6'
"103"                 return 'NUMPAD_7'
"104"                 return 'NUMPAD_8'
"105"                 return 'NUMPAD_9'
"111"                 return '/'
"106"                 return '*'
"109"                 return '-'
"107"                 return '+'
"110"                 return '.'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%{
    function getNumberValue(keyVal) {
        var val = Number(keyVal);
        return ''+ (val - 96);
    }
%}

%start expression

%% /* language grammar */

expression
    : statement EOF
    ;

statement
    : '/' fc_callout {return $2;}
    | '+' pup_grab_callout {return $2;}
    ;

/* Flag carrier positions. */
fc_callout
    : dir %{
        $$ = {
            type: "fc_position",
            target: "enemy",
            loc: $1
        };
    %}
    ;

/* Powerup grab callout. */
pup_grab_callout
    : pronoun powerup dir number %{
        $$ = {
            type: "pup_grabbed",
            who: $1,
            what: $2,
            where: $3,
            when: $4
        };
    %}
    ;

/* For use in various sentences. */
pronoun
    : NUMPAD_8 {$$ = "enemy";}
    | NUMPAD_2 {$$ = "self";}
    | NUMPAD_1 {$$ = "teammate";}
    ;

/* Directions. */
dir
    : NUMPAD_1 {$$ = "sw";}
    | NUMPAD_2 {$$ = "s";}
    | NUMPAD_3 {$$ = "se";}
    | NUMPAD_4 {$$ = "w";}
    | NUMPAD_5 {$$ = "c";}
    | NUMPAD_6 {$$ = "e";}
    | NUMPAD_7 {$$ = "nw";}
    | NUMPAD_8 {$$ = "n";}
    | NUMPAD_9 {$$ = "ne";}
    ;

/* For powerup times. */
number
    : number num {$$ = $1 + $2;}
    | num {$$ = $1;}
    ;

num
    : NUMPAD_0 {$$ = getNumberValue(yytext);}
    | NUMPAD_1 {$$ = getNumberValue(yytext);}
    | NUMPAD_2 {$$ = getNumberValue(yytext);}
    | NUMPAD_3 {$$ = getNumberValue(yytext);}
    | NUMPAD_4 {$$ = getNumberValue(yytext);}
    | NUMPAD_5 {$$ = getNumberValue(yytext);}
    | NUMPAD_6 {$$ = getNumberValue(yytext);}
    | NUMPAD_7 {$$ = getNumberValue(yytext);}
    | NUMPAD_8 {$$ = getNumberValue(yytext);}
    | NUMPAD_9 {$$ = getNumberValue(yytext);}
    ;

powerup
    : NUMPAD_7 {$$ = "tp";}
    | NUMPAD_8 {$$ = "jj";}
    | NUMPAD_9 {$$ = "rb";}
    | NUMPAD_5 {$$ = "ts";}
    ;
