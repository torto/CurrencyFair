const {expect} = require('chai')
const {mock, stub} = require('sinon')
const GetAllItens = require('./GetAllItens')

describe('GetAllItens', () => {
  const config = {
    nameFileBD: 'test.name'
  }
  const data = {
    test: 'test value'
  }

  const fs = {
    readFile: () => {}
  }
  it('execute success file', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, null, JSON.stringify(data))
    expect(await GetAllItens({config, fs})).to.deep.equal(data)
    fs.readFile.restore()
  })
  it('execute without value file', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, null, '')
    expect(await GetAllItens({config, fs})).to.deep.equal([])
    fs.readFile.restore()
  })
  it('execute with error file', async () => {
    const error = {error: 'error'}
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, error, null)
    try{
      await GetAllItens({config, fs})
    } catch(e){
      expect(e).to.deep.equal(error)
    }
    fs.readFile.restore()
  })
})
