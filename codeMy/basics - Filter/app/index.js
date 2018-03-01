
var myApp=angular.module('myApp',[]);
myApp.controller('firstControllers',function($scope){
    $scope.msg = "Runoob";
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    // 1、uppercase，lowercase 大小写转换
    // {{ "lower cap string" | uppercase }}   // 结果：LOWER CAP STRING
    // {{ "TANK is GOOD" | lowercase }}      // 结果：tank is good
    // 2、date 格式化
    // {{1490161945000 | date:"yyyy-MM-dd HH:mm:ss"}} // 2017-03-22 13:52:25
    // 3、number 格式化（保留小数）
    // {{149016.1945000 | number:2}}
    // 4、currency货币格式化
    // {{ 250 | currency }}            // 结果：$250.00
    // {{ 250 | currency:"RMB ￥ " }}  // 结果：RMB ￥ 250.00
    // 5、filter查找
    // 输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
    // filter 过滤器从数组中选择一个子集
    //  // 查找name为iphone的行
    // {{ [{"age": 20,"id": 10,"name": "iphone"},
    // {"age": 12,"id": 11,"name": "sunm xing"},
    // {"age": 44,"id": 12,"name": "test abc"}
    // ] | filter:{'name':'iphone'} }}        
    // 6、limitTo 截取
    // {{"1234567890" | limitTo :6}} // 从前面开始截取6位
    // {{"1234567890" | limitTo:-4}} // 从后面开始截取4位
    // 7、orderBy 排序
    //  // 根id降序排
    // {{ [{"age": 20,"id": 10,"name": "iphone"},
    // {"age": 12,"id": 11,"name": "sunm xing"},
    // {"age": 44,"id": 12,"name": "test abc"}
    // ] | orderBy:'id':true }}

    // // 根据id升序排
    // {{ [{"age": 20,"id": 10,"name": "iphone"},
    // {"age": 12,"id": 11,"name": "sunm xing"},
    // {"age": 44,"id": 12,"name": "test abc"}
    // ] | orderBy:'id' }
});
myApp.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});


