(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'info', 'TinderService', 'nasdaqs'];

    function HomeController ($scope, Principal, LoginService, $state, info, TinderService, nasdaqs) {
        var vm = this;
        vm.itemsCollection = [];
        angular.forEach(nasdaqs, function (nasdaq) {
            vm.itemsCollection.push({
                thumbnail: nasdaq.imageUrl,
                title: nasdaq.ticker,
                subtitle: 'clara@gmail.com'
            })
        });
        vm.info = info;

        vm.size = {
            width: 300,
            height: 400
        };

        vm.myCustomFunction = function () {

        };

        vm.showinfo = true;

        vm.collectionEmpty = function(){
            //TODO
            console.log("plm");
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
