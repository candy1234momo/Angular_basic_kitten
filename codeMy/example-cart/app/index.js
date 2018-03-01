var cartController=function($scope){
	$scope.cart=[
        {
        	id:'1000',
        	name:'ipad1',
        	quantity:10,
        	price:1000
        },
        {
        	id:'1001',
        	name:'ipad2',
        	quantity:120,
        	price:10200
        },
        {
        	id:'1002',
        	name:'ipad3',
        	quantity:130,
        	price:10040
        },
        {
        	id:'1004',
        	name:'ipad4',
        	quantity:120,
        	price:10002
        }
	];

	/**
	*计算购买总价
	*/
	$scope.totalPrice=function(){
		var total=0;
		angular.forEach($scope.cart,function(item){
			total+=item.quantity*item.price;
		});
		return total;
	}
	/**
    *计算总数
    */
    $scope.totalQuantity=function(){
    	var quantity=0;
    	angular.forEach($scope.cart,function(item){
    		quantity+=item.quantity;
    	})
    	return quantity;
    }
    /**
    *找到一个元素的索引
    */
    var findIndex=function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
            	index=key;
            	return;
            }
        });
        return index;
    }
    /**
    *为某个元素添加一个数量
    */
     $scope.add=function(id){
     	var index=findIndex(id);
     	if(index!==-1){
     		++$scope.cart[index].quantity;
     	}
     }
    /**
    *为某个元素减少一个数量
    */
    $scope.reduce=function(id){
    	var index=findIndex(id);
    	if(index!==-1){
    		if($scope.cart[index].quantity>1){
	    		--$scope.cart[index].quantity;
	    	}else{
				var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(id);
                }
	    	}
    	}
    }
    /**
    *移除某个商品
    */
    $scope.remove=function(id){
    	var index=findIndex(id);
    	if(index!==-1){
			$scope.cart.splice(index,1)    			
    	}
    }
    /**
    *监听数量 如果小于1则让用户判断是否要删除产品
    */
    $scope.$watch('cart',function(newValue,oldValue){
    	angular.forEach(newValue,function(item,key){
             if(item.quantity<1){
             	var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
             }
    	})
    },true)


}