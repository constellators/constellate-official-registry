const express = require('express')
const path = require('path')

/**
 * Provides static serving of the public assets.
 */
module.exports = express.static(path.resolve(__dirname, '../../public'))
