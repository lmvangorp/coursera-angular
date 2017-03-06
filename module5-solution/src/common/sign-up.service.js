(function () {
    "use strict";

    angular
        .module('common')
        .service('SignUpService', SignUpService);


    SignUpService.$inject = ['MenuService'];
    function SignUpService(MenuService) {
        var service = this;
        var user;

        service.addUser = function (firstName, lastName, emailAdd, phoneNumber, itemDetails){
            user = ({
                fName: firstName,
                lName: lastName,
                email: emailAdd,
                pNumber: phoneNumber,
                menuItem: itemDetails.name,
                description: itemDetails.description,
                shortName: itemDetails.short_name
            });

            console.log('User:', user);
        };

        service.getUser = function () {
            return user;
        }
    }



})();
