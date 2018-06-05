
// var myApp = angular.module("myApp", []);
// myApp.controller('MyController', function($scope) {
//     $scope.info = {
//         firstname: "Mahesh",
//         lastname: "Parashar",
//         subject: [
//             { name: "Physics", marks: 65},
//             { name: "Chemistry", marks: 70},
//             { name: "Math", marks: 75},
//             { name: "English", marks: 80},
//             { name: "Hindi", marks: 85},
//         ],
//         fullname: function(){
//             var infoObject;
//             infoObject = $scope.info;
//             return infoObject.firstname + " " + infoObject.lastname; 
//         }
//     }
// });

var myapp = angular.module('myapp', []);
myapp.controller("MyController", function($scope, $http){
    var url = "data.txt";
    $http.get(url).then(function(response){
        $scope.infos = response.data;
    });
});