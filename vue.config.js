const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/olivya-website/dist/' : '/',
  //publicPath: process.env.NODE_ENV === 'production' ? '/demo-site/dist/' : '/',
  assetsDir: './',
  css: {    
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};  
