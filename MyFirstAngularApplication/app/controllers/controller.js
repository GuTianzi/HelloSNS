/**
 * Created by tianzi.gu on 2016/09/06.
 */
var MyFirstController = function($scope, $http, userData, userGravatar, gitHubUserLookup) {
    $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

    $scope.data = userData.user;

    $scope.getGravatar = function(email) {
        return userGravatar.getGravatar(email);
    };

    $scope.getGitHubUser = function(username) {
        console.log("username: " + username);
        gitHubUserLookup.lookupUser(username).then(onLookupComplete, onError);
    };

    var onLookupComplete = function(response) {
        $scope.user = response.data;
        $scope.status = response.status;

    };

    var onError = function(reason) {
        $scope.error = "Ooops, something went wrong..";
    };
};

app.controller("MyFirstController", MyFirstController);