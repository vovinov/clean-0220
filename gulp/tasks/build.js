module.exports = function() {
    $.gulp.task('build', $.gulp.series('clean', 'copy', 'copy_php', 'sass', 'allcss'))
};