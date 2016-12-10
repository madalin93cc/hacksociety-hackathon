(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('FundController', FundController);

    FundController.$inject = ['$scope', '$stateParams', 'FundService'];

    function FundController ($scope, $stateParams, FundService) {
        var vm = this;
        var ticker = $stateParams.ticker;
        var chartData;

        FundService.getPerformance(ticker).then(function (response) {
            vm.options = {
                chart: {
                    type: 'historicalBarChart',
                    height: 450,
                    width: 900,
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
                        axisLabel: 'X Axis',
                        tickFormat: function(d) {
                            return d3.time.format('%x')(new Date(d))
                        },
                        rotateLabels: 30,
                        showMaxMin: false
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
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

            chartData = response.data.resultMap.RETURNS[0].performanceChart;

            vm.data = [
                {
                    "key" : "Quantity" ,
                    "bar": true,
                    "values" : chartData
                }];
        });

    }
})();
