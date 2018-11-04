const fs = require('fs');
const config = require('../../../config/envConfig')()

module.exports = (item) => {
  const NAME_FILE = config.nameFileBD
  return new Promise((resolve, reject) => {
    fs.readFile(NAME_FILE, "utf8", (e, data) => {
      if(e) reject(e)
      let values = []
      if(data) values = JSON.parse(data)
      resolve(values[values.length - 1])
    })
  })
}
