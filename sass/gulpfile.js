var active_theme = '192';
var path_to_proyect = '../../../../' + active_theme + '/wp-content/themes/' + active_theme + '-theme';
/**
 * Required modules
 * @type {[]}
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); //sass sourcemaps
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var watch = require('gulp-watch');
var rename = require("gulp-rename");


/**
 * Config options
 * @type {}
 */
var sassdocOptions = {
  dest: './dcos/sassdoc',
  package: {
    title: 'Mazorca',
    name: 'Mazorca',
    version: '0.0.3',
    license: 'GNU',
    homepage: 'github.com/el-cultivo/mazoroca',
    description: 'Scss Framework'
  }
};


function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}


gulp.task('hello', function() {
  console.log(gulp.src);
});

gulp.task('sass', function(){
  return gulp.src('cltvo-themes/'+ active_theme +'/sass/mazorca.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()) // Using gulp-sass
    .on('error', swallowError)
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('cltvo-themes/'+ active_theme +'/css/'))
    .pipe(rename({basename: "style"}))
    .pipe(gulp.dest(path_to_proyect+'/'))
    // .pipe(livereload());
    // .pipe(browserSync.reload({ stream: true }))
});


gulp.task('sass-nixt', function(){
  return gulp.src('cltvo-themes/'+ active_theme +'/nixtamal/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dest'))
    // .pipe(browserSync.reload({ stream: true }))
});



gulp.task('sassdoc', function () {
  return gulp
    .src('cltvo-themes/'+ active_theme +'/sass/mazorca.scss')
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

/**
 * To copy files from one place to another.
 *
 * @src http://ilikekillnerds.com/2014/07/copying-files-from-one-folder-to-another-in-gulp-js/
 * @param  {[type]} ) {              gulp.src('./bower_components/font-awesome/fonts*.{ttf,woff,eof,svg}')   .pipe(gulp.dest('./fonts'));} [description]
 * @return {[type]}   [description]
 */
gulp.task('copyfonts', function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./fonts'));
});
 
// gulp.task('scripts', function() {
//   gulp.src([JSPATH+'swiper.jquery.min.js', JSPATH+'functions.js'])
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./themes/edaa-theme/js/'))
//     .pipe(browserSync.reload({ stream: true}))
// });

// gulp.task('stream', function () {
//     return gulp.src(MAINCSS)
//         .pipe(watch(MAINCSS))
//         .pipe(gulp.dest(MAINCSS));
// });
 
// gulp.task('callback', function (cb) {
//     watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(watch('css/**/*.css'))
//             .on('end', cb);
//     });
// });

gulp.task('watch', [/*'browser-sync',*/ 'sass', 'sass-nixt'], function() {
  livereload.listen({ start: true, port:8888, host:'localhost' });
  // console.log(livereload.server);
  gulp.watch('./cltvo-themes/'+ active_theme +'/sass/**/*.scss', ['sass']); 
  gulp.watch('./cltvo-themes/'+ active_theme +'/nixtamal/**/*.scss', ['sass-nixt']); 
  // gulp.watch('*.js', ['scripts']); 
});

gulp.task('browser-sync', function() {
  browserSync.init(['dest/*.css'],{ //files to inject
     host: "localhost",
            port: 8888
  });
});

gulp.task('default', ['browser-sync']);