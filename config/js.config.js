const G                = require('gulp'),
      minifyJs         = require('gulp-jsmin'),
      babel            = require('gulp-babel'),
      paths            = require('./paths.config')


function compile(_path){

    if(!_path || typeof _path === 'function'){
        _path = paths.js.src
    }
    G.src(_path)
        .pipe(babel())
        .pipe(minifyJs())
        .pipe(G.dest(paths.js.dest))

}



exports.compile = compile