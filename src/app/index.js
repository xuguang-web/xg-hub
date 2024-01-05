const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const registerRoutes = require('../router')
const infoHandle = require('./info-handle')

const test = require('../constant')

const app = new Koa()

app.use(bodyParser())
app.use(cors());

registerRoutes(app)

app.on('info', infoHandle)
module.exports = app