(function () {
'use strict';

angular
  .module('data')
  .controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories) {
  var menu = this;

  menu.categories = categories;
}

})();