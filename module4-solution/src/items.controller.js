(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var menuItems = this;

  menuItems.items = items.menu_items;

  console.log(items.menu_items);
}

})();