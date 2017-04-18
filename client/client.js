(() => {
  'use strict';

  angular.module('app', ['routes'])
  .config(['$httpProvider',

  function($httpProvider) {

    var interceptor = [
      '$q',
      '$window',
      '$injector',
      function($q, $window, $injector) {

        var service = {

          // take in new token on each response
          'response': function(response) {

            if(response.status === 401) {
              var stateService = $injector.get('$state');
              var loginService = $injector.get('loginService');
                loginService.setLoginFalse();
                stateService.go('app.login');
            }

            return response;
          },
          'responseError': function(response) {

            if(response.status === 401) {
              var stateService = $injector.get('$state');
                loginService.setLoginFalse();
                stateService.go('app.login');
            }

            return $q.reject(response);
          }
        };

        return service;

      }
    ];

    $httpProvider.interceptors.push(interceptor);

  }
]);

})();
