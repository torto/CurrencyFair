const getAllItens = require('../GetAllItens/GetAllItens')
const moment = require('moment')

module.exports = async function getItensToday() {
  const values = await getAllItens()
  return values.filter((item) => moment(item.timePlaced, 'DD/MMM/YY HH:mm:ss').isSame(moment(), 'day'))
}
