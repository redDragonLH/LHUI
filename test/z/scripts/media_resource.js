$(function(){
	//$(".ban_cont .marauto p:last").find(".padd").remove();

	/*swiper三项切换*/
	var swiper = new Swiper('.swiper-container',{
    	pagination: '.pagination',
	    paginationClickable: true,
	    slidesPerView: 3,
	    loop: true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
//		autoplayDisableOnInteraction : false,
//		autoplay : 3000,
//		speed: 500,
    });
//  鼠标滑过三项切换
	$(".amouse").mouseenter(function(){
		$(this).find("div").addClass("backcolor");
		var title='<p class="ptitle">'+$(this).data("title")+'</p>';
		$(this).find("div").append(title);
	}).mouseleave(function(){
		$(this).find("div").removeClass("backcolor");
		$(this).find("div").html("");
	})
	//切换线路
	$(".marauto p a").on("click",function(){
		$(this).addClass("redcol").parent().siblings().find("a").removeClass("redcol");
		var title=$(this).data("title");
		$(".where_rail").text(title);
	})
	$(".swiper-button-next,.swiper-button-prev").on("click",function(){
		$(this).hide("");
		var $that=$(this)
		setTimeout(function(){
			$that.show();
		},500)
		
	})
    
})
