const {expect} = require('chai')
const {mock, stub} = require('sinon')
const AverageAllItens = require('./AverageAllItens')

describe('AverageAllItens', () => {
  it('execute', async () => {
    const value = [{
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    },
    {
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    }]
    const getAllItens = mock().resolves(value)
    expect(await AverageAllItens(null, {getAllItens})).to.deep.equal({
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    })
    getAllItens.verify()
  })

  it('execute with values', async () => {
    const value = [{
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    },
    {
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    }]
    expect(await AverageAllItens(value, {})).to.deep.equal({
      amountSell: 10,
      amountBuy: 20,
      rate: 30
    })
  })
})
