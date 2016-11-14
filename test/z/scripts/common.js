$(function(){
//	if(document.documentElement.clientWidth>800){
//		document.documentElement.style.fontSize = "60px";
//	}else{
//		document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + "px";
//	
//	}
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
