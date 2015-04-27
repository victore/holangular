// Controller defines the app's behaviour by defining functions and values

(function () {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gem;
  })

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Dode 12 piezas grandes',
    canPurchase: true
  }
})();
