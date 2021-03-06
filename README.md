TagPro Neomacro Plus
----------------

**Want to get going? If you've got Greasemonkey/Tampermonkey installed, you can install the userscript [here](https://raw.githubusercontent.com/chrahunt/tagpro-neomacro-plus/master/dist/macro.user.js).**

> Are you tired of overly complex chat macro systems? Have you forgotten whether you bound "Yes" to I or U?

That was the problem that Neomacro set out to fix, and this is a step in that same direction.

Macros come in two flavors: simple and composite. A simple macro is one where the phrase we want to communicate stands on its own, we can't really break it down into separate parts. We can organize them into commands, questions, and other classes, but it doesn't make sense to break the individual sentences into smaller pieces. An example of a simple macro is:

> Chase the enemy FC

This contrasts with a composite macro. A composite macro is one where the phrase in question can be broken into parts, parts that we'd like the ability to specify when invoking the macro. An example of a composite macro is:

> Enemy FC is Top

where instead of "Top" we may also want to use something like "Left" or "Bottom left". This kind of macro is necessary, but causes problems when we're forced to assign single keys to each version of the macro that we'd like the ability to communicate. This can mean lots of keys are taken up by only a handful of these composite macros, and it makes it impossible to have macros that have more than one or two variable parts. That's where TagPro Neomacro Plus can help. TNP treats macros how they were meant to be treated, as *sentences* composed of *parts*. With TNP you don't get "Enemy FC is Top", you get "Enemy FC is [direction]", where the direction is up to you! The benefit of a system like this becomes clear when multiple sentences can use the same buttons. This allows you to keep the majority of your keys free to be assigned to simple macros, but still have more communicative ability than you know what to do with.

The library in its current state is a little opinionated about the layout and behavior needed for optimal use. Input requires a numpad. This doesn't help users that don't have a numpad, and may also cause problems for those that use arrow keys for navigation. This will likely change in the future, but for the moment it's necessary to keep things simple.

## Macro Syntax

This section provides information about the syntax of the macros included with the userscript by default, along with some helpful mnemonics for remembering everything.

Here's what you get with TNP:

1. "`(arrow)` Enemy FC is `[direction]` `(arrow)`."
2. "Enemy FC is `[lane]`."
3. "`[direction]` powerup @ :`[time]`."
4. "`[pronoun]` got `[powerup]` on `[direction]` @ :`[time]`."
5. "`[direction]` powerup is respawning soon."
6. "Number of enemies in base: `[number]`."

A sentence starts with one or more sentence identifiers followed by the parts of the sentence that get plugged into the sentence for you. this indicates the type of sentence that will be expected and the different parts of the sentence that you will be responsible for providing.

Throughout, keep in mind the numpad layout
```
  / * -
7 8 9 +
4 5 6 +
1 2 3
000 .
```

### Sentences:

1. Enemy Flag Carrier Locations  
   Format: `[direction]`  
   Mnemonic: None, this is just a quick way to indicate flag carrier position.  
   **Example**  
   Input: `2`  
   Output: "&#8659;&#8659; Enemy Flag carrier is bottom. &#8659;&#8659;"

2. Enemy Flag Carrier Location (lane):  
   Format: `/` `-` `[number(1)]`  
   Mnemonic: `/` is like a flag pole, and `-` is reminiscent of a 'lane', which this callout generally corresponds to (e.g. on Boombox, Velocity, etc).  
   **Example**  
   Input: `/` `-` `1`  
   Output: "Enemy FC is 1."

3. Powerup grabs (short form)  
   Format: `+` `[direction]` `[time]`  
   Mnemonic: Powerups give a "boost" to players and the order of the required items corresponds to the "Where" and "When" subset of the [Five Ws](http://en.wikipedia.org/wiki/Five_Ws).  
   **Example**  
   Input: `+` `5` `23`  
   Output: "middle powerup @ :23."

4. Powerup grabs (long form)  
   Format: `+` `+` `[pronoun]` `[powerup]` `[direction]` `[time]`  
   Mnemonic: `+` already corresponds to powerups, and a second `+` because you're providing additional information. The order of the required items corresponds to the "Who", "What", "Where", "When" subset of the [Five Ws](http://en.wikipedia.org/wiki/Five_Ws).  
   **Example**  
   Input: `+` `+` `2` `8` `5` `23`  
   Output: "I got juke juice on middle @ :23."

5. Powerup respawns  
   Format: `*` `[direction]`  
   Mnemonic: The star can indicate something "heavenly" or ethereal, which respawning falls into.  
   **Example**  
   Input: `*` `1`  
   Output: "Lower left powerup is respawning soon."

6. Enemies in base  
   Format: `-` `[number(1)]`  
   Mnemonic: `-` because having enemies in base is usually negative.  
   **Example**  
   Input: `-` `2`  
   Output: "Number of enemies in base: 2"

### Parts:

This section specifies the parts as referenced in the sentences above. Where the format of a sentence has a placeholder of the type below, any of the relevant keys may be pressed to indicate the desired input for the sentence.

1. Directions - `[direction]`
   Direction input lines up with the directions on the numpad digits.
   ```
   7 8 9       ↑
   4 5 6  =>  ←●→
   1 2 3       ↓
   ```
   **Example**
   `7` => top left
   `5` => center

2. Pronouns - `[pronoun]`
   Pronouns differentiate between you, a teammate, and an enemy.
     * I/me - `2`: towards you
     * teammate - `1`: the (wo)man beside you
     * enemy - `8`: the ball away from/against you

3. Powerups - `[powerup]`
   Powerups are referenced using the keys across the top of the numpad. This one isn't perfect, but it's alright.  
     * tagpro - `7`
     * juke juice - `8`
     * rolling bomb - `9`
     * top speed - `5`: for symmetry

4. Numbers - `[number(n)]`
   Number that can be typed on the numpad. `n` indicates how many digits the number should have.

5. Time - `[time]`
   Indicates a time (seconds). Equivalent to `[number(2)]`.

### Other:

Some useful information doesn't fall into the above categories above, so here it is.

1. While entering a macro you can press any keys you want without having to restart the macro, as long as those keys you press aren't on the numpad.
2. When a macro is completed, it is sent immediately to your teammates.
3. You may have a delay of up to three seconds in-between consecutive keypresses for a macro. If you initiated the macro correctly (used one of the correct first keys to start a sentence), then you will see a message in chat letting you know that your time is up and to try again.
4. If you press the wrong key and assuming the macro didn't get sent, you can press `.` on the numpad to reset the "macro memory". This won't help if you simply put the wrong number of enemies in base (`-` `3` instead of `2`) since the message will be sent immediately, but will if you need to correct a longer macro, such as the powerup callout.

## Compatibility

This macro library doesn't seek to replace all of your macros, just the ones that are likely to take up the most keys (the composite macros mentioned above). Care has been taken to provide compatibility with the macros generated by [Watball's Easy chat macros](http://watball.github.io/chat-macros/) and [JohnnyPopcorn's NeoMacro](https://gist.github.com/JohnnyPopcorn/8150909). The only condition is that no macros from these other libraries be assigned to the numpad keys.

## Customization

You can customize any keys in this userscript by editing the `keyMap` object at the top of the userscript. Just change the text numbers after the colon to text numbers corresponding to the [keycodes](http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes) for the keys you want to use instead.

Example:

I want to use 1, 2, 3 (along top of main keyboard) instead of the top row of the numpad, and continue using adjacent keys instead of the numpad (mixing it up a bit for the `/`, `*`, and `-`. So I'm essentially recreating the numpad using:

```
  x f v
1 2 3 4
q w e
a s d
zzz c
```

Then I would change the keycodes and the top of my userscript would look like:

```javascript
var keyMap = {
  'NUM_0': "90",
  'NUM_1': "65",
  'NUM_2': "83",
  'NUM_3': "68",
  'NUM_4': "81",
  'NUM_5': "87",
  'NUM_6': "69",
  'NUM_7': "49",
  'NUM_8': "50",
  'NUM_9': "51",
  '/': "88",
  '*': "70",
  '-': "86",
  '+': "52",
  '.': "67"
};
```

One warning, if the userscript gets updated, then these keys will be set to the default. Keep an eye out for this until there's a better way to handle it! I would also suggest saving your `keyMap` object to a file somewhere so you can re-create it easily if needed.

## Development

Once any changes are made in macro.js, run `gulp build-dev` which will create the userscript in the `debug` folder within the project directory.

### Overview

The macros are specified using a grammar (in `src/grammar.jison`) from which a parser is generated using [jison](https://github.com/zaach/jison). The parser takes input in the form of a space-separated set of keycodes pressed, like

    107 98 104 101 98 99

which corresponds to the "Powerup Grabs" example above where the keys pressed are `+` `2` `8` `5` `23`. The parser transforms the input into an object which contains the information relevant to generate the output message from the templates corresponding to each sentence. The template sentences are parsed after the object is retrieved (todo: use jison for template sentence construction) and turned into the actual text used for chat.

The macros are limited in that optional trailing parameters aren't supported. This is so that messages can be sent the first chance they match, but restricts the possible macros that can be used. If needed in the future this may be changed.

### Parser Objects

As stated above, the parser generates objects. Each of these objects has a `type` property that identifies which template sentence is has information for. There are some properties that have the same data type across several template objects.

Data type `direction` is a string enum with possible values of "n", "s", "e", "w", "nw", "ne", "sw", "se", or "c".

Data type `pronoun` is a string enum with possible values of "enemy", "teammate", and "self". These may not all be used in certain sentences.

Data type `number(n)` is a string number with `n` characters.

Data type `powerup` is a string enum with possible values of "tp", "jj", "rb", and "ts".

Template Objects:

Name: Flag carrier location

* type: "fc_position"
* target: pronoun
* loc: direction

Name: Flag carrier lanes location

* type: "fc_position_lane"
* target: pronoun
* lane: number(1)

Name: Grabbed powerup

* type: "pup_grabbed"
* who: pronoun
* what: powerup
* where: direction
* when: number(2)

Name: Powerup time

* type: "pup_time"
* where: direction
* when: number(2)

Name: Powerup respawn

* type: "pup_respawn"
* where: direction

Name: Enemies in base

* type: "base_status"
* num: number(1)

### Templates

Templates are strings with template replacements given between identifiers like so: `{{property}}`. `property` should match the name of the property in the related object. The key for the template string should match the type property of the generated objects. Values can be transformed by adding function names after `|` in the replacement text, so `{{property|capitalize}}` would capitalize the value for the property. Multiple transformations can be chained together as in `{{target|expand|capitalize}}`.

Transformations have two purposes, replacement and formatting. Replacement transformations should be run before those for formatting.

Replacement functions include:
* `expand` - expand shorthand values into longer text, accepts directions and pronouns (self, enemy, teammate).
* `dir` - give arrow or visual indicator for direction.

Formatting functions include:
* `capitalize` - capitalize the first letter of the text.
* `dbl` - repeat the text.

### Changing Macro Syntax

Using a different syntax for macros may be difficult. It is easy to incorporate a parser into the existing userscript. Just replace the `@resource` URL in the userscript header with one pointing to your generated parser.

It is less easy to create the parser for a new macro syntax. Clone this project, create the grammar for your language according to the [jison](https://github.com/zaach/jison) specification, replace the existing `src/grammar.jison` file, then run `gulp` in the root directory of the project to create the userscript. Make sure to change the repo details in `package.json` to align with the Github repository that the parser will be uploaded to. This will be made easier in the future.

As it is, there are some restrictions on the grammar for a macro syntax. There cannot be trailing optional parameters. This results from the fact that there will be some issues if a sentence in your grammar is a sub-expression of another valid sentence that you intend to be accessible. For this to be overcome there would need to be an ending marker on macro key sequences so the userscript would know when to send a key sequence to the parser, but at the moment this doesn't prohibit the grammar from being expressive enough.
