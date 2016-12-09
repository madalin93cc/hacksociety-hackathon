(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state',];

    function HomeController ($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }

        vm.itemsCollection = [{
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
            title: 'Clara Oswin Oswald',
            subtitle: 'clara@gmail.com'
        }, {
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
            title: 'Emy Pond',
            subtitle: 'emy@gmail.com'
        }];
        vm.size = {
            width: 300,
            height: 400
        };

        vm.myCustomFunction = function () {

        };

        vm.showinfo = true;

        vm.collectionEmpty = function(){
            //TODO
        };

        vm.clickedTimes = 0;

        vm.actions = [];

        vm.swipeLeft = function(person){
            vm.actions.unshift({name: 'Left swipe'});
        };

        vm.swipeRight = function(person){
            vm.actions.unshift({name: 'Right swipe'});
        };
    }
})();
