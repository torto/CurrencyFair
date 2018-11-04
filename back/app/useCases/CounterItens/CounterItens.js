const getAllItens = require('../GetAllItens/GetAllItens')

module.exports = async function CounterItens (values) {
  if(!values) values = await getAllItens()
  return values.length
}
