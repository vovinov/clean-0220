module.exports = function() {
    $.gulp.task('allcss', function() {
        return $.gulp.src('css/**/*.css')                     
                .pipe($.gulp.dest('build/css'))                
    });
};