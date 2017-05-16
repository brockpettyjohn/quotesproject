angular.module('quoteBook')
    .controller('quoteCtrl', function ($scope, quotesService){
    $scope.hello = 'Angular is working';

    $scope.quotes  = quotesService.getQuote();

    $scope.removeQuote = quotesService.removeQuote;

    $scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  };
   if(quotesService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
    }
    
//      $scope.getQuote = function(){
//         $scope.quotes = quotesService.getQuote();
//     }
//    $scope.getQuote();

    });