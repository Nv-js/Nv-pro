const G         = require('gulp'),
      tmpl      = require('./config/tmpl.config'),
      server    = require('./config/server.config'),
      less      = require('./config/less.config'),
      js        = require('./config/js.config'),
      watch     = require('./config/watcher.config')







// const build = G.series(tmpl.watcher)
//编译所有模版
G.task('test',function(cb){
    js.compile()
    cb()
})
//默认
G.task('default',function(cb){
    tmpl.compile()
    js.compile()
    server.server()
    less.less()
    watch.watch()
    cb()
})
