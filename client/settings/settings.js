(() => {
  'use strict';

  angular.module('settings', ['settingsController'])
  .component('settings', {
    templateUrl: './client/settings/settings.html',
    controller: 'settingsController'
  });
})();
