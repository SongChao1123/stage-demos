
// ----------生产环境----------------
//打包
//启动打包
 fis.match('::package', {
   postpackager: fis.plugin('loader', {
     allInOne: true
   })
 });
fis.media('prod')
   .match('*.js', {
       packTo: 'pkg/aio.js'
   })
   .match('*.css', {
       packTo: 'pkg/aio.css'
});

 // 启用相对路径插件：fis3-hook-relative
 fis.hook('relative');
 fis.match('*', {
   relative: true
 })

 //编译
 fis.match('*.scss', {
   parser: fis.plugin('node-sass'),
   rExt: '.css'
 });

 // 启用雪碧图合并插件：fis-spriter-csssprites
 fis.match('::package', {
   spriter: fis.plugin('csssprites')
 })
 // 对 CSS 进行图片合并
 fis.match('*.css', {
   // 给匹配到的文件分配属性 `useSprite`
   useSprite: true
 })

// ----------发布时----------------
 // 压缩
 fis.match('*.js', {
   optimizer: fis.plugin('uglify-js')
 });
 fis.match('*.scss', {
   optimizer: fis.plugin('clean-css')
 });
 fis.match('*.css', {
   optimizer: fis.plugin('clean-css')
 });
 fis.match('*.png,*.jpg,*.gif', {
   optimizer: fis.plugin('png-compressor')
 });
 //开启MD5戳
 fis.match('*.{js,scss,css,png,jpg}', {
 	useHash: true
 });﻿


//不加MD5戳
 fis.match('pop/*.{png,jpg}', {
 	useHash: false
 });﻿
 fis.match('css/comm/**', {
   useHash: false
 })
 fis.match('comp/**', {
   useHash: false
 })
 fis.match('js/libs/**', {
   useHash: false
 })
 fis.match('js/bulid/**', {
   optimizer: null,
   useHash: false
 })
