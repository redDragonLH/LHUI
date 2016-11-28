$(function(){
	//删除路线最后的span
	//$(".ban_cont .marauto p:last").find(".padd").remove();
	//切换线路
	$(".marauto p a").on("click",function(){
		$(this).addClass("redcol").parent().siblings().find("a").removeClass("redcol");
		var title=$(this).data("title");
		$(".where_rail").text(title);
	})
	/*swiper三项切换*/
	for(var i=0;i<6;i++){
		var img='<div class="swiper-slide" data-number="'+i+'"><a class="amouse" data-title="方太厨具" href="javascript:;"><img class="psos" src="../images/ziyuan.png" alt=""><p class="center" style="font-size: 13px;color: #fff;position: absolute;bottom: 40px;">方太厨具</p><div></div></a></div>';
		$(".swiper-container .swiper-wrapper").append(img);
	}
	//文本居中
	var a=$(".swiper-slide").width();
	var b=$(".center").width();
	var c=a-b;
	var d=c/2+"px";
	$(".center").css({"left":d});
	var swiper = new Swiper('.swiper-container',{
		observer:true,
//		onInit: function(swiper){
//    		$(".swiper-slide-next").css({"margin-left":"4px","margin-right":"4px"});
//		},
    	pagination: '.pagination',
	    paginationClickable: true,
	    slidesPerView: 3,
    	prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop: true,
//		onSlideChangeStart:function(swiper){
//      	$(".swiper-slide-next").css({"margin-left":"4px","margin-right":"4px"});
//		}
//		autoplayDisableOnInteraction : false,
//		autoplay : 3000,
//		speed: 500,
    });
   
//  鼠标滑过三项切换
	$(".amouse").mouseenter(function(){
		$(this).find("div").addClass("backcolor");
		var title='<p class="ptitle">'+$(this).data("title")+'</p>';
		$(this).find("div").append(title);
		$(this).find(".center").hide();
	}).mouseleave(function(){
		$(this).find("div").removeClass("backcolor");
		$(this).find("div").html("");
		$(this).find(".center").show();
	})
	//控制左右切换的出现
	$(".swiper-container").mousemove(function(e){
		var xx=e.pageX;
		var bodywidth=$("body").width();
		var xy=bodywidth/2;
		if(xy-xx>0){
			$(".swiper-button-prev").show();
			$(".swiper-button-next").hide();
		}else{
			$(".swiper-button-next").show();
			$(".swiper-button-prev").hide();
		}
	}).mouseleave(function(){
		$(".swiper-button-prev,.swiper-button-next").hide();
	})
	//限制左右切换速度
//	$(".swiper-button-next,.swiper-button-prev").on("click",function(){
//		$(this).hide();
//		var $that=$(this);
//		setTimeout(function(){
//			$that.show();
//		},500)
//	})
})
