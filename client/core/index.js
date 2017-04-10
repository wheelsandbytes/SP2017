'use strict';

import angularUiRouter from 'angular-ui-router';
import Routes from './routes.js';

const MODULE_NAME = 'core';

angular
  .module(MODULE_NAME, [
    angularUiRouter
  ])
  .config('routes', new Routes)

module.exports = MODULE_NAME;
