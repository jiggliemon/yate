//@ sourceURL = yate/index.js

var TemplateMixin = require('./mixin')
var extend = require('yaul/extend')

function Template (config) {
  config = config || {}
  var self = this
  self._template = null
  self._context = {}
  if( (typeof config.template === 'string') || (typeof config == 'string') ) {
    self._template = config.template || config
  }
} 

Template.prototype = extend({}, TemplateMixin)
Template.setTags = Template.prototype.setTags

module.exports = Template

//@ sourceURL = yate/index.js