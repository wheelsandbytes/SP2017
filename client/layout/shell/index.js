'use strict';

import html from './shell.html'
import Shell from './shell.js';

const MODULE_NAME = 'shell';

angular
  .module(MODULE_NAME, [
    html
  ])
  .component(MODULE_NAME, Shell)

module.exports = MODULE_NAME;
