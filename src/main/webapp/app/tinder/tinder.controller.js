(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'info', 'TinderService', 'nasdaqs', 'toastr'];

    function HomeController ($scope, Principal, LoginService, $state, info, TinderService, nasdaqs, toastr) {
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
        var matches = [];

        vm.myCustomFunction = function () {

        };

        vm.showinfo = true;

        vm.collectionEmpty = function(){
            //TODO
        };


        vm.swipeLeft = function(item){

        };

        vm.swipeRight = function(item){
            // TODO check if match
            matches.push(item);
            console.log(matches)
            toastr.success("It's a match!", "Toastr fun!");
        };
    }
})();
