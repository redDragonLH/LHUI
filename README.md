# LHUI ![bulid](https://img.shields.io/travis/redDragonLH/LHUI/master.svg)

### Nomalize.css样式重置
  pure是以Nomalize为基础进行的样式重置，所以也把Nomalize放在这里，并且找的一版有中文注释的代码（版权归 AmnEsia 所有）地址为：  
  http://www.w3cfuns.com/notes/16799/70306b117ceaf74825b5099ac6687a50.html  

**需要写的方面**  
| form | 未写 |
| ----- | ----: |
| button| 完成（继续补充） |
| table| 完成（继续补充） |
| layout| 完成（继续补充） |
| menu| （开始启动） |

base.css是基础的样式重置，使样式在所有主流浏览器上都呈现一样的样式

  #### form.css  
  form.css是表单样式UI，有一部分响应式  
  *、重叠样式class 名 pure-form-stacked  
  *、对齐的表格样式，from :pure-form-aligned.input的父元素：pure-control-group  
  *、响应式多列 from : pure-form-stacked.input父元素：pure-u-1 pure-u-md-1-3，input:pure-u-23-24,所需class名  
  *、分组输入，把输入框放到不同的 fieldset   标签里面去  
  *、输入框自定义大小，class: pure-input-1;与栅格类似  
  *、圆角 ：class:pure-input-rounded;  
<!--其他框架文件夹-->
### 深感自己不足，又建立了其他 '其他框架'文件夹来搜集观摩好的代码
1、有bootstrap-responsive 文件，关于bootstrap响应式的文件  
2、在网上搜集到的button按钮的样式库文件 ：buttons.css (http://www.bootcss.com/p/buttons/)  
3、语义化  Semantic UI (http://www.semantic-ui.com/)

###### preu就是写出一个大概的框架，写出一个样式，然后更多的东西都去让开发者自定义，我觉的这才是真正高度定制的ui，我也将追寻这个核心思想，写出好的框架
***
#### 自己的   
****  
栅格准备用新出的flexbox来写，虽然新老版本兼容有问题，而且浏览器兼容也有问题
有三个版本，旧版、新版、混合版。
各种情况都得兼容    


  **2016/8/19记录**   
      **栅格系统**  
    `兼容格式已经大概写完，再完整一下就可以就行响应式栅格的书写`  
      `UC坑： UC使用的是老版的webkit内核，必须给行内子元素用 display:block; 或 display:inline-block;。而且box-pack属性会让元素向主轴方向浮动，造成页面破相`  
      `栅格写了 12格，10格，6格，5格，4格，3格，2格，1格`  
      `响应式写了 1024px 、960px、768px、三种，小于这些就上下排列，宽等于父元素的宽。显示、隐藏。还有小于设定的宽度父元素是否等于屏幕宽度。`    
      ~~响应式的子元素排列的其他方向待写，单个子元素次序orde~~  

      响应式子元素从下到上排列已写
      响应式单个子元素次序已写

  **2016/9/2记录**  
  **tables表格**    
  准备开发状态，正在收集信息。。。  
    1、 查看table属性，要熟记。  
    2、 再次看pure的tables，（感觉已经不能再简洁了，好喜欢，但是不想抄）  
    3、 。。。  

  **button按钮**  
    残次品状态，正在继续收集信息。。。

  **2016/9/7记录**  
  **table表格**  
    对于table的初始化应该是无法做到太多，前人已经写的太多了  ，只有对样式进行与我的适配  

  **2016/12/25记录**
  补充button样式
    思想改变：深奥样式已经没必要去追寻，做ui库的最终目的是集合一个好用的库，就是对样式进行集合  
  **2016/12/27记录**
    Ttable样式与代码很不满意，今天开始进行重构  
 **2016/12/28记录**  
    继续table的重构，暂时卡住了，  
**2016/12/29记录**  
  table重构框架已经完成，复杂样式不准备再写，因为不知道什么样的样式比较普遍  
**2016/12/31记录**  
menu开始启动，暂时没有太多头绪，准备多观摩几个好看的样式再说  
**2017/1/2记录**  
menu样式的准备工作，把基础样式先写好  
**17/1/3记录**  
menu的初始化
