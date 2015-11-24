"use strict";

module.exports = function(angular) {

    var advancedSearch = angular.module('searchApp.Search.advanced',[]);
    
    advancedSearch.config(configCb);
    
    function configCb($stateProvider) {
        $stateProvider
            .state('search.advanced', {
                url: '/advanced',
                views:{
                    "content": {
                        templateUrl: '/search.html',
                        controller : function($scope) {
                            $scope.greeting = 'Hello world from search advanced!';
                        }
                    }
                }
        });
    };
}




// "use strict";

// module.exports = function(app) {

//     app.config(configCb);

//     function configCb($stateProvider) {
//         $stateProvider
//             .state('search.advanced', {
//                 url: '.advanced',
//                 template: 'Hello advanced search'
//             })
//     };

// };
