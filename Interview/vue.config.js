module.exports = {
  transpileDependencies: ['@/assets/projects.json'],
  devServer: {
    before(app) {
      app.get('/assets/*', function (req, res) {
        res.sendFile(__dirname + '/src/assets/' + req.params[0])
      })
    }
  }
}
