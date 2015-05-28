(function() {
    'use strict';

     angular
        .module('app')
        .controller('DialogController', DialogController);

    DialogController.$inject = ['$mdDialog', 'task'];
    function DialogController($mdDialog, task) {
        var vm = this,
            title = 'New task';

        if (typeof task === 'undefined') {
            task = {};
            title = 'Edit task';
        }

        vm.task    = task;
        vm.title   = title;
        vm.cancel  = cancel;
        vm.success = success;

        ////////////

        function cancel() {
            $mdDialog.cancel();
        }

        function success(task) {
            $mdDialog.hide(task);
        }
    }

})();
