module.exports = function() {
    $.gulp.task('copy_server', function() {
        return $.gulp.src('build/**/*.*')                         
                .pipe($.gulp.dest('../../domains/clean'))                      
    });
};