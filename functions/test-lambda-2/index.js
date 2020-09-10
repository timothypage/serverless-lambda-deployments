const Handlebars = require('handlebars')
const _ = require('lodash')

exports.handler = () => {
  console.log('I am lambda two')

  return {success: true}
}
