const {expect} = require('chai')
const {mock, stub} = require('sinon')
const GetLastItem = require('./GetLastItem')

describe('GetLastItem', () => {
  it('execute', async () => {
    const value = [{
      a: '1'
    },
    {
      a: '2'
    }]
    const getAllItens = mock().resolves(value)
    expect(await GetLastItem({getAllItens})).to.deep.equal(value[1])
    getAllItens.verify()
  })
})
