/**
 * Following JohnPapa angular styleguide...
 * https://github.com/johnpapa/angular-styleguide
 */
(function() {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ngMdIcons',
            'pouchDB',
        ])
        .filter('nl2br', nl2br)
        .config(AppConfig)
        .constant('cfg', {
            'pouchDBName': 'tasks',
            'pouchDBRemote': 'http://localhost:5984/',
            // 'pouchDBRemote': 'http://localhost:5984/'
        });


    AppConfig.$inject = ['$mdThemingProvider', '$mdIconProvider', 'cfg'];
    function AppConfig($mdThemingProvider, $mdIconProvider, cfg) {

        $mdIconProvider
            .icon("add",  "assets/svg/add.svg",  24)
            .icon("edit", "assets/svg/edit.svg", 24)
            .icon("save", "assets/svg/save.svg", 24)
            .icon("menu", "assets/svg/menu.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('blue');
    }

    nl2br.$inject = ['$sce'];
    function nl2br($sce) {
        return function(input) {
            if (input !== void 0) {
                return $sce.trustAsHtml(input.replace(/\n/g, '<br>'));
            }
        };
    }

})();
