const G            = require('gulp'),
      nunjucks     = require('nunjucks'),
      fs           = require('fs'),
      path         = require('path'),
      paths        = require('./paths.config'),
      through      = require('through2'),
      rename       = require('gulp-rename')



function compile(_path){
    if(!_path || typeof _path === 'function'){
        _path = paths.tmpl.src
    }
    return G.src(_path)
        .pipe(through.obj(function(chunk,enc,callback){
            var _env = nunjucks.configure( {
                autoescape: true
            });
            _env.addFilter('shorten',function(str,count){
                return str.slice(0,count || 5)
            })
           //
            let fileContent = chunk.contents.toString(),
            result = nunjucks.renderString(fileContent, { username: 'James' })

            chunk.contents = Buffer.from(result)
            this.push(chunk)
            //
            callback()
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(G.dest('dist'))
}

exports.compile = compile;