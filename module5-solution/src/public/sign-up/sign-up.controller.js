(function () {
    'use strict';

    angular
        .module('public')
        .controller('SignUpController', SignUpController)

    SignUpController.$inject = ['MenuService', 'SignUpService']
    function SignUpController(MenuService, SignUpService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function () {
            var favoriteItem = signUpCtrl.favitem.toUpperCase();
            var p = MenuService.checkMenuItem(favoriteItem);

            p.then(function (itemDetails) {
                if (itemDetails) {
                    SignUpService.addUser(signUpCtrl.firstname, signUpCtrl.lastname,
                        signUpCtrl.email, signUpCtrl.phone, itemDetails);
                    signUpCtrl.displayError = false;
                    signUpCtrl.completed = true;
                }
                else {
                    signUpCtrl.displayError = true;
                    signUpCtrl.completed = false;
                }
            })


        };
    }

})();