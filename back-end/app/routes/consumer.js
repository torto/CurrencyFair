const insertItem = require('../useCases/InsertItem/InsertItem')
const updateNewItem = require('../useCases/UpdateNewItem/UpdateNewItem')

module.exports = function(app) {
  app.post('/api/consumer', async function(req, res) {
    await insertItem(req.body)
    await updateNewItem(req)
    res.json(req.body)
  })
}
