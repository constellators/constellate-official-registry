// eslint-disable-next-line no-unused-vars
module.exports = function errorHandlerMiddleware(err, req, res, next) {
  return res.status(500).json({ success: false, err })
}
