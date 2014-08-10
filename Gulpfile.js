var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    concat  = require('gulp-concat'),
    stylish = require('jshint-stylish'),
    watch   = require('gulp-watch');

var paths = {
    js: './js/*.js',
    vendor: {
        js: ['./bower_components/angular/angular.js', './bower_components/angular-route/angular-route.js']
    }
};

var jsTask = function jsTask(stream) {
    var options = {
        node: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true
    };

    stream
        .pipe(jshint(options))
        .pipe(jshint.reporter(stylish))
        .pipe(concat('client.js'))
        .pipe(gulp.dest('./public'));
};

var vendorJsTask = function vendorJsTask(stream) {
    stream
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public'));
};

gulp.task('js', function() {
    var stream = gulp.src(paths.js);
    jsTask(stream);
});

gulp.task('vendor', function() {
    var stream = gulp.src(paths.vendor.js);
    vendorJsTask(stream);
});

gulp.task('watch', function() {
    gulp.src(paths.js)
        .pipe(watch(function(stream) {
            jsTask(stream);
            stream.pipe(gulp.dest('./public'));
        }));
});