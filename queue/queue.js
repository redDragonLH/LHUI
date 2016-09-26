(function(e){
    Queue = function(){
      var items = [];
      this.enqueue = function(element){  //向队列尾部添加一个或多个新的项
        items.push(element);
      };
      this.dequeue = function(){  //移除队列的第一项，并返回被移除的元素
        return items.shift();
      };
      this.front = function(){ //返回队列中第一个元素
        return items[0];
      };
      this.isEmpty = function(){  //查看队列中是否有元素
        return items.length == 0;
      };
      this.size = function(){  //返回队列的个数
        return items.length;
      };
      this.print = function(){
        console.log(items.toString());
      };
    };
})(window);
