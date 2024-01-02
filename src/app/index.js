const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const registerRoutes = require('../router')
const errorHandle = require('./error-handle')
const successHandle = require('./success-handle')

const app = new Koa()

app.use(bodyParser())
app.use(cors());

registerRoutes(app)

app.on('error', errorHandle)
app.on('success',successHandle)

module.exports = app