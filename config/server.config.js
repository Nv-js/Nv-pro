const G          = require('gulp'),
      paths      = require('./paths.config')
      webserver  = require('gulp-webserver')


function server (){
    //
    setTimeout(function(){
        G.src('./')
            .pipe(webserver(paths.server))
    },1000)
}


exports.server = server