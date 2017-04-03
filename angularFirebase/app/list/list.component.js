angular.
  module('todoList').
  component('workList', {
    templateUrl: 'list/list.template.html',
    controller: function myCtrl($scope) {
      //      var ref=firebase.database().ref();

      //       $scope.products = ["Milk", "Bread", "Cheese"];
      //       $scope.products = $firebaseArray(ref);

      //          // var todosRef = new Firebase(FIREBASE_URL);


      //         //  GET TODOS AS AN ARRAY
      //           // $scope.todos = $firebaseArray(todosRef);


      //             $scope.products = ["Milk", "Bread", "Cheese"];

      // $scope.addItem = function () {
      //           $scope.errortext = "";
      //           if (!$scope.addMe) {return;}
      //           if ($scope.products.indexOf($scope.addMe) == -1) {
      //               $scope.products.push($scope.addMe);
      //           } else {
      //               $scope.errortext = "The item is already in your shopping list.";
      //           }
      //       }
      //       $scope.removeItem = function (x) {
      //           $scope.errortext = "";    
      //           $scope.products.splice(x, 1);
      //       }


         


    }
  }


  );





angular.module('todoList').controller("myController",["$scope","$firebaseArray",
    function($scope,$firebaseArray){

   var todosRef = new Firebase('https://test-ccfe6.firebaseio.com/');

    // GET TODOS AS AN ARRAY
   $scope.todos = $firebaseArray(firebase.database().ref('articles'));
    
     //$scope.products = ["Milk", "Bread", "Cheese"];

      $scope.addItem = function () {
         var timestamp = new Date().valueOf();

              $scope.todos.$add({
                id:timestamp,
               name:$scope.addMe,
            });


            }



            $scope.removeItem = function (index) {
               // if (todo.id === undefined)return;
               
              $scope.todos.$remove(index);
            }

}]);
