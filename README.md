#自制自用UIs
##参考雅虎的 purecss做的
第一步是看purecss......
purecss有很多不认识的属性与写的方式，很惆怅  


base.css是基础的样式重置，使样式在所有主流浏览器上都呈现一样的样式

  ####form.css  
  form.css是表单样式UI，有一部分响应式  
  *、重叠样式class 名 pure-form-stacked  
  *、对齐的表格样式，from :pure-form-aligned.input的父元素：pure-control-group  
  *、响应式多列 from : pure-form-stacked.input父元素：pure-u-1 pure-u-md-1-3，input:pure-u-23-24,所需class名  
  *、分组输入，把输入框放到不同的 fieldset   标签里面去  
  *、输入框自定义大小，class: pure-input-1;与栅格类似  
  *、圆角 ：class:pure-input-rounded;  
