const dependencies = {
  fs: require('fs'),
  config: require('../../../config/envConfig')()
}

module.exports = (item, injection) => {
  const {fs, config} = Object.assign({}, dependencies, injection)
  const NAME_FILE = config.nameFileBD
  return new Promise ((resolve, reject) => {
    fs.readFile(NAME_FILE, "utf8", (e, data) => {
      if(e) reject(e)
      let values = []
      if(data) values = JSON.parse(data)
      values.push(item)

      fs.writeFile(NAME_FILE, JSON.stringify(values), (err) => {
        if(err) reject(err)
        resolve({})
      })
    })
  })
}
