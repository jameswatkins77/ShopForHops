app.controller('home_controller', function ($scope, shoppingCartFactory) {
  $scope.view = {};
  $scope.view.message = "Welcome to my App";

  $scope.view.sortByLowest = function() {
    $scope.view.sortBy = 'price';
  }

  $scope.view.sortByHighest = function() {
    $scope.view.sortBy = '-price';
  }

  $scope.view.data = shoppingCartFactory.data;
  $scope.view.bag = 0;
  $scope.view.shoppingCart = [];
  $scope.view.data.quantity = 0;
  $scope.view.seeAlert = false;

  $scope.view.addToCart = function(tea, quantity){
    if (quantity === undefined) {
      $scope.view.seeAlert = true;
    } else {
      $scope.view.seeAlert = false;
      $scope.view.bag++;
      tea.quantity = quantity;
      $scope.view.shoppingCart.push(tea);
    }
  }

  $scope.view.removeFromCart = function(tea){
    $scope.view.bag--;
    var index = $scope.view.shoppingCart.indexOf(tea);
    $scope.view.shoppingCart.splice(index,1);
    $scope.view.orderTotal = $scope.view.findTotal();
  }

  $scope.view.findTotal = function(){
    var total = 0;
    for (var i = 0; i < $scope.view.shoppingCart.length; i++) {
      total += ($scope.view.shoppingCart[i].quantity*$scope.view.shoppingCart[i].price/100);
    }
    return total;
  }

  $scope.view.viewCheckoutScreen = false;
  $scope.view.viewOrderScreen = true;

  $scope.view.openCheckoutScreen = function(){
    $scope.view.viewCheckoutScreen = true;
    $scope.view.viewOrderScreen = false;
    $scope.view.orderTotal = $scope.view.findTotal();
  }

  $scope.view.orderTotal = 0;

  $scope.view.goHome = function (){
    $scope.view.viewCheckoutScreen = false;
    $scope.view.viewOrderScreen = true;
    $scope.view.showAboutUs = false;
    $scope.view.showPaymentScreen = false;
  }

  $scope.view.editCheckoutScreen = false;

  $scope.view.viewEditCheckoutScreen = function(tea){
    $scope.view.editCheckoutScreen = true;
    $scope.view.viewCheckoutScreen = false;
  }

  $scope.view.saveUpdatedQuantity = function(tea, quantityUpdated){
    tea.quantity = quantityUpdated;
    $scope.view.editCheckoutScreen = false;
    $scope.view.viewCheckoutScreen = true;
    $scope.view.orderTotal = $scope.view.findTotal();
  }

  $scope.view.showAboutUs = false;

  $scope.view.showAboutUsTrue = function(){
    $scope.view.showAboutUs = true;
    $scope.view.viewOrderScreen = false;
    $scope.view.viewCheckoutScreen = false;
    $scope.view.showPaymentScreen = false;
  }

  $scope.view.showPaymentScreen = false;

  $scope.view.showPaymentScreenTrue = function(){
    $scope.view.showPaymentScreen = true;
    $scope.view.viewCheckoutScreen = false;
  }
})

app.filter('inStockFilter', function() {
  return function(input) {
    var output;
      if (input === true) {
        output = "Yes";
      } else {
        output = "No";
      }
    return output;
  }
});
