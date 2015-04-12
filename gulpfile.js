var gulp = require("gulp");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var template = require("gulp-template");
var jison = require("gulp-jison");
var package_info = require("./package.json");
var url = require("url");

// Get the URL of the raw file as it will be available at the specified
// Github repository on the master branch.
function getGithubRawURL(repo, filePath) {
  var githubRawBase = "https://raw.githubusercontent.com";
  return url.resolve([githubRawBase, repo, "master"].join("/") + "/",
    filePath);
}

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
    .pipe(template({
      version: package_info.version,
      parser: getGithubRawURL(package_info.repository, './dist/parser.js'),
      updateUrl: getGithubRawURL(package_info.repository, './dist/macro.user.js')
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build-dev", ["jison"], function() {

});

gulp.task("default", ["build"]);
