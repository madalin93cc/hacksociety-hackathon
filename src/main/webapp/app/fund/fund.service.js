(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .factory('FundService', FundService);

    FundService.$inject = ['$http'];

    function FundService ($http) {
        var service = {
            getPerformance: getPerformance,
            getLatestPerformance: getLatestPerformance,
            getRisks: getRisks
        };

        return service;

        function getPerformance (ticker) {
            return $http.get('public/fund/performance/' + ticker);
        }

        function getRisks (ticker) {
            return $http.get('public/fund/risk/' + ticker);
        }

        function getLatestPerformance (ticker) {
            return $http.get('public/fund/performance/latest/' + ticker);
        }
    }
})();
