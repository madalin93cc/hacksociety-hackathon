(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'info', 'TinderService', 'nasdaqs', 'toastr'];

    function HomeController ($scope, Principal, LoginService, $state, info, TinderService, nasdaqs, toastr) {
        var vm = this;
        vm.itemsCollection = [];
        console.log(nasdaqs);
        angular.forEach(nasdaqs, function (nasdaq) {
            vm.itemsCollection.push({
                thumbnail: nasdaq.imageUrl,
                title: nasdaq.name + " - " + nasdaq.ticker,
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

        function checkMatch(item, past) {
            var ticker = item.title.substr(item.title.lastIndexOf(" ") + 1);
            var selItem = null;
            for (var i = 0; i < nasdaqs.length; i++) {
                if (nasdaqs[i].ticker === ticker) {
                    selItem = nasdaqs[i];
                    break;
                }
            }
            var selItemVal = selItem.latestPerf[past.period.id];
            var reqVal = past.percent.name;
            debugger;
        }

        vm.swipeRight = function(item){
            // TODO check if match
            checkMatch(item, info.past);
            matches.push(item);
            console.log(matches);
            toastr.success("It's a match!", "Toastr fun!");
        };
    }
})();
