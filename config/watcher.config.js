const G      = require('gulp'),
      paths  = require('./paths.config'),
      less   = require('./less.config'),
      tmpl   = require('./tmpl.config'),
      js     = require('./js.config')



function watcher(){
    let rets = [...paths.tmpl.watchSrc,...paths.less.watchSrc,...paths.js.watchSrc]
    let mine = G.watch(rets)
    let id = 1;
    mine.on('change',function(path){
        let fileName = (path.match(/^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/) || [])[4] || ""
        fileName = fileName.toLowerCase()
        console.log(id + ' : ' +path)
        id++;
        switch (fileName){
            case '.nv' :
                tmpl.compile(path)
                break
            case '.less' :
                less.less()
                break
            case '.js'  :
                js.compile()
                break

        }
    })
}

exports.watch = watcher