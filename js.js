var app = angular.module('myForm', ['ngMessages']); //on déclare le module et on lui donne un nom

app.controller('formCtrl', ['$scope', function($scope){ //on donne les fonctions du controleur
  $scope.formsArray = []; //on crée un tableau vide pour pouvoir l'incrémenter des formulaires remplis ensuite
  $scope.clickedButton = function() { //au click sur le bouton, on lance la fonction suivante
    $scope.formsArray.push({ //on push (pousse) dans le tableau chacune des informations
      name: $scope.name, //dans la colonne "name", on ajoute le name (ng-model de l'index)
      email: $scope.email,  //dans la colonne "email", on ajoute le email (ng-model de l'index)
      subject: $scope.subject, //dans la colonne "subject", on ajoute le subject (ng-model de l'index)
      textsubject: $scope.textsubject //dans la colonne "textsubject", on ajoute le textsubject (ng-model de l'index)
    });
  };
}]);
