module.exports = function() {
    $.gulp.task('copy_php', function() {
        return $.gulp.src('php/**/*.php')                         
                .pipe($.gulp.dest('build'))                      
    });
};