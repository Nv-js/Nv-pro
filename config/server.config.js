const G          = require('gulp'),
      paths      = require('./paths.config')
      webserver  = require('gulp-webserver')


function server (){
    G.src('./')
        .pipe(webserver(paths.server))
}


exports.server = server