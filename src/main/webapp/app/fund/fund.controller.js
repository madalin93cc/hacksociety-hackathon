(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('FundController', FundController);

    FundController.$inject = ['$scope', '$stateParams', 'FundService', 'LoginService', 'nasdaq'];

    function FundController ($scope, $stateParams, FundService, LoginService, nasdaq) {
        var vm = this;
        var ticker = $stateParams.ticker;
        vm.nasdaq = nasdaq;
        FundService.getPerformance(ticker).then(function (response) {
            vm.performanceChartOptions = {
                chart: {
                    type: 'historicalBarChart',
                    height: 400,
                    width: 400,
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
                        axisLabel: 'Performance chart',
                        tickFormat: function(d) {
                            return d3.time.format('%Y')(new Date(d))
                        },
                        // rotateLabels: 30,
                        showMaxMin: true
                    },
                    yAxis: {
                        // axisLabel: 'Y Axis',
                        axisLabelDistance: -10,
                        tickFormat: function(d){
                            return d3.format(',.0f')(d);
                        },
                        showMaxMin: false
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

            vm.performanceChartData = [
                {
                    "key" : "Quantity" ,
                    "bar": true,
                    "values" : response.data.RETURNS[0].performanceChart
                }];
            vm.companyDescription = FundService.getCompanyDescription(ticker);
        });
        FundService.getLatestPerformance(ticker).then(function (response) {
            vm.performanceChartOptions2 = {
                chart: {
                    type: 'historicalBarChart',
                    height: 400,
                    width: 400,
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
                        axisLabel: 'Performance chart (last 4 years)',
                        tickFormat: function(d) {
                            return d3.time.format('%Y')(new Date(d))
                        },
                        // rotateLabels: 30,
                        showMaxMin: true
                    },
                    yAxis: {
                        // axisLabel: 'Y Axis',
                        axisLabelDistance: -10,
                        tickFormat: function(d){
                            return d3.format(',.0f')(d);
                        },
                        showMaxMin: false
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

            vm.performanceChartData2 = [
                {
                    "key" : "Quantity" ,
                    "bar": true,
                    "values" : response.data
                }];
        });

        FundService.getRisks(ticker).then(function (response) {
            var risk = response.data;

            vm.optionsPie = {
                chart: {
                    type: 'pieChart',
                    height: 400,
                    width: 400,
                    x: function (d) {
                        return d.key;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };

            vm.dataPie = [
                {
                    key: "Country Risk",
                    y: risk.countryRisk
                },
                {
                    key: "Risk Market",
                    y: risk.riskMarket
                },
                {
                    key: "Risk Sector",
                    y: risk.riskSector
                },
                {
                    key: "Risk Specific",
                    y: risk.riskSpecific
                }
            ];

            $scope.optionsRisk = {
                chart: {
                    type: 'bulletChart',
                    duration: 500
                }
            };

            $scope.dataRisk = {
                "title": "Total Risk",
                "ranges": [25,5,50],
                "measures": [risk.totalRisk],
                "markers": [30]
            }
        });


        vm.loadFeed = function(e) {
            LoginService.parseFeed($scope.feedSrc).then(function(res) {
                vm.feeds = res.data.responseData.feed.entries;
            });

        };
    }
})();
