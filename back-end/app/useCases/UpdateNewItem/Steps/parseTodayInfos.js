const dependencies = {
  avarege: require('../../AverageAllItens/AverageAllItens'),
  counter: require('../../CounterItens/CounterItens'),
  originatingCountry: require('../../AllOriginatingCountry/AllOriginatingCountry'),
  getItensToday: require('../../GetItensToday/GetItensToday')
}

module.exports = async function parseTodayInfos (injection) {
  const {
    avarege,
    counter,
    originatingCountry,
    getItensToday
  } = Object.assign({}, dependencies, injection)

  const todayItens = await getItensToday()
  return {
    count: await counter(todayItens),
    average: await avarege(todayItens),
    countrys: await originatingCountry(todayItens)
  }
}
