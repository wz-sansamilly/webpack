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
  },
  module:{
    rules:[
      {
        test: /(\.jsx|\.js)$/,// 匹配loaders所处理文件的扩展名的正则表达式
        use:{
          loader:"babel-loader",
        },
        exclude:/node_modules/ // 屏蔽不需要处理的文件 include-手动添加必须处理的文件
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:'css-loader'
          },
          {
            loader:'style-loader'
          }
        ]
      }
    ]
  }
}