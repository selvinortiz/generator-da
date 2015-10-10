'use strict';

var yo         = require('yeoman-generator');
var yodasay    = require('../yodasay');
module.exports = yo.generators.Base.extend({
  init: function() {
    yodasay();
    console.log('Not ready for production yet!\n');
  }
});  
