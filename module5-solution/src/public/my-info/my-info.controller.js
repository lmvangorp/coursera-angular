(function () {
"use strict";

angular
    .module('public')
    .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'ApiPath'];
function MyInfoController(user, ApiPath) {
  var MyInfoCtrl = this;
  
  MyInfoCtrl.user = user;
  MyInfoCtrl.basePath = ApiPath;
}

})();