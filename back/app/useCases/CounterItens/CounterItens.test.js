const {expect} = require('chai')
const {mock, stub} = require('sinon')
const CounterItens = require('./CounterItens')

describe('CounterItens', () => {
  it('execute', async () => {
    const value = [{
      data: 'test data'
    }]
    const getAllItens = mock().resolves(value)
    expect(await CounterItens(null, {getAllItens})).to.deep.equal(1)
    getAllItens.verify()
  })
  it('execute with values', async () => {
    const value = [{
      data: 'test data'
    }]
    expect(await CounterItens(value, {})).to.deep.equal(1)
  })
})
