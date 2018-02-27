module.exports = {
  entry: __dirname + '/app/main.js',// 入口文件
  devtool:'eval-source-map',// 生成source map使调试更容易
  output: {
    path: __dirname + '/public',// 打包后文件存放路径
    filename: 'bundle.js'// 打包后文件名
  },
  devServer:{
    contentBase:'./public',// 本地服务器目录
    port:7070,// 端口
    inline:true,// 源文件改变时页面自动刷新
    historyApiFallback:true// 依赖于H5 history API,true-所有的跳转都指向index页面
  }
}