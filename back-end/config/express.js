const config = require('./envConfig');
const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const methodOverride = require('method-override')
const rateLimit = require("express-rate-limit")
const io = require('socket.io')
const cors = require('cors')

module.exports = function(app, server) {

  const socket = io(server)
  app.use(function(req, res, next) {
    req.io = socket
    next()
  })
  app.use(cors())
  // security
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
  app.use(limiter)
  app.use(helmet())
  app.use(helmet.frameguard())
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.disable('x-powered-by')
  app.use(helmet.hidePoweredBy({
    setTo: 'PHP 5.5.14'
  }))

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }))
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(methodOverride())

  load('models', {
      cwd: 'app'
    }).then('routes')
    .into(app)

  app.get('*', function(req, res) {
    res.status(404).json({error: '404'})
  })


  return app
}
