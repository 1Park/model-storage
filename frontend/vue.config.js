/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/
module.exports = { 
  devServer: {
    proxy: { 
      '/api': { 
        target: 'http://backend:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '/app/dist', 
}