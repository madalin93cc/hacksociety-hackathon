(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('main', {
            parent: 'app',
            url: '/main',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('main');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
