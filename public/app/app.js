(function() {

    var jobsFinder = angular.module('jobsFinder', []);

    jobsFinder.controller('JobsCtrl', ['$scope', function($scope) {

        $scope.title = 'Jobs Finder';

        $scope.jobs = [{
            title: 'Software Engineer',
            description: 'Full-stack Node.js software engineer'
        }, {
            title: 'Scrum Master',
            description: 'Experienced Scrum Master and Agile evangelist'
        }];

    }]);

})();