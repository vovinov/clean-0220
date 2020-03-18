
module.exports = function() {
    $.gulp.task('copy', function() {
        return $.gulp.src([
            'fonts/**/*.{woff,woff2}',
            'img/**',
            '*.html',
            'js/**/*.js'
        ], {
            base: '.'
        })                         
                .pipe($.gulp.dest('build'))                       
    });
};