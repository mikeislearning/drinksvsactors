app = angular.module 'drinkapp', ['ionic']

#-----------------------------------------------------------------
# Ionic Dependencies
#-----------------------------------------------------------------


app.run ($ionicPlatform) ->
  $ionicPlatform.ready ->
  	cordova.plugins.Keyboard.hideKeyboardAccessoryBar true  if window.cordova and window.cordova.plugins.Keyboard
  	StatusBar.styleDefault()  if window.StatusBar


#-----------------------------------------------------------------
# Router
#-----------------------------------------------------------------


app.config ($stateProvider, $urlRouterProvider) ->

  $stateProvider.state("tab",
    url: "/tab"
    abstract: true
    templateUrl: "templates/tabs.html"
  ).state("tab.home",
    url: "/home"
    views:
      "tab-home":
        templateUrl: "templates/home.html"
        # controller: "IndexCtrl"
  ).state("tab.defaults",
    url: "/defaults"
    views:
      "tab-defaults":
        templateUrl: "templates/defaults.html"
        # controller: "IndexCtrl"
  ).state("tab.home-new-game-settings",
    url: "/home/:gameNew"
    views:
      "tab-home":
        templateUrl: "templates/new-game-settings.html"
        # controller: "ShowCtrl"
  ).state("tab.home-new-game",
    url: "/home/:gameOptions"
    views:
      "tab-home":
        templateUrl: "templates/new-game.html"
        # controller: "ShowCtrl"
  ).state("tab.current-game",
    url: "/current-game"
    views:
      "tab-current-game":
        templateUrl: "templates/current-game.html"
        # controller: ""
  ).state("tab.standings",
    url: "/standings"
    views:
      "tab-standings":
        templateUrl: "templates/standings.html"
        # controller: ""
  ).state "tab.voices",
    url: "/voices"
    views:
      "tab-voices":
        templateUrl: "templates/voices.html"
        # controller: ""

  # if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise "/tab/home"
