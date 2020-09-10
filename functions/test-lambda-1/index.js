const axios = require('axios').default
const _ = require('lodash')

exports.handler = () => {
  console.log('I am lambda one')

  return {success: true}
}
