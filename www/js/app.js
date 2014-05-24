var app;

app = angular.module('drinkapp', ['ionic']);

app.run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("tab", {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  }).state("tab.home", {
    url: "/home",
    views: {
      "tab-home": {
        templateUrl: "templates/home.html"
      }
    }
  }).state("tab.defaults", {
    url: "/defaults",
    views: {
      "tab-defaults": {
        templateUrl: "templates/defaults.html"
      }
    }
  }).state("tab.home-new-game-settings", {
    url: "/home/:gameNew",
    views: {
      "tab-home": {
        templateUrl: "templates/new-game-settings.html"
      }
    }
  }).state("tab.home-new-game", {
    url: "/home/:gameOptions",
    views: {
      "tab-home": {
        templateUrl: "templates/new-game.html"
      }
    }
  }).state("tab.current-game", {
    url: "/current-game",
    views: {
      "tab-current-game": {
        templateUrl: "templates/current-game.html"
      }
    }
  }).state("tab.standings", {
    url: "/standings",
    views: {
      "tab-standings": {
        templateUrl: "templates/standings.html"
      }
    }
  }).state("tab.voices", {
    url: "/voices",
    views: {
      "tab-voices": {
        templateUrl: "templates/voices.html"
      }
    }
  });
  return $urlRouterProvider.otherwise("/tab/home");
});
