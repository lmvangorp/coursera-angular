(function() {
'use strict';

angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this; 

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.bought = function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
    
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems(); 
}

function ShoppingListCheckOffService() {
  var service = this;

  // Lists of shopping items
  var toBuyItems = [{ name: 'Cookies', quantity: 10}, { name: 'Chips', quantity: 10 }, { name: 'Milks', quantity: 2 },
                    { name: 'Sparkling Waters', quantity: 12 },  { name: 'Dog Treats', quantity: 20 }];
  var boughtItems = [];

  service.buyItem = function(itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item[0]); 
  };

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getBoughtItems = function() {
      return boughtItems;
  };
}

})();