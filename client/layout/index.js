'use strict';

import shell from './shell';

const MODULE_NAME = 'layout';

angular
  .module(MODULE_NAME, [
    shell
  ])

module.exports = MODULE_NAME;
