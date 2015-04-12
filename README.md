TagPro Neomacro+
----------------

Parser generates objects with parsed information. Current types correspond to flag carrier callouts and powerup callouts. All have a `type` property.

Type `direction` is a string enum with possible values of "n", "s", "e", "w", "nw", "ne", "sw", "se", or "c".
Flag carrier callouts have type `fc_position` and properties:
* target: "enemy" or "self"
* loc: one of direction

Powerup callouts have type `pup_grabbed` and properties:
* who: "enemy", "self", "teammate"
* what: "rb", "jj", "tp", "ts"
* where: one of direction
* when: 2 character string number

Templates are strings with template replacements given between identifiers like so: `{{property}}`. `property` should match the name of the property in the related object. The key for the template string should match the type property of the generated objects. Values can be transformed by adding function names after `|` in the replacement text, so `{{property|capitalize}}` would capitalize the value for the property. Multiple transformations can be chained together as in `{{target|expand|capitalize}}`

Transformations have two purposes, replacement and formatting. Replacement transformations should be run before those for formatting..

Replacement functions include:
* `expand` - expand shorthand values into longer text, accepts directions and pronouns (self, enemy, teammate).
* `dir` - give arrow or visual indicator for direction.

Formatting functions include:
* `capitalize` - capitalize the first letter of the text.
* `dbl` - repeat the text.
