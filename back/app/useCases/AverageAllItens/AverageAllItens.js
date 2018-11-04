const getAllItens = require('../GetAllItens/GetAllItens')

module.exports = async function AverageAllItens(values) {
  if (!values) values = await getAllItens()
  const valuesReduce = values.reduce((max, value) => {
    return {
      amountSell: max.amountSell + value.amountSell,
      amountBuy: max.amountBuy + value.amountBuy,
      rate: max.rate + value.rate
    }
  }, {
    amountSell: 0,
    amountBuy: 0,
    rate: 0
  })

  return {
    amountSell: valuesReduce.amountSell / values.length,
    amountBuy: valuesReduce.amountBuy / values.length,
    rate: valuesReduce.rate / values.length
  }
}
