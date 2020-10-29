module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/olivya-website/dist/' : '/',
  css: {    
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
