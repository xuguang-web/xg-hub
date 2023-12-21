const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const registerRoutes = require('../router')
const errorHandle = require('./error-handle')

const app = new Koa()

app.use(bodyParser())
app.use(cors());

registerRoutes(app)

app.on('error', errorHandle)

module.exports = app