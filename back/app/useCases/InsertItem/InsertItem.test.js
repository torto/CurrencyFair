const {expect} = require('chai')
const {mock, stub} = require('sinon')
const InsertItem = require('./InsertItem')

describe('InsertItem', () => {
  const config = {
    nameFileBD: 'test.name'
  }
  const data = [{
    test: 'test value'
  }]

  const item = {
    test: 'test value insert'
  }

  const fs = {
    readFile: () => {},
    writeFile: () => {}
  }

  it('execute success file', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, null, JSON.stringify(data))
    stub(fs, 'writeFile').callsArgWith(2, null)
    expect(await InsertItem(item, {config, fs})).to.deep.equal({})
    fs.readFile.restore()
    fs.writeFile.restore()
  })
  it('execute sucess without valeu in readFile', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, null, null)
    stub(fs, 'writeFile').callsArgWith(2, null)
    expect(await InsertItem(item, {config, fs})).to.deep.equal({})
    fs.readFile.restore()
    fs.writeFile.restore()
  })
  it('execute read error file', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, {error: 'error'},null)
    stub(fs, 'writeFile').callsArgWith(2, null)
    try{
      await InsertItem(item, {config, fs})
    }catch(e) {
      expect(e).to.deep.equal({error: 'error'})
    }
    fs.readFile.restore()
    fs.writeFile.restore()
  })
  it('execute write error file', async () => {
    stub(fs, 'readFile').withArgs(config.nameFileBD, 'utf8').callsArgWith(2, null, null)
    stub(fs, 'writeFile').callsArgWith(2, {error: 'error'})
    try{
      await InsertItem(item, {config, fs})
    }catch(e) {
      expect(e).to.deep.equal({error: 'error'})
    }
    fs.readFile.restore()
    fs.writeFile.restore()
  })
})
