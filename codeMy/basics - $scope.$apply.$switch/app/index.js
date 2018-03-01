var firstController=function($scope){
	/*
	*1.数据绑定
	*/
	$scope.name="zhangsan";
    
    /**
    *2.1$scope.$apply
    *内部函数去改变页面需要使用$apply去触发脏检查
    */
	$scope.data=new Date();
	// setInterval(function(){
	// 	// 这里虽然变 但是并没有触发 脏检查
	// 	$scope.data=new Date();
	// },1000);

	setInterval(function(){
		//....会去触发脏检查
		$scope.$apply(function(){
			$scope.data=new Date();
		})
	},1000);

	/**
    *2.2$scope.$watch
    *监听一个model 当一个model每次改变时 都会触发函数
    */
    //2.2.1对象
    $scope.name2="lisi2";    
    $scope.count=0;
    $scope.$watch('name2',function(newValue,oldValue){
        ++$scope.count;
        if($scope.count>30){
        	$scope.name2="已经大于30次啦"
        }
    });
    //2.2.2数组
    //有一个改变就执行函数，必须true。
    //也可以监听数组中的单个对象data2.name，无需TRUE。
    $scope.data2={
    	name:'zhangs',
    	count:0
    }
    $scope.$watch('data2',function(){

    },true);

}
var secondController=function($scope){
	$scope.name="lisi"
}