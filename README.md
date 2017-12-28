# webpack打包vue
经历挫折后，总算是打包成功了，可是修改起来还是不熟练，不知道怎么运用到项目中，目前只是打包一个页面~

## 运行流程
1. npm install //安装所需包
2. npm run build //构建打包bundle.js到dist目录
3. 浏览器访问根目录index.html文件 //访问效果

## 问题汇总

### 安装报错，操作不允许，没有权限
```bash
error stack: 'Error: EPERM: operation not permitted, rmdir \'E:\\www\\test\\vue-demo\\node_modules\\fsevents\\node_modules\'',
error errno: -4048,
error code: 'EPERM',
error syscall: 'rmdir',
error path: 'E:\\www\\test\\vue-demo\\node_modules\\fsevents\\node_modules' }
error Please try running this command again as root/Administrator.
```
解决：给node_module文件夹，增加一个Everyone，拥有所有权限！如下图：


### 安装警告：fsevents跳过了

#### 警告如下：

```bash
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN vue-loader-demo@1.0.0 No description
npm WARN vue-loader-demo@1.0.0 No repository field.
```

#### 解决说明
fsevent是mac osx系统的，在win或者Linux下使用了 所以会有警告，忽略即可。意思就是你已经安装成功了。

### runtime-only build错误

#### 错误如下：
```bash
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```
#### 解决：
在webpack.config.js增加以下代码，加载node_module/vue/dist/vue.js文件
resolve: {
    alias: {
        'vue': 'vue/dist/vue.js'
    }
},

