(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('FundController', FundController);

    FundController.$inject = ['$scope', 'Principal', 'LoginService', '$state', '$sessionStorage'];

    function FundController ($scope, Principal, LoginService, $state, $sessionStorage) {
        var vm = this;


    }
})();
