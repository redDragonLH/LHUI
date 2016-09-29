(function(e){
  Set = function(){
    var items ={};
    this.add = function(value){  //向集合添加一个新的项
      if(!this.has(value)){
        items[value] = value;
        return true;
      }
      return false;
    },
    this.remove = function(value){  //移除一个值
      if(thsi.has(value)){
        delete items[value];
        return true;
      }
      return false;
    },
    this.has = function(value){  //判断一个值是否在集合中，值在集合中，返回true
      return items.hasOwnProperty(value);
    },
    this.clear = function(){  //移除集合中的所有项
      items = {};
    },
    this.size = function(){  //返回元素数量
      var count = 0;
      for(var prop in items){
        if(items.hasOwnProperty(prop))
          ++count;
      }
      return count;
    },
    this.values = function(){  //返回一个数组，里面包含所有的值
      var keys= [];
      for(var key in items){
        keys.push(key);
      }
      console.log(keys)
      return keys;
    },
    // 集合可以操作，有 并，交，差，子 集
    //
    // 并集方法，元素存在于A，或元素存在于B中
    this.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for (var i =0;i<values.length;i++){
        unionSet.add(values[i]);
      }

      var values = otherSet.values();
      for (var i =0;i<values.length;i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    },
    // 交集 元素存在于A中，且存在于B中
    this.intersection = function(otherSet){
      var intersectionSet = new Set();

      var values = this.values();
      for(var i = 0;i<values.length;i++){
        if(otherSet.has(values[i])){
          intersectionSet.add(values[i]);
        }
      }
      return intersectionSet;
    },
    // 差集 元素存在于A中，且元素不存在B中
    this.difference = function(otherSet){
      var differenceSet = new Set();

      var values = this.values();
      for(var i = 0;i<values.length;i++){
        if(!otherSet.has(values[i])){
          differenceSet.add(values[i]);
        }
      }
      return differenceSet;
    },
    // 子集 A中的元素，也需要存在于B中
    this.subset = function(otherSet){
      if(this.size() > otherSet.size()){
        return false;
      }else{
        var values = this.values();
        for(var i = 0;i < values.length;i++){
          if(!otherSet.has(values[i])){
            return false;
          }
        }
        return true;
      }
    }
  };
})(window);
