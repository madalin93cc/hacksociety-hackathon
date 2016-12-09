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
        };

        vm.periods = [
            {
                id: '6m',
                name: "6 months"
            },
            {
                id: '1y',
                name: "1 year"
            },
            {
                id: '2y',
                name: "2 years"
            },
            {
                id: '3y',
                name: "3 years"
            },
            {
                id: '4y',
                name: "4 years"
            },
            {
                id: '5y',
                name: "5 years"
            },
            {
                id: '6y',
                name: "6 years"
            },
            {
                id: '7y',
                name: "7 years"
            },
            {
                id: '8y',
                name: "8 years"
            },
            {
                id: '9y',
                name: "9 years"
            },
            {
                id: '10y',
                name: "10 years"
            }
        ];
        vm.percents = [
            {
                id: '1',
                name: "0-10%"
            },
            {
                id: '2',
                name: "10-25%"
            },
            {
                id: '3',
                name: "25-50%"
            },
            {
                id: '4',
                name: "50-100%"
            },
            {
                id: '5',
                name: "> 100%"
            }
        //    8, 10 ,4 , 9
        ]
    }
})();
