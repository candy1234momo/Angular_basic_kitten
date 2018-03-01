
var myApp=angular.module('myApp',[],function($provide){
    /**
    *$provide
    *自定义服务参数，控制器中都可以调用,相当于myApp里面的额全局参
    */
    $provide.provider('CustomService',function(){
        this.$get=function(){
            return {
                message:'CustomService Message',
                age:'123'
            }
        }
    });
    $provide.provider('CustomService2',function($provide){
        this.$get=function(){
            return {
                message:'CustomService Message2',
                age:'12322'
            }
        }
    });
    /**
    *$factory
    *自定义服务参数，控制器中都可以调用,相当于myApp里面的额全局参
    *$provider简便方法，可以是任何值。对象、字符串
    *与myApp.service();是一样的功能
    */
    $provide.factory('CustomFactory',function(){
        return 'aaa'
    });
    /**
    *$service
    *自定义服务参数，控制器中都可以调用,相当于myApp里面的额全局参
    *$provider简便方法，只能是对象
    *与myApp.factory();的功能是一样
    */
    $provide.service('CustomService3',function(){
        return [1,2,3]
    });


});
myApp.controller('firstControllers',function($scope,CustomService,CustomService2,CustomFactory,CustomService3){
    $scope.name="dshujnksd";
    $scope.message=CustomService.message;
    $scope.age=CustomService.age;
    $scope.message2=CustomService2.message;
    $scope.age2=CustomService2.age;
    $scope.factory=CustomFactory;
    $scope.service=CustomService3;
})

/*
*相当于全局函数
*/
var firstController=function($scope){
	$scope.names="zhangsan";    
}


//myApp.service();
//myApp.factory();
// myApp.factory('CustomFactory',function(){
//     return 'aaa'
// });
// myApp.service('Customservices',function(){
//     return 'aaa'
// });