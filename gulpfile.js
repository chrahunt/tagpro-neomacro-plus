var gulp = require("gulp");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var template = require("gulp-template");
var jison = require("gulp-jison");
var package_info = require("./package.json");

// Build parser.
gulp.task("jison", function() {
  return gulp.src("./src/grammar.jison")
    .pipe(jison({
      type: "lalr",
      moduleName: "Macro"
    }))
    .pipe(rename("parser.js"))
    .pipe(gulp.dest("./dist"));
});

// Build userscript.
gulp.task("build", ["jison"], function() {
  return gulp.src(["./src/header.user.js", "./src/macro.js"])
    .pipe(concat("macro.user.js"))
    .pipe(template({version: package_info.version}))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["build"]);
