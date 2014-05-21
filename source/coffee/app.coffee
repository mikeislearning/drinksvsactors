app = angular.module 'drinkapp', ['ionic']

app.run ($ionicPlatform) ->
  $ionicPlatform.ready ->


app.config ($stateProvider, $urlRouterProvider) ->

  # Ionic uses AngularUI Router which uses the concept of states
  # Learn more here: https://github.com/angular-ui/ui-router
  # Set up the various states which the app can be in.
  # Each state's controller can be found in controllers.js

  # setup an abstract state for the tabs directive

  # Each tab has its own nav history stack:
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
  ).state("tab.settings",
    url: "/settings"
    views:
      "tab-settings":
        templateUrl: "templates/settings.html"
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
