const {expect} = require('chai')
const {mock, stub} = require('sinon')
const AllOriginatingCountry = require('./AllOriginatingCountry')

describe('AllOriginatingCountry', () => {
  it('execute', async () => {
    const value = [{
      originatingCountry: 'BR'
    },
    {
      originatingCountry: 'BR'
    }]
    const getAllItens = mock().resolves(value)
    expect(await AllOriginatingCountry(null, {getAllItens})).to.deep.equal([{
      key: 'BR',
      value: 2
    }])
    getAllItens.verify()
  })

  it('execute with values', async () => {
    const value = [{
      originatingCountry: 'BR'
    },
    {
      originatingCountry: 'BR'
    }]
    expect(await AllOriginatingCountry(value, {})).to.deep.equal([{
      key: 'BR',
      value: 2
    }])
  })
})
