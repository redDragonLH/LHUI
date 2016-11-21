$(function(){
//	if(document.documentElement.clientWidth>800){
//		document.documentElement.style.fontSize = "60px";
//	}else{
//		document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + "px";
//	
//	}
	//共用页脚部分
	var footer='<div class="footer width over">'+
			'<div class="foot-left left">'+
				'<p class="HQ">华铁传媒集团有限公司</p>'+
				'<p class="detail detaila">北京市朝阳区建国门外大街甲6号SK大厦16层</p>'+
				'<p class="detail detailb">16th Floor. SK Tower. NO.6A jianguomenwai Avenue. Chaoyang District. Beijing 100022</p>'+
				'<ul class="footul over">'+
					'<li><a href="javascript:;">版权声明</a></li>'+
					'<li><a href="javascript:;">联系我们</a></li>'+
					'<li><a href="javascript:;">关于我们</a></li>'+
					'<li><a href="javascript:;">合作伙伴</a></li>'+
					'<li><a href="javascript:;">加入我们</a></li>'+
					'<li><a class="bookmarks" href="javascript:;">加为书签</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="foot-right right over">'+
				'<img class="fl wechat" src="../images/wechat.png">'+
				'<div class="fl">'+
					'<p class="webo weboa">华铁传媒官方微信订阅号</p>'+
					'<p class="webo webob">服务时间&nbsp;&nbsp;:&nbsp;&nbsp;09:00-18:00(工作日)</p>'+
					'<p class="tel">400-650-8866</p>'+
				'</div>'+
			'</div>'+
			'<p class="autoC">2012-2013 HTC-Media 华铁传媒 版权所有 京ICP05055678号 京公网安备110105013329号</p>'+
		'</div>';
	$('body').append(footer); 
	//二级菜单hover事件
	$(".menubox li").hover(function(){
    	$(this).find(".amenu").show();
    	
    },function(){
    	$(this).find(".amenu").hide();
    });
    //返回顶部
    window.onscroll = function () {
	    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
	        document.getElementById("back").style.display = "block";
	    }
	    else {
	        document.getElementById("back").style.display = "none";
	    }
	}
    $("#back").click(function(){  
        $('body,html').animate({scrollTop:0},300);  
        return false;  
    });
    //加入收藏
    $(".bookmarks").on("click",function(){
    	var url=window.location.href;
    	var title="华铁传媒"
    	addBookmark(url,title)
    })
    /*判断ie*/
    var ua = navigator.userAgent;
	if(ua.indexOf("MSIE")>0){ 
		$(".menubox .li .amenu").css({"background-color":"gainsboro","margin-top":"0"});
		$(".menubox .li .linea").css({"padding-bottom":"23px"});
	}
	if(document.documentElement.clientWidth<800){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + "px";
		$(".width").css("width","7rem");
	}
	console.log(document.documentElement.clientWidth);
})
function addBookmark(url, title){
    if(window.sidebar){
        window.sidebar.addPanel(title, url, "");
    }else if(document.all){
        window.external.AddFavorite(url, title);
    }else{
        alert("您的浏览器不能自动添加网址到收藏夹,请使用Ctrl+D进行手动添加");
    }
}
