'use strict';

var chalk      = require('chalk');
module.exports = function yodasay() {
  var pad = '\n  ';

  console.log(
    chalk.green(
      pad +
      pad + '                    *  *' +
      pad + '*  *  *  *  *    *        *   *  *  *  *  *  *' +
      pad + ' *            *              *             *' +
      pad + '   *  *     *                  *      *  *' +
      pad + '        *  *    _____   _____    *  *' +
      pad + '          *     (  ) \\ / (  )    *' +
      pad + '          *                      *' +
      pad + '            *         ^        *' +
      pad + '              *              *' +
      pad + '                   *     *') +
    chalk.gray(pad + '          ------------------------') +
    chalk.gray(pad + '          $') +
    chalk.green(' yo da') +
    chalk.gray('  |  Selvin Ortiz') +
    chalk.gray(pad + '          ------------------------') +
    chalk.green(pad + '          - yo da:craft-make') +
    chalk.green(pad + '          - yo da:plugin-make') + '\n'
  );
};
