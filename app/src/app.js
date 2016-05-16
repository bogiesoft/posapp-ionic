'use strict';

/**
 * @ngdoc overview
 * @name IonicGulp
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

// Example to require lodash
// This is resolved and bundled by browserify
//
// var _ = require( 'lodash' );

angular.module( 'IonicGulp', [
  'ionic',
  'ngCordova',
  'ngResource'
] )
.run( [
  '$ionicPlatform',

  function( $ionicPlatform )
  {

  $ionicPlatform.ready(function() {
    // save to use plugins here
  });

  // add possible global event handlers here

} ] )

.config( [
  '$httpProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$ionicConfigProvider',

  function( $httpProvider, $stateProvider, $urlRouterProvider)
  {
    // $ionicConfigProvider.backButton.text('');
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
        
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })

      //---- FOOD ----
      .state('app.food',{
        url: '/foods',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/food/food.html',
            controller: 'FoodController'
          }
        }
      })
      .state('app.foodlist',{
        url: '/foods/list',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/food/food-list.html',
            controller: 'FoodController'
          }
        }
      })

      //---- DRINK ----
      .state('app.drink',{
        url: '/drinks',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/drink/drink.html',
            controller: 'DrinkController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  }
] )

// Angular module controllers
//
.controller( 'MainController',     require( './controllers/mainController'     ) )
.controller( 'HomeController',     require( './controllers/homeController'     ) )
.controller( 'SettingsController', require( './controllers/settingsController' ) )
.controller( 'FoodController',      require( './controllers/foodController'      ) )
.controller( 'DrinkController',      require( './controllers/drinkController'    ) )

// Angular module services
//
.factory( 'ExampleService',        require( './services/ExampleService' ) )
.factory( 'ApiService',            require( './services/ApiService'     ) )
;
