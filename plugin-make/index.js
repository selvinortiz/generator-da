'use strict';

var i          = require('inflection');
var yo         = require('yeoman-generator');
var path       = require('path');
var chalk      = require('chalk');
var yodasay    = require('../yodasay');
module.exports = yo.generators.Base.extend({
  init: function() {
    var cb = this.async();
    var questions = [
      {
        name: 'path',
        message: 'Plugins Path',
        default: 'craft/plugins',
      }, {
        name: 'name',
        message: 'Plugin Name',
        default: 'Master Yoda',
      }, {
        name: 'handle',
        message: 'Plugin Handle',
        default: 'yoda',
        filter: function(val) {
          return val.toLowerCase();
        }
      }, {
        name: 'klass',
        message: 'Primary plugin class',
        default: 'Yoda',
        filter: function(val) {
          return i.classify(val);
        }
      }, {
        name: 'version',
        message: 'Semantic plugin version',
        default: '0.1.0'
      }, {
        name: 'developer',
        store: true,
        message: 'Developer Name',
        default: 'Selvin Ortiz'
      }, {
        name: 'developerUrl',
        store: true,
        message: 'Developer URL',
        default: 'http://selv.in',
      }
    ];

    yodasay();

    this.prompt(questions, function(answers) {
      var src    = 'plugin/**';
      var dest   = path.join(answers['path'], answers['handle']);
      var prefix = answers['klass'];
      var move   = function(from, to, inside) {
        this.fs.move(this.destinationPath(dest, inside, from), this.destinationPath(dest, inside, to));
      }.bind(this);

      this.fs.copyTpl(this.templatePath(src), this.destinationPath(dest), answers);

      move('_Plugin.php', prefix + '.php', '');
      move('_gitkeep', '.gitkeep', 'migrations');
      move('_Service.php', prefix + 'Service.php', 'services');
      move('_Settings.php', prefix + 'Settings.php', 'models');
      move('_Variable.php', prefix + 'Variable.php', 'variables');

      cb();
    }.bind(this));
  }
});
