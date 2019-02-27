const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
let exec = require('child_process').exec;

let srcPath = {
    'scss': './_dev/devsass',
    'publik': './public',
    'jsbundle': './_dev/jsbundle',
    'devjs': './_dev/devjs'
}


gulp.task('default', ['webpack', 'styles'], () => {
	gulp.watch('./assets/scss/**/*', ['styles']);
	gulp.watch('./assets/js/**/*', ['webpack']);
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
		]);
		
});

gulp.task('jsconcatfiles', ['webpackjs'], function () {
    return gulp.src(
        [
            srcPath.jsbundle + '/jplist/jplist.min.js',
            srcPath.jsbundle + '/handelbars/handlebars.js',            
            srcPath.jsbundle + '/autocomplete/auto-complete.js',
            srcPath.jsbundle + '/assets/js/main.js',
        ]
    )
        .pipe(sourcemaps.init())
        .pipe(concat('aj_bb_krypinbundle.1.0.0.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik + '/js/'));
});




gulp.task('styles', () => {
	gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(gulp.dest('./public/css'));
		
});


gulp.task('webpack', cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('build', ['styles'], cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
