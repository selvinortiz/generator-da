'use strict';

var yo         = require('yeoman-generator');
var chalk      = require('chalk');
var download   = require('download');
var pleasant   = require('pleasant-progress');
var yodasay    = require('../yodasay');

module.exports = yo.generators.Base.extend({
  helpers: function() {
    this.download = function(cb) {
      var self = this;
      new download({mode: '777', extract: true})
        .get('http://buildwithcraft.com/latest.zip?accept_license=yes')
        .dest(this.destinationPath())
        .run(function(error, files) {
          if (error) {
            self.log(error);
            process.exit();
          } else {
            cb();
            self.log(
              '  ' +
              chalk.green(files.length) +
              ' files download and extracted successfully;)'
            );
          }
        });
    };
  },
  init: function() {
    var cb = this.async();
    var questions = [
      {
        name: 'license',
        type: 'confirm',
        message: 'Do you accept the Craft CMS license terms?',
        filter: function(val) {
          if (val !== true) {
            process.exit();
          }
        },
        default: false
      }, {
        name: 'username',
        message: 'Dabase username',
        default: 'root'
      }, {
        name: 'password',
        type: 'password',
        message: 'Database password',
        default: 'secret'
      }, {
        name: 'database',
        message: 'Database name',
        default: 'craftdev'
      }, {
        name: 'tablePrefix',
        message: 'Table prefix',
        default: 'craft'
      }
    ];

    yodasay();

    this.prompt(questions, function(answers) {
      if (answers['license'] === true) {
        var progress = new pleasant();
        progress.start('Working');
        this.download(function() {
          progress.stop();

          this.fs.delete(this.destinationPath('craft/config/db.php'));
          this.fs.delete(this.destinationPath('craft/config/general.php'));
          
          this.fs.copyTpl(
            this.templatePath('craft/config/_db.php'),
            this.destinationPath('craft/config/db.php'),
            answers
          );
          this.fs.copyTpl(
            this.templatePath('craft/config/_general.php'),
            this.destinationPath('craft/config/general.php'),
            answers
          );

          this.fs.move('public/htaccess', 'public/.htaccess');
          cb();
        }.bind(this));
      }
    }.bind(this));
  }
});  
