Vim�UnDo� d��I���y����͇�"���Q_}[L�+t   q                 *       (   *   *    U��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             U�     �                 const gulp = require('gulp');5�_�                    h        ����                                                                                                                                                                                                                                                                                                                                                             U��     �   h               �   h            5�_�                    i        ����                                                                                                                                                                                                                                                                                                                                                             U��     �   i               �   i            5�_�                    j        ����                                                                                                                                                                                                                                                                                                                                                             U��     �   i               5�_�                    j       ����                                                                                                                                                                                                                                                                                                                                                             U��     �   i              gulp.task('serve')5�_�      	              j       ����                                                                                                                                                                                                                                                                                                                                                             U��     �   i              gulp.task('serve', ())5�_�      
           	   j       ����                                                                                                                                                                                                                                                                                                                                                             U��     �   i              gulp.task('serve', () => {})5�_�   	              
   k        ����                                                                                                                                                                                                                                                                                                                                                             U��     �   j   l   l       5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             U��     �         l    �         l    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       U��     �         m      "const sass = require('gulp-sass');5�_�                           ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �         m      const sass = require('gulp-');5�_�                    l        ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��    �   k   m              5�_�                    l        ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   k   m   m       5�_�                    m       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   l              })5�_�                    l        ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��    �   k   m            5�_�                    l        ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   k   m   m       5�_�                    l       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   k   q   m        �   l   m   m    5�_�                    m       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   l   n   q          script: 'server.js'5�_�                    m   "    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��    �   l   n   q      #    script: './src/server/index.js'5�_�                   o       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�     �   n   p   q      &  , env: { 'NODE_ENV': 'development' }5�_�                    o       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�     �   n   p   q      %   env: { 'NODE_ENV': 'development' }5�_�                    n       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�     �   m   o   q        , ext: 'js html'5�_�                    n       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�     �   m   o   q         ext: 'js html'5�_�                    n       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�     �   m   o   q          ext: 'js html'5�_�                    o   &    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�    �   n   p   q      &    env: { 'NODE_ENV': 'development' }5�_�                    m   #    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�    �   l   n   q      #    script: './src/server/index.js'5�_�                    p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�    �   o   q   q        })5�_�                        >    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�;     �         q      >gulp.task('default', ['webpack-dev-server', 'sass', 'watch']);5�_�      !                  4    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�?     �         q      >gulp.task('default', ['webpack-dev-server', 'sass', 'watch']);5�_�       "           !      4    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�@     �         q      ?gulp.task('default', ['webpack-dev-server', 'sass', ,'watch']);5�_�   !   #           "      <    ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�C     �         q      Fgulp.task('default', ['webpack-dev-server', 'sass', 'serve','watch']);5�_�   "   $           #   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�T     �   o   q   q        });5�_�   #   %           $   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�      �   o   q   q        });5�_�   $   &           %   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�?     �   o   q   q        }).on('restarted');5�_�   %   '           &   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�C     �   o   q   q        })5�_�   &   (           '   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�H     �   o   q   q        }).on('error')5�_�   '   )           (   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�K     �   o   q   q        }).on('error', handleError)5�_�   (   *           )   p       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U�Q    �   o   q   q        }).on('error', handleError)5�_�   )               *   G       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��    �               q   const gulp = require('gulp');   #const gutil = require('gulp-util');   "const sass = require('gulp-sass');   (const nodemon = require('gulp-nodemon');   .const livereload = require('gulp-livereload');   #const webpack = require('webpack');   7const WebpackDevServer = require('webpack-dev-server');   5const webpackConfig = require('./config/webpack.js');       const handleError = (err) => {   +  const displayErr = gutil.colors.red(err);     gutil.log(displayErr);     gutil.beep();     this.emit('end');   };       B// The development server (the recommended option for development)   Ggulp.task('default', ['webpack-dev-server', 'sass', 'serve', 'watch']);       9// Build and watch cycle (another option for development)   =// Advantage: No server required, can run app from filesystem   D// Disadvantage: Requests are not blocked until bundle is available,   0//               can serve an old app on refresh   5gulp.task('build-dev', ['webpack:build-dev'], () => {   2  gulp.watch(['app/**/*'], ['webpack:build-dev']);   });       // Production build   &gulp.task('build', ['webpack:build']);   *gulp.task('webpack:build', (callback) => {   &	// modify some webpack config options   0  const myConfig = Object.create(webpackConfig);   -  myConfig.plugins = myConfig.plugins.concat(   		new webpack.DefinePlugin({   			'process.env': {   ,				// This has effect on the react lib size   -				'NODE_ENV': JSON.stringify('production'),   			},   		}),   &		new webpack.optimize.DedupePlugin(),   '		new webpack.optimize.UglifyJsPlugin()   	);       	// run webpack   %  webpack(myConfig, (err, stats) => {   ?    if (err) throw new gutil.PluginError('webpack:build', err);   1    gutil.log('[webpack:build]', stats.toString({   			colors: true,   		}));       callback();     });   });       %// modify some webpack config options   1const myDevConfig = Object.create(webpackConfig);   "myDevConfig.devtool = 'sourcemap';   myDevConfig.debug = true;       <// create a single instance of the compiler to allow caching   )const devCompiler = webpack(myDevConfig);       .gulp.task('webpack:build-dev', (callback) => {   	// run webpack   #  devCompiler.run((err, stats) => {   C    if (err) throw new gutil.PluginError('webpack:build-dev', err);   5    gutil.log('[webpack:build-dev]', stats.toString({         colors: true,       }));       callback();     });   });       'gulp.task('webpack-dev-server', () => {   &	// modify some webpack config options   0  const myConfig = Object.create(webpackConfig);     myConfig.devtool = 'eval';     myConfig.debug = true;       	// Start a webpack-dev-server   +  new WebpackDevServer(webpack(myConfig), {       hot: true,        contentBase: './src/client',       /		publicPath: '/' + myConfig.output.publicPath,   
		stats: {         colors: true,   		},   )  }).listen(8080, 'localhost', (err) => {   D    if (err) throw new gutil.PluginError('webpack-dev-server', err);   ]    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');     });   });       gulp.task('sass', () => {   2  const sassPath = './src/client/styles/app.sass';     gulp.src(sassPath)   *    .pipe(sass().on('error', handleError))   1    .pipe(gulp.dest('./src/client/dist/styles/'))       .pipe(livereload());   });       gulp.task('watch', () => {     livereload.listen();   5  gulp.watch('./src/client/styles/*.sass', ['sass']);   });       gulp.task('serve', () => {     nodemon({   $    script: './src/server/index.js',       ext: 'js html',   '    env: { 'NODE_ENV': 'development' },     }).on('error', handleError);   });5�_�                    n       ����                                                                                                                                                                                                                                                                                                                                         	       v   	    U��     �   m   o        5��