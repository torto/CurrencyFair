const dependencies = {
  fs: require('fs'),
  config: require('../../../config/envConfig')()
}

module.exports = (injection) => {
  const {fs, config} = Object.assign({}, dependencies, injection)
  const NAME_FILE = config.nameFileBD
  return new Promise((resolve, reject) => {
    fs.readFile(NAME_FILE, "utf8", (e, data) => {
      if(e) reject(e)
      let values = []
      if(data) values = JSON.parse(data)
      resolve(values)
    })
  })
}
