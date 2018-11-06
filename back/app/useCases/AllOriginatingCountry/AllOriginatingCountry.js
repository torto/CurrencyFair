const dependencies = {
  getAllItens: require('../GetAllItens/GetAllItens')
}
const _ = require('lodash')

module.exports = async function AllOriginatingCountry (values, injection) {
  const {getAllItens} = Object.assign({}, dependencies, injection)
  if(!values) values = await getAllItens()
  const countrys = _.groupBy(values, (value) => value.originatingCountry)
  const contryKeys = Object.keys(countrys)
  const finalValue = []
  for (item of contryKeys) {
    finalValue.push({key: item, value: countrys[item].length})
  }
  return finalValue
}
