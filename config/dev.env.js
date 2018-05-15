var merge = require('webpack-merge')
var prodEnv = require('./build-pro.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
