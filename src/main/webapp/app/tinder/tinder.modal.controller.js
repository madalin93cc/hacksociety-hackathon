(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderModalController', TinderModalController);

    TinderModalController.$inject = ['$uibModalInstance', 'allItems', 'FundService', '$state'];

    function TinderModalController ($uibModalInstance, allItems, FundService, $state) {
        var vm = this;
        vm.allItems = allItems;
        // vm.allItems.push({
        //     thumbnail: "https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjPrZ-sn-nQAhVJsxQKHatfCJcQjRwIBw&url=http%3A%2F%2Fwww.teamnet.ro%2Fro%2Fgrupul-teamnet%2Fstructura-grupului%2Fteamnet%2F&psig=AFQjCNGibo-lm-9PbL1vHU6HL1P1KJJ2HA&ust=1481446212379767",
        //     title: "Teamnet",
        //     subtitle: 'Teamnet',
        //     match: false
        // });

        angular.forEach(vm.allItems, function (item) {
            FundService.getLatestPerformance(item.ticker).then(function (response) {
                item.chart = {};
                item.chart.options = {
                    chart: {
                        type: 'historicalBarChart',
                        // height: 450,
                        // width: 900,
                        margin : {
                            top: 20,
                            right: 20,
                            bottom: 65,
                            left: 50
                        },
                        x: function(d){return d[0];},
                        y: function(d){return d[1];},
                        showValues: true,
                        valueFormat: function(d){
                            return d3.format(',.1f')(d);
                        },
                        duration: 100,
                        xAxis: {
                            axisLabel: 'Time',
                            tickFormat: function(d) {
                                return d3.time.format('%x')(new Date(d))
                            },
                            rotateLabels: 30,
                            showMaxMin: false
                        },
                        yAxis: {
                            axisLabel: 'Growth',
                            axisLabelDistance: -10,
                            tickFormat: function(d){
                                return d3.format(',.1f')(d);
                            }
                        },
                        tooltip: {
                            keyFormatter: function(d) {
                                return d3.time.format('%x')(new Date(d));
                            }
                        },
                        zoom: {
                            enabled: true,
                            scaleExtent: [1, 10],
                            useFixedDomain: false,
                            useNiceScale: false,
                            horizontalOff: false,
                            verticalOff: true,
                            unzoomEventType: 'dblclick.zoom'
                        }
                    }
                };

                var chartData = response.data;

                item.chart.data = [
                    {
                        "key" : "Quantity" ,
                        "bar": true,
                        "values" : chartData
                    }];
                console.log(item);
            });
        });

        vm.ok = function () {
            $uibModalInstance.close();
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        vm.goToFund = function (ticker) {
            $state.go('fund',{ticker:ticker})
            $uibModalInstance.close();
        }
    }
})();
