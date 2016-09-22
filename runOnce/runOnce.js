(function(e){
  runOnce= function(fn, context) { //控制让函数只触发一次
    console.log(context)
    return function () {
        try {
            fn.apply(context || this, arguments);
        }
        catch (e) {
            // console.error(e);//一般可以注释掉这行
        }
        finally {
            fn = null;
        }
    };
  };
})(window);
