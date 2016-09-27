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
    // 优先级队列
    PriorityQueue = function(element,priority){
      var items = [];
      function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
      }
      this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);
        if(this.isEmpty()){
          items.push(queueElement);
        }else{
          var added = false;
          for(var i = 0; i<items.length;i++){
            if(queueElement.priority < items[i].priority){
              items.splice(i,0,queueElement);
              added = true;
              break;
            }
          }
          if(!added){
            items.push(queueElement)
          }
        }
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
