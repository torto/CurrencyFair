const updateNewItem = require('../useCases/UpdateNewItem/UpdateNewItem')

module.exports = function(app) {
  app.get('/api/loadSocket', async function(req, res) {
    await updateNewItem(req)
    res.json({message: 'ok'})
  })
}
