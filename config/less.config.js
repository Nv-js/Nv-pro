const G            = require('gulp'),
      less         = require('gulp-less'),
      minifyCss    = require('gulp-minify-css'),
      rename       = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer')
      paths        = require('./paths.config')



function myless(){
    G.src(paths.less.src)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],//last 5 versions- 主流浏览器的最新两个版本
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(G.dest(paths.less.dest))
        .pipe(minifyCss())
        .pipe(rename({suffix:'.min'}))
        .pipe(G.dest(paths.less.dest))
}


exports.less = myless