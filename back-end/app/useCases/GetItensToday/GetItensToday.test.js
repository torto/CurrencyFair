const {expect} = require('chai')
const {mock, stub} = require('sinon')
const moment = require('moment')
const GetItensToday = require('./GetItensToday')
const FORMAT_DAY = 'DD/MMM/YY HH:mm:ss'
describe('GetItensToday', () => {
  it('execute', async () => {
    const value = [{
      timePlaced: moment().format(FORMAT_DAY).toUpperCase()
    },
    {
      timePlaced: moment().format(FORMAT_DAY).toUpperCase()
    }]
    const getAllItens = mock().resolves(value)
    expect(await GetItensToday({getAllItens})).to.deep.equal(value)
    getAllItens.verify()
  })
})
