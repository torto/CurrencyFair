const getAllItens = require('../useCases/GetAllItens/GetAllItens')

module.exports = function(app) {
  app.get('/api/list', async function(req, res) {
    res.json(await getAllItens())
  })
}
