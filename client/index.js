'use strict';

import angularUiBootstrap from 'angular-ui-bootstrap';
import core from './core';

const MODULE_NAME = 'app'

angular
  .module(MODULE_NAME, [
    angularUiBootstrap,
    core
  ]);

module.exports = MODULE_NAME;
