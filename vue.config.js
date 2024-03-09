const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8888"
      }
    }
  }
});
