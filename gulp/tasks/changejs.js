module.exports = function() {
    $.gulp.task('changejs', function() {
        return $.gulp.src('js/**/*.js')                         
                .pipe($.gulp.dest('build/js')) 
                .on('end', $.browserSync.reload)                      
    });
};