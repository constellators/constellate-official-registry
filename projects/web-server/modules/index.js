/* eslint-disable no-console */

const express = require('express')
const ConstellateUtils = require('constellate-utils')

const Config = require('./config')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const requestLoggerMiddleware = require('./middleware/requestLogger')
const webAppMiddleware = require('./middleware/webApp')
const staticFilesMiddlware = require('./middleware/staticFiles')

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled promise rejection')
  console.error('Promise:', p)
  console.error('Reason:', reason)
})

const app = express()

// Dev logger middleware
requestLoggerMiddleware(app)

// Static files
app.use('/', staticFilesMiddlware)

// web-front-end
const webAppManifest = ConstellateUtils.getWebProjectManifest('@registry/web-app')
app.use(webAppManifest.httpPaths.root, express.static(webAppManifest.serverPaths.root))
app.use('*', webAppMiddleware)

// Error handler
app.use(errorHandlerMiddleware)

const httpListener = app.listen(Config.port, (err) => {
  if (err) {
    console.error('❗️ web-server failed to start')
    console.error(err)
  } else {
    console.log(`🌍 web-server started on port ${Config.port}`)
  }
})

ConstellateUtils.gracefullyShutdown(
  () =>
    new Promise((resolve) => {
      httpListener.close(() => {
        resolve()
      })
    }),
  'web-server',
)
