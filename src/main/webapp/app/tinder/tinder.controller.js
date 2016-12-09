(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('TinderController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function HomeController ($scope, Principal, LoginService, $state) {
        var vm = this;

    }
})();
