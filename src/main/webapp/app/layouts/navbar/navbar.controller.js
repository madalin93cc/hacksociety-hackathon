(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService', '$sessionStorage'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService, $sessionStorage) {
        var vm = this;

        vm.isNavbarCollapsed = true;
        console.log($sessionStorage);
        try {
            vm.user = $sessionStorage.info.account;
            vm.isAuthenticated = Boolean(vm.user.name);
        } catch(err) {
            vm.user = null;
            vm.isAuthenticated = false;
        }

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            collapseNavbar();
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }
    }
})();
