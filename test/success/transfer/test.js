(function(global){
    var myfun1=function(){
        console.log('myfun1');
    };
    var myfun2=function(){
        console.log('myfun2');
    };
    //设置你的命名空间
    var mypackageName="L.H";
    var packageArray=mypackageName.split(".");
    var finalObj=packageArray.reduce(function(prev,current){

        return prev[current]||(prev[current]={});
    }, global);
    //将你的函数绑定到命名空间上
    finalObj.myfun1= myfun1;
    finalObj.myfun2= myfun2;


}(window));

L.H.myfun1();//输出 myfun1
(function(window){
  LH={
    fun1:function(){
        console.log('LHfun1');
    }
  };
  window.lh = LH;
})(window);
