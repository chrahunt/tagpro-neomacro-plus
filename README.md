TagPro Neomacro+
----------------

Parser generates objects with parsed information. Current types correspond to flag carrier callouts and powerup callouts. All have a `type` property.

Type `direction` is a string enum with possible values of "n", "s", "e", "w", "nw", "ne", "sw", "se", or "c".

Flag carrier callouts have type `fc_position` and properties:
* target: "enemy" or "self"
* loc: one of direction

Flag carrier callouts using lanes (instead of directions) have type `fc_position_lane` and properties:
* target: "enemy" or "self"
* lane: single-digit number

Powerup callouts have type `pup_grabbed` and properties:
* who: "enemy", "self", "teammate"
* what: "rb", "jj", "tp", "ts"
* where: one of direction
* when: 2 character string number

Powerup respawn callouts have type `pup_respawn` with a single property `where` that gives the direction.

Enemies in base callout has type `base_status` with a single property `num` giving the number of enemies in base.

Templates are strings with template replacements given between identifiers like so: `{{property}}`. `property` should match the name of the property in the related object. The key for the template string should match the type property of the generated objects. Values can be transformed by adding function names after `|` in the replacement text, so `{{property|capitalize}}` would capitalize the value for the property. Multiple transformations can be chained together as in `{{target|expand|capitalize}}`

Transformations have two purposes, replacement and formatting. Replacement transformations should be run before those for formatting..

Replacement functions include:
* `expand` - expand shorthand values into longer text, accepts directions and pronouns (self, enemy, teammate).
* `dir` - give arrow or visual indicator for direction.

Formatting functions include:
* `capitalize` - capitalize the first letter of the text.
* `dbl` - repeat the text.

## Macro Syntax

This section provides information about the syntax of the macros included with the userscript by default, along with some helpful mnemonics for remembering everything.

The macro is centered around using the numpad for key entry. Because of the proximity of the numpad and arrow keys on most keyborads, this also works best for users that navigate in-game using WASD.

With that said, the current macro sytax works as follows:

A sentence is started with a sentence identifier, this indicates the type of sentence that will be expected and the different parts of the sentence that you will be responsible for providing.

### Sentences:
Enemy Flag Carrier Locations:
Format: `/` `[direction]`
Mnemonic: The `/` looks like a flagpole.
Example: "Enemy Flag carrier is bottom."
Example input: `/` `2`

Enemy Flag Carrier Location (lane):
Format: `/` `-` `[number(1)]`
Mnemonic: `/` already corresponds to the flag carrier, and `-` is reminiscent of a 'lane', which this callout generally corresponds to (e.g. on Boombox, Velocity, etc).
Example: "Enemy FC is 1."
Example input: `/` `-` `1`

Powerup grabs
Format: `+` `[pronoun]` `[powerup]` `[direction]` `[time]`
Mnemonic: Powerups give a "boost" to players and the order of the items corresponds to the "Who", "What", "Where", "When" subset of the [Five Ws](http://en.wikipedia.org/wiki/Five_Ws).
Example: "I got juke juice on middle @ :23."
Example input: `+` `2` `8` `5` `23`

Powerup respawns
Format: `+` `*` `[direction]`
Mnemonic: `+` already corresponds to powerups and the star can indicate something "heavenly" or ethereal, which respawning falls into.
Example: "Lower left powerup is respawning soon."
Example input: `+` `*` `1`

Base status
Format: `-` `[number(1)]`
Mnemonic: `-` because enemies in base is usually negative.
Example: "Number of enemies in base: 2"
Example input: `-` `2`

### Parts:

Directions:
Directions are based on the directions on the numpad.

```
7 8 9       ↑
4 5 6  =>  ←●→
1 2 3       ↓
```

Pronouns:
2 - towards you => I/me
1 - the (wo)man beside me => teammate
8 - away from/against you => enemy

Powerups:
In order of importance: tagpro, juke juice, rolling bomb have values 7, 8, and 9 which lie across the top of the numpad. The top speed powerup is 5 for symmetry but will be rarely used.

Time:
Number(1) or Number(2).

Number(n):
n-digit number.

## Changing Macro Syntax

Using a different syntax for macros can be easy and difficult at the same time. The easy part is incorporating the parser into the existing userscript. Just replace the `@resource` URL in the userscript header with one pointing to your generated parser.

The difficult part is more likely to be creating the parser itself. Create the grammar for your language according to the [jison]() specification, then create a directory, run `npm install jison` in it, copy `generate.js` from this project into that directory, add your `.jison` file and adjust `generate.js` or your filename so they align, then run `node generate.js`. This will create a parser of the expected format for use by the userscript.
