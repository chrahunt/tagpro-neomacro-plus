// Generate parser.
var fs = require("fs");
var jison = require("jison");

// Get grammar and generate parser.
var grammar = fs.readFileSync("macro.jison", "utf8");
var parser  = jison.Generator(grammar, {type: "lalr"});

// Get initial possible vals.
var firsts;
if (parser.computeLookaheads) {
  parser.computeLookaheads();
  firsts = parser.nonterminals.$accept.first;
}

// Name of the parser as accessed in the page.
var name = "Macro";
var source = parser.generate({moduleName: name});

// Insert firsts. This results in the parser having a 'firsts' property
// which is an array of the first characters accepted by the parser.
var insertionPoint = source.indexOf("return new Parser;");
if (insertionPoint !== -1 && firsts) {
  source = stringInsert(source, insertionPoint, "parser.firsts = " + JSON.stringify(firsts) + ";\n");
}

fs.writeFileSync("macro.js", source);

function stringInsert(string, location, data) {
  return source.slice(0, location) + data + source.slice(location);
}
