(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('FundController', FundController);

    FundController.$inject = ['$scope', '$stateParams', 'FundService'];

    function FundController ($scope, $stateParams, FundService) {
        var vm = this;
        var ticker = $stateParams.ticker;

        FundService.getPerformance(ticker).then(function (response) {
            vm.performanceChartOptions = {
                chart: {
                    type: 'historicalBarChart',
                    height: 250,
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
        });

    }
})();
