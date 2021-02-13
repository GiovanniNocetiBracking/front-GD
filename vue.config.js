// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer:{
    proxy:{
      '/api':{
        target:'https://back-gd.herokuapp.com/'
      }
    }
  }
};
