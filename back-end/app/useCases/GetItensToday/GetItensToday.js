const dependencies = {
  getAllItens: require('../GetAllItens/GetAllItens')
}
const moment = require('moment')

module.exports = async function getItensToday(injection) {
  const {getAllItens} = Object.assign({}, dependencies, injection)
  const values = await getAllItens()
  return values.filter((item) => moment(item.timePlaced, 'DD/MMM/YY HH:mm:ss').isSame(moment(), 'day'))
}
