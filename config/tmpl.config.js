const G            = require('gulp'),
      nunjucks     = require('nunjucks'),
      fs           = require('fs'),
      path         = require('path'),
      paths        = require('./paths.config'),
      through      = require('through2'),
      del          = require('del'),
      rename       = require('gulp-rename')



function compile(_path){
    // if(!_path || typeof _path === 'function'){
    //     _path = paths.tmpl.src
    // }
    _path = paths.tmpl.src
    let dest = paths.tmpl.dest
    //
    if(/include/.test(_path)){
        return false
    }
    if(!/\*/.test(_path)){
        let _s = _path.match(/.+[\/|\\]pages[\/|\\](.+)(?=[\/|\\].+\.nv)/)
            dest = path.join(paths.tmpl.dest,_s[1])
    }
    return G.src(_path)
        .pipe(through.obj(function(chunk,enc,callback){
            let _env = nunjucks.configure( {
                autoescape: true
            });
            let name = chunk.path.match(/\w.+[\/|\\](\w+)(?=.nv)/)
            let o = {}
            if(name){
                name = name[1]
                o.name = name
                o.dist = paths.tmpl.dist
            }

            _env.addFilter('shorten',function(str,count){
                return str.slice(0,count || 5)
            })
            //
           //
            let fileContent = chunk.contents.toString(),
            result = nunjucks.renderString(fileContent, o)
            chunk.contents = Buffer.from(result)
            this.push(chunk)
            //
            callback()
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(G.dest(dest))
}

exports.compile = function(){
    del(paths.tmpl.dest).then(paths => {
        compile()
    })
};