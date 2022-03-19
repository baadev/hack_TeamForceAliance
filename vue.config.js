module.exports = {
  devServer: {
    proxy: 'http://192.168.0.13'
  },

  transpileDependencies: [
    'vuetify'
  ],

  lintOnSave: false
}
