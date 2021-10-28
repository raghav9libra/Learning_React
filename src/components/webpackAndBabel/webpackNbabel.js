//---------------- Webpack--------------
// At its core, webpack is a static module bundler for JS app.
// When webpack processes your application, it internally builds a dependency graph
//  from one or more entry points and then combines every module
//  your project needs into one or more bundles,
//  which are static assets to serve your content from

// Entry
// An entry point indicates which module webpack should use to begin
// building out its internal dependency graph. Webpack will figure out which othe
// modules and libraries that entry point depends on (directly and indirectly).
// By default its value is ./src/index.js

// Output
// The output property tells webpack where to emit the bundles it creates
// and how to name these files. It defaults to ./dist/main.js

// Core Concepts:

// Entry
// Output
// Loaders
// Plugins
// Mode
// Browser Compatibility

// ----------What is the difference between compiling & transpiling?-------

// Compiling convert one language to another at lower abstraction level
// like java to byte code

// while transpiling convert one language to another
// at same abstraction level like typescript to javascript or sass to css.

//---------------Babel-------------------
// Babel is a JavaScript transpiler that converts edge JavaScript(ES6)
// into plain old
//  ES5 JavaScript that can run in any browser even in the old ones.
