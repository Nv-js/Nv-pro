

module.exports = {
    tmpl:{
        watchSrc:['src/tmpl/**/*.nv'],
        src:'src/tmpl/pages/**/*.nv',
        dest: 'dist/html'
    },
    server:{
        livereload: true,
        directoryListing: true,
        port: '9898',
        open: true,
        open: "./dist/"
    },
    less:{
        watchSrc:['src/less/**/*.less'],
        src:['src/less/local/dark.less','src/less/local/light.less'],
        dest:'dist/css'
    },
    js:{
        watchSrc:['src/js/**/*.js'],
        src:'src/js/**/*.js',
        dest:'dist/js'
    }
}