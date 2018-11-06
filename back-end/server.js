require('dotenv').config()
const express = require('express')
const config = require('./config/envConfig')()
const http = require('http')
const expressConfig = require('./config/express')

const app = express()
const server = http.createServer(app)
expressConfig(app, server)
server.listen(config.port,config.address, function() {
  console.log('Express Https Server '+ config.address + 'escutando na porta ' + config.port)
})
