var gulp   = require('gulp'),
    server = require('gulp-develop-server')
    jshint = require('gulp-jshint');
    
gulp.task('lint', function() {
  return gulp.src('app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
    
// run server 
gulp.task('server:start', function() {
    server.listen({ path: './app.js' });
});
 
// restart server if src changed 
gulp.task('server:restart', function() {
    gulp.watch([ './app.js', 'routes/*.js', 'models/*.js'], server.restart);
});

gulp.task('default', ['lint','server:start','server:restart']);