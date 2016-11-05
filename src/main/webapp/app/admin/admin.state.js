(function () {
    'use strict';

    angular
        .module('jhipsterApp1App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('admin', {
            abstract: true,
            parent: 'app'
        });
    }
})();
