'use strict';

import angularUiBootstrap from 'angular-ui-bootstrap';
import core from './core';
import layout from './layout';

const MODULE_NAME = 'app'

angular
  .module(MODULE_NAME, [
    angularUiBootstrap,
    core,
    layout
  ]);

module.exports = MODULE_NAME;
