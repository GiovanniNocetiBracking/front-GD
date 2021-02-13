// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3333'
      }
    }
  }
};
