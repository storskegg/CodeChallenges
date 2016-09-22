(function() {
  'use strict';

    angular.module('mlw.controllers', []);
    angular.module('mlw.directives', []);
    angular.module('mlw.filters', []);
    angular.module('mlw.services', []);


    var mlwApp =  angular.module('mlw', [
        'mlw.controllers',
        'mlw.directives',
        'mlw.filters',
        'mlw.services',
        'ui.router',
        'ngAnimate',
        'ngResource',

        //foundation
        'foundation',
        'foundation.dynamicRouting',
        'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
