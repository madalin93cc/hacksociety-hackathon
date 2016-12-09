(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('MainController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', '$sessionStorage'];

    function HomeController ($scope, Principal, LoginService, $state, $sessionStorage) {
        var vm = this;

        vm.info = {
            account: {},
            expect: {}
        };

        vm.goToTinder = function () {
            $sessionStorage["info"] = vm.info;
            $state.go('tinder');
        }
    }
})();
