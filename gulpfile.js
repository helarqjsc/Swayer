/*global -$ */
'use strict';
// generated on 2015-04-01 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var babel = require('gulp-babel');
var svgSprite = require("gulp-svg-sprites");

gulp.task('es6', function() {
  return gulp.src('app/es6/**/*.js')
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('app/scripts/'))
     .pipe(reload({
      stream: true
    }));
});

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({
        browsers: ['last 1 version']
      })
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('html', ['styles'], function() {
  var assets = $.useref.assets({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: true
    })))
    .pipe(gulp.dest('ios-application/platforms/ios/www/'));
});

gulp.task('sprites', function() {
  return gulp.src('app/svg/**/*.svg')
    .pipe(svgSprite())
    .pipe(gulp.dest('app/styles/sprites'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{
        cleanupIDs: false
      }]
    })))
    .pipe(gulp.dest('ios-application/platforms/ios/www/images'));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('ios-application/platforms/ios/www/fonts'));
});

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('ios-application/platforms/ios/www/'));
});

gulp.task('samples', function() {
  return gulp.src([
    'app/samples/**/*.mp3',
  ], {
    dot: true
  }).pipe(gulp.dest('ios-application/platforms/ios/www/samples'));
});

gulp.task('svg-sprite', function() {
  return gulp.src([
    'app/styles/sprites/**/*',
  ], {
    dot: true
  }).pipe(gulp.dest('ios-application/platforms/ios/www/styles/sprites'));
});

gulp.task('svg', function() {
  return gulp.src([
    'app/svg/**/*.svg',
  ], {
    dot: true
  }).pipe(gulp.dest('ios-application/platforms/ios/www/svg'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'ios-application/platforms/ios/www/']));

gulp.task('serve', ['es6', 'styles', 'fonts', 'samples', 'sprites', 'svg', 'svg-sprite'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/es6/**/*.js',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/es6/**/*.js', ['es6']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass-official'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['es6', 'html', 'sprites', 'images', 'fonts', 'extras', 'samples', 'svg', 'svg-sprite'], function() {
  return gulp.src('ios-application/platforms/ios/www/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
