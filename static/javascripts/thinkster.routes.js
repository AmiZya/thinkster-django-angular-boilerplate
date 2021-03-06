(function(){
    angular
        .module('thinkster.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/register',{
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/templates/authentication/register.html'
        }).otherwise('/');
    }
})();
