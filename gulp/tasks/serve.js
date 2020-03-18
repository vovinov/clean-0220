module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: {
                baseDir: "build/"
            }
        });
        $.gulp.watch('sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('*.html', $.gulp.series('html'));
        $.gulp.watch('js/**/*.js', $.gulp.series('changejs'));
        $.gulp.watch('img/**/*.{png,jpeg,svg}', $.gulp.series('allimg'));
        $.gulp.watch('*.html').on('change', $.browserSync.reload);           
    });
};