module.exports = {
  transpileDependencies: ['@/assets/projects.json']
  // devServer: {
  //   before(app) {
  //     app.get('/assets/*', function (req, res) {
  //       res.sendFile(__dirname + '/src/assets/' + req.params[0])
  //     })
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('ts')
  //     .use('ts-loader')
  //     .tap((options) => {
  //       options = {
  //         ...options,
  //         compilerOptions: {
  //           ...options.compilerOptions,
  //           esModuleInterop: true
  //         }
  //       }
  //       return options
  //     })
  // }
}
