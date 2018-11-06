const dependencies = {
  getAllItens: require('../GetAllItens/GetAllItens')
}

module.exports = async (injection) => {
  const {getAllItens} = Object.assign({}, dependencies, injection)
  const values = await getAllItens()
  return values[values.length - 1]
}
