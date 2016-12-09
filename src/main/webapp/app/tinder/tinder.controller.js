(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'info'];

    function HomeController ($scope, Principal, LoginService, $state, info) {
        var vm = this;

        vm.info = info;
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

        vm.swipeend = function(){
            vm.actions.unshift({name: 'Collection Empty'});
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
