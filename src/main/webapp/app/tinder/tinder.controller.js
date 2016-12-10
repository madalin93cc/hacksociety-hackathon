(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', TinderController);

    TinderController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'info', 'TinderService', 'nasdaqs', 'toastr', '$uibModal'];

    function TinderController ($scope, Principal, LoginService, $state, info, TinderService, nasdaqs, toastr, $uibModal) {
        var vm = this;
        vm.itemsCollection = [];
        console.log(nasdaqs);
        angular.forEach(nasdaqs, function (nasdaq) {
            vm.itemsCollection.push({
                thumbnail: nasdaq.imageUrl,
                title: nasdaq.name + " - " + nasdaq.ticker,
                subtitle: 'clara@gmail.com',
                ticker: nasdaq.ticker
            })
        });
        vm.info = info;
        var matches = [];

        vm.myCustomFunction = function () {
        };

        vm.showinfo = true;

        vm.open = function () {
            // var parentElem = parentSelector ?
            //     angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'tinderModal.html',
                controller: 'TinderModalController',
                controllerAs: 'vm',
                backdrop: 'static',
                size: 'lg',
                resolve: {
                    allItems: function () {
                        var allItems = [];
                         angular.forEach(vm.itemsCollection, function (item) {
                           var found = false;
                           for (var i = 0; i < matches.length; i++) {
                               if (item.title === matches[i].title) {
                                   found = true;
                               }
                           }
                           if (found) {
                               item.match = true;
                           } else {
                               item.match = false;
                           }
                           allItems.push(item);
                        });
                        return allItems;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {

            }, function () {

            });
        };

        vm.collectionEmpty = function(){
            vm.open()
        };

        vm.swipeLeft = function(item){

        };

        function checkMatch(item, past) {
            var ticker = item.ticker;
            var selItem = null;
            for (var i = 0; i < nasdaqs.length; i++) {
                if (nasdaqs[i].ticker === ticker) {
                    selItem = nasdaqs[i];
                    break;
                }
            }
            var selItemVal = selItem.latestPerf[past.period.id] * 100;
            if ((selItemVal >= past.percent.min) && (selItemVal < past.percent.max)) {
                return true
            } else {
                return false
            }
        //    TODO la fel pentru prima perioada
        }

        vm.swipeRight = function(item){
            // TODO check if match
            if (checkMatch(item, info.past)) {
                matches.push(item);
                toastr.success("It's a match!", "Toastr fun!");
            }
            console.log(matches);
        };
    }
})();
