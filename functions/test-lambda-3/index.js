const AWS = require('aws-sdk')
const _ = require('lodash')

exports.handler = () => {
  console.log('I am lambda three')

  return {success: true}
}
