var gulp = require('gulp');
var concat = require('gulp-concat');                            //- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
var rev = require('gulp-rev');                                  //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');               //- 路径替换

gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./src/initial.css', './src/button/button.css','./src/layout/layout.css','./src/menu/menu.css','./src/table/tables.css'])    //- 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('./build/lhui.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                      //- 压缩处理成一行                                          //- 文件名加MD5后缀
        .pipe(gulp.dest('./'));                              //- 输出文件本地                         //- 将 rev-manifest.json 保存到 rev 目录内
});

gulp.task('default', ['concat']);
