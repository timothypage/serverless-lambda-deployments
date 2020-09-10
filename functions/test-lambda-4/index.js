const _ = require('lodash')

exports.handler = () => {
  console.log('I am lambda four and I only depend on the layer')

  return {success: true}
}
