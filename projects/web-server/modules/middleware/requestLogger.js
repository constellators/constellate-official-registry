module.exports = function requestLoggerMiddleware(app) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const morgan = require('morgan')
    app.use(morgan('tiny'))
  }
}
