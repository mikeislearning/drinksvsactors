app.controller('SettingsCtrl', function($scope) {
  return $scope.settingsList = [
    {
      text: "Nationalities",
      checked: true
    }, {
      text: "Dialects",
      checked: true
    }, {
      text: "Actors",
      checked: false
    }, {
      text: "Cartoon Characters",
      checked: false
    }, {
      text: "Politicians",
      checked: false
    }
  ];
});
