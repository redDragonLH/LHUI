(function(e){
  Linkeblist = function(){
      var Node = function(element){
      this.element = element;
      this.next = null;
    };
    var length = 0,
        head = null;

        this.append = function(element){ //向列表尾部添加一个新的项
          // 列表为空，添加的是第一个元素，列表不为空。向其追加元素
          var node = new Node(element),
              current;
              if(head === null){
                head = node;
              }else{
                current = head;
                // 循环列表，直到找到最后一项
                while(current.next){
                  current = current.next;
                }
                // 找到最后一项，将其next赋为node，建立链接
                current.next = node;
              }
              length++; //更新列表的长度
        },
        this.insert = function(position,element){  //向列表的特定位置插入一个新的项
          //检查越界值
          if(position > -1 && position < length){
            var node = new Node(element),
                current = head,  //获取唯一直到的元素head 第一个元素
                previous,
                index = 0;
            if(position === 0){
              node.next = current;  //把node放到head位置上
              head = node;
            }else{
              while(index++ < position){//找到目标位置 
                previous = current;
                current = current.next;
              }
              node.next = current;
              previous.next = node;
            }
            length++;
            return true;
          }else{
            return false;
          }
        },
        this.removeAt = function(position){  //从列表的特定位置移除一项 并返回被删元素
          //检查越界值
          if(position > -1 && position < length){
            var current = head,  //head第一个元素
                previous,
                index = 0;
          // 移除第一项
          if(position === 0){
            head = current.next;
          }else{
            while(index++ < position){
              previous = current;
              current = current.next;
            }
            // 将previous与current的下一项链接起来：跳过current，从而移除它
            previous.next = current.next;
          }
            length--;
            return current.element;
          }else{
            return null;
          }
        },
        this.remove = function(element){ //从列表中移除一项

        },
        this.indexOf = function(element){  //返回元素在列表中的索引。如果列表中没有该元素则返回 -1

        },
        this.isEmpty = function(){  //查看列表中是否有元素，没有返回itrue，有返回false

        },
        this.size = function(){  //返回链表包含的元素个数

        },
        this.toString = function(){  //由于使用node类，就需要重写继承自javascript对象默认的toString方法，让其只输出元素的值

        },
        this.print = function(){

        }
  };
})(window);
