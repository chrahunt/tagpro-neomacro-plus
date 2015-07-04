/* Specified the grammar for the macro input. */
/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
'NUM_0'               return yytext;
'NUM_1'               return yytext;
'NUM_2'               return yytext;
'NUM_3'               return yytext;
'NUM_4'               return yytext;
'NUM_5'               return yytext;
'NUM_6'               return yytext;
'NUM_7'               return yytext;
'NUM_8'               return yytext;
'NUM_9'               return yytext;
'/'                   return yytext;
'*'                   return yytext;
'-'                   return yytext;
'+'                   return yytext;
'.'                   return yytext;
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%start expression

%% /* language grammar */

expression
    : statement EOF {return $1;}
    ;

statement
    : fc_callout {$$ = $1;}
    | '/' '-' fc_callout_lane {$$ = $3;}
    | '+' pup_time_callout {$$ = $2;}
    | '+' '+' pup_grab_callout {$$ = $3;}
    | '*' pup_respawn_callout {$$ = $2;}
    | '-' own_base_status {$$ = $2;}
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

/* Flag carrier position in lane/area. */
fc_callout_lane
    : number %{
        $$ = {
            type: "fc_position_lane",
            target: "enemy",
            lane: $1
        };
    %}
    ;

/* Powerup grab callout. */
pup_grab_callout
    : pronoun powerup dir time %{
        $$ = {
            type: "pup_grabbed",
            who: $1,
            what: $2,
            where: $3,
            when: $4
        };
    %}
    ;

pup_time_callout
    : dir time %{
        $$ = {
            type: "pup_time",
            where: $1,
            when: $2
        };
    %}
    ;

/* Powerup respawn callout. */
pup_respawn_callout
    : dir %{
        $$ = {
            type: "pup_respawn",
            where: $1
        };
    %}
    ;

/* Number of enemies in base. */
own_base_status
    : number %{
        $$ = {
            type: "base_status",
            num: $1
        };
    %}
    ;

/* For use in various sentences. */
pronoun
    : NUM_8 {$$ = "enemy";}
    | NUM_2 {$$ = "self";}
    | NUM_1 {$$ = "teammate";}
    ;

/* Directions. */
dir
    : NUM_1 {$$ = "sw";}
    | NUM_2 {$$ = "s";}
    | NUM_3 {$$ = "se";}
    | NUM_4 {$$ = "w";}
    | NUM_5 {$$ = "c";}
    | NUM_6 {$$ = "e";}
    | NUM_7 {$$ = "nw";}
    | NUM_8 {$$ = "n";}
    | NUM_9 {$$ = "ne";}
    ;

/* For powerup times. */
time
    : number number {$$ = $1 + $2;}
    ;

number
    : NUM_0 {$$ = "0";}
    | NUM_1 {$$ = "1";}
    | NUM_2 {$$ = "2";}
    | NUM_3 {$$ = "3";}
    | NUM_4 {$$ = "4";}
    | NUM_5 {$$ = "5";}
    | NUM_6 {$$ = "6";}
    | NUM_7 {$$ = "7";}
    | NUM_8 {$$ = "8";}
    | NUM_9 {$$ = "9";}
    ;

powerup
    : NUM_7 {$$ = "tp";}
    | NUM_8 {$$ = "jj";}
    | NUM_9 {$$ = "rb";}
    | NUM_5 {$$ = "ts";}
    ;
