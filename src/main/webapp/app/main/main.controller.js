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
            $state.go('tinder', {}, {reload: true});
        };

        vm.periods = [
            {
                id: 'sixMonth',
                name: "6 months"
            },
            {
                id: 'oneYear',
                name: "1 year"
            },
            {
                id: 'tyoYear',
                name: "2 years"
            },
            {
                id: 'threeYear',
                name: "3 years"
            },
            {
                id: 'fourYear',
                name: "4 years"
            },
            {
                id: 'fiveYear',
                name: "5 years"
            },
            {
                id: 'sixYear',
                name: "6 years"
            },
            {
                id: 'sevenYear',
                name: "7 years"
            },
            {
                id: 'eightYear',
                name: "8 years"
            },
            {
                id: 'nineYear',
                name: "9 years"
            },
            {
                id: 'tenYear',
                name: "10 years"
            }
        ];
        vm.percents = [
            {
                id: '1',
                name: "0-10%",
                min: 0,
                max: 10
            },
            {
                id: '2',
                name: "10-25%",
                min: 10,
                max: 25
            },
            {
                id: '3',
                name: "25-50%",
                min: 25,
                max: 50
            },
            {
                id: '4',
                name: "50-100%",
                min: 50,
                max: 100
            },
            {
                id: '5',
                name: "> 100%",
                min: 100,
                max: 1000
            }
        //    8, 10 ,4 , 9
        ];

        vm.loadFeed1 = function(e) {
            LoginService.parseFeed($scope.feedSrc1).then(function(res) {
                vm.feeds1 = res.data.responseData.feed.entries;
            });

        };
        vm.loadFeed2 = function(e) {
            LoginService.parseFeed($scope.feedSrc2).then(function(res) {
                vm.feeds2 = res.data.responseData.feed.entries;
            });

        };
    }
})();
