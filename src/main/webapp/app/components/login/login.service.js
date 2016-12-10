(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$uibModal', '$http'];

    function LoginService ($uibModal, $http) {
        var service = {
            open: open,
            parseFeed: function(url) {

                return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        };

        var modalInstance = null;
        var resetModal = function () {
            modalInstance = null;
        };

        return service;

        function open () {
            if (modalInstance !== null) return;
            modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('login');
                        return $translate.refresh();
                    }]
                }
            });
            modalInstance.result.then(
                resetModal,
                resetModal
            );
        }
    }
})();
