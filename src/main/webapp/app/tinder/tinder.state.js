(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('tinder', {
            parent: 'app',
            url: '/tinder',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/tinder/tinder.html',
                    controller: 'TinderController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('tinder');
                    return $translate.refresh();
                }],
                info: function ($sessionStorage) {
                    return $sessionStorage["info"]
                }
            }
        });
    }
})();
