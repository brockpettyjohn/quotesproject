angular.module('quoteBook')
    .controller('quoteCtrl', function ($scope, quotesService){
    $scope.hello = 'Angular is working';

    $scope.quotes  = quotesService.getQuote();
    
//      $scope.getQuote = function(){
//         $scope.quotes = quotesService.getQuote();
//     }
//    $scope.getQuote();

    });