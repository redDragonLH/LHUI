(function(e){
  Dictionary = function(){
    var items = {};
    this.set = function(key,value){  //向字典中添加新元素
      items[key] = value;
    },
    this.remove = function(key){  //通过使用键值对来从字典中移除键值对应的数据值
      if(this.has(key)){
        delete items[key];
        return true;
      }
      return false;
    },
    this.has = function(key){  //判断值是否存在于字典中，存在返回true
      return key in items;
    },
    this.get = function(key){  //通过键值查找特定的数值并返回
      return this.has(key) ? items[key] : undefined;
    },
    this.clear = function(){ //清空这个字典
      items = {};
    },
    this.size = function(){ //返回元素的数量
      var count = 0;
      for(var prop in items){
        if(items.hasOwnProperty(prop))
          ++count;
      }
      return count;
    },
    this.keys = function(){  //将字典所包含的所有键名以数组形式返回
      var keys= [];
      for(var key in items){
        keys.push(key);
      }
      console.log(keys)
      return keys;
    },
    this.values = function(){ //将字典所包含的所有数值以数组形式返回
      var values = {};
      for(var k in items){
        if(this.has(k)){
          values.push(items[k]);
        }
      }
      return values;
    },
    this.getitems = function(){
      return items;
    }
  };
})(window);
