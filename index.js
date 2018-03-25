#!/usr/bin/env node
'use strict'

const express = require('express')
const winston = require('winston')

const app = express()
const PORT = 8080

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
})

app.get('/info', (req, res) => {
  logger.info('Got a /info request')
  res.send('ok')
})

app.get('/warn', (req, res) => {
  logger.warn('Got a /warn request')
  res.send('ok')
})

app.get('/error', (req, res) => {
  logger.error('Got a /error request')
  res.send('ok')
})

app.listen(PORT, () => {
  logger.info(`Listening ${PORT}`)
})
