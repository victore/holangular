// Controller defines the app's behaviour by defining functions and values

(function () {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  })

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Dode 12 piezas grandes',
    canPurchase: true,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '5 lados gema',
    canPurchase: true,
  }
];

})();
