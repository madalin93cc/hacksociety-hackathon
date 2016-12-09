(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .factory('TinderService', TinderService);

    TinderService.$inject = ['$http'];

    function TinderService ($http) {
        var service = {
            getNasdaqs: getNasdaqs
        };

        return service;

        function getNasdaqs () {
            return $http.get('public/nasdaqs').then(function (response) {
                return response.data;
            },
            function (response) {
                console.error(response.data);
            });
        }
    }
})();
