const dependencies = {
  avarege: require('../AverageAllItens/AverageAllItens'),
  counter: require('../CounterItens/CounterItens'),
  originatingCountry: require('../AllOriginatingCountry/AllOriginatingCountry'),
  parseTodayInfos: require('./Steps/parseTodayInfos'),
  getLastItem: require('../GetLastItem/GetLastItem')
}

module.exports = async function updateNewItem(req, injection) {
  const {
    avarege,
    counter,
    originatingCountry,
    parseTodayInfos,
    getLastItem
  } = Object.assign({}, dependencies, injection)

  if(Object.keys(req.body).length) req.io.sockets.emit('last-message', req.body)
  if(!Object.keys(req.body).length) req.io.sockets.emit('last-message', await getLastItem())
  req.io.sockets.emit('counter', await counter())
  req.io.sockets.emit('average', await avarege())
  req.io.sockets.emit('originating-country', await originatingCountry())
  req.io.sockets.emit('today', await parseTodayInfos())
}
