/* Specified the grammar for the macro input. */
/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"90"                  return 'NUMPAD_0'
"65"                  return 'NUMPAD_1'
"83"                  return 'NUMPAD_2'
"68"                  return 'NUMPAD_3'
"81"                 return 'NUMPAD_4'
"87"                 return 'NUMPAD_5'
"69"                 return 'NUMPAD_6'
"49"                 return 'NUMPAD_7'
"56"                 return 'NUMPAD_8'
"57"                 return 'NUMPAD_9'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%start expression

%% /* language grammar */

expression
    : statement EOF {return $1;}
    ;

statement
    : pup_callout {$$ = $1;}
    ;

/* Powerup grab callout. */
pup_callout
    : dir time %{
        $$ = {
            type: "pup_callout",
            where: $1,
            when: $2
        };
    %}
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
time
    : number number {$$ = $1 + $2;}
    ;

number
    : NUMPAD_0 {$$ = "0";}
    | NUMPAD_1 {$$ = "1";}
    | NUMPAD_2 {$$ = "2";}
    | NUMPAD_3 {$$ = "3";}
    | NUMPAD_4 {$$ = "4";}
    | NUMPAD_5 {$$ = "5";}
    | NUMPAD_6 {$$ = "6";}
    | NUMPAD_7 {$$ = "7";}
    | NUMPAD_8 {$$ = "8";}
    | NUMPAD_9 {$$ = "9";}
    ;
