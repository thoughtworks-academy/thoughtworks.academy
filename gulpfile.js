var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('less', function () {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'))
})

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch-html', function () {
    gulp.watch(['*.html', 'dist/*.css'], ['html']);
});

gulp.task('watch-less', function () {
    gulp.watch(['src/less/*.less'], ['less'])
})

gulp.task('default', ['connect', 'watch-html', 'watch-less']);