(function(e){
  Stack = function(){
    var items = [];
    this.push = function(element){  //添加一个或几个新元素到栈顶
      items.push(element); //push() js自带方法，向数组末尾加入元素
    };
    // 移除最后添加进去的元素
    this.pop = function(){  //移除栈顶的元素，同时返回被移除的元素
      return items.pop(); //pop() js自带方法，移除并返回数组最后一个元素
    };
    this.peek = function(){  //返回最后一个添加的元素
      return items[items.length - 1];
    };
    this.isEmpty = function(){ //查看栈里是否有元素
      return items.length == 0;
    };
    this.clear = function(){  //移除栈里的所有元素
      items = [];
    };
    this.size = function(){  //返回栈里的元素的个数
      return items.length;
    };
    this.print = function(){  //把栈中的元素输出到控制台
      console.log(items.toString());
    };
  };
// 基于栈的进制转换方法
  baseConverter = function(decNumber,base){
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
        while (decNumber > 0){
          rem = Math.floor(decNumber % base);
          remStack.push(rem);
          decNumber = Math.floor(decNumber / base);
        }
        while(!remStack.isEmpty()){
          baseString += digits[remStack.pop()];
        }
        return baseString;
  };
})(window);
