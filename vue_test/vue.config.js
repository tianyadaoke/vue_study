module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
    }
  },
  lintOnSave: false, 
  //开启代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 方式二
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws: true,
        changeOrigin: true // 用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,
        changeOrigin: true // 用于控制请求头中的host值
      }
    }
  }
}