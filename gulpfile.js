global.$ = {
    gulp: require('gulp'), 
    gp: require('gulp-load-plugins')(),   
    browserSync: require('browser-sync').create(), 
    del: require('del'),
    path: {
        jquery: "./js/jquery.js",
        js: "./js/**/*.js",
        config: require('./gulp/config')
    },
    imageminJpegRecompress: require('imagemin-jpeg-recompress'), 
    pngquant: require('imagemin-pngquant') 
};

$.path.config.forEach(function (path) {
    require(path)();    
});