# webpack打包vue
经历挫折后，总算是打包成功了，可是修改起来还是不熟练，目前只是打包一个页面，不知道怎么打包多个~学习ing~~

webpack官方文档：https://webpack.js.org/guides/getting-started/
vue官方文档：https://cn.vuejs.org/v2/guide/
demo的git地址：https://www.github.com/lypeng29/vue-demo

## 本demo的体验运行流程

*** 注：步骤三，任选一个执行 ***

1. git clone https://www.github.com/lypeng29/vue-demo
2. npm install //安装所需包
3. npm run build //构建打包到dist目录，需要自行打开dist/index.html预览
3. npm run start //构建打包到内存，同时自动打开：http://localhost:5000
4. 浏览器访问根目录index.html文件 //访问效果

## 问题汇总

1. 安装报错，操作不允许，没有权限
```bash
error stack: 'Error: EPERM: operation not permitted, rmdir \'E:\\www\\test\\vue-demo\\node_modules\\fsevents\\node_modules\'',
error errno: -4048,
error code: 'EPERM',
error syscall: 'rmdir',
error path: 'E:\\www\\test\\vue-demo\\node_modules\\fsevents\\node_modules' }
error Please try running this command again as root/Administrator.
```
解决：给node_module文件夹，增加一个Everyone，拥有所有权限！如下图：


2. 安装警告：fsevents跳过了

```bash
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN vue-loader-demo@1.0.0 No description
npm WARN vue-loader-demo@1.0.0 No repository field.
```

解决说明：fsevent是mac osx系统的，在win或者Linux下使用了 所以会有警告，忽略即可。意思就是你已经安装成功了。

### runtime-only build错误

3. 错误如下：
```bash
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```
解决：在webpack.config.js增加以下代码，加载node_module/vue/dist/vue.js文件
resolve: {
    alias: {
        'vue': 'vue/dist/vue.js'
    }
},

4. 关于Hot Module Replacement
运行npm run start后，成功打开localhost:5000，但页面是空的，提示：cannot GET /
解决：在webpack配置中，output路径错了，应该是publicPath: '/'，而不是'./'

5.template必须只有一个根节点，否则报错如下

> Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

错误写法：
<template>
	<div>123</div>
	<div>456</div>
</template>

正确写法：
<template>
	<div>
		<div>123</div>
		<div>456</div>
	</div>
</template>

6.组件名必须和标签名一致
template写法：
<header-vue></header-vue>
<body-vue></body-vue>
<footer-vue></footer-vue>
script写法：标签名：组件对象
components:{
	'header-vue':headervue,
	'body-vue':bodyvue,
	'footer-vue':footervue,
}
