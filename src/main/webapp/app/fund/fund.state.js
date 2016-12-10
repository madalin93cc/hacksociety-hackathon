(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('fund', {
            parent: 'app',
            url: '/ticker/{ticker}',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/fund/fund.html',
                    controller: 'FundController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('fund');
                    return $translate.refresh();
                }],
                nasdaq: function (TinderService, $stateParams) {
                    return TinderService.getNasdaq($stateParams.ticker);
                }
            }
        });
    }
})();
