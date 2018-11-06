const dependencies = {
  getAllItens: require('../GetAllItens/GetAllItens')
}

module.exports = async function CounterItens (values, injection) {
  const {getAllItens} = Object.assign({}, dependencies, injection)
  if(!values) values = await getAllItens()
  return values.length
}
