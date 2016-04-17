
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var REPO_NAME='elliptical-sass';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp dist|minify|buttons|copy-fonts|sassdoc"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());
});

gulp.task('dist', function () {
    compileSass();
});

gulp.task('buttons', function () {
    compileSassButtons();
});

gulp.task('minify',function(){
    concatStream('./dist/elliptical.css','elliptical.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-fonts', function () {
    copyFonts();
});

///private
function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}

function compileSass(){
    gulp.src('./src/elliptical.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function compileSassButtons(){
    gulp.src('./src/ui.buttons.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function pipeFonts(path){
    gulp.src(path)
        .pipe(gulp.dest('./dist/fonts'));
}

function copyFonts(){
    pipeFonts('./node_modules/sass-ubuntu/dist/fonts/**/*.*');
    pipeFonts('./node_modules/sass-core-icons/dist/fonts/**/*.*');
    pipeFonts('./node_modules/sass-content-icons/dist/fonts/**/*.*');
    pipeFonts('./node_modules/sass-social-icons/dist/fonts/**/*.*');
}
