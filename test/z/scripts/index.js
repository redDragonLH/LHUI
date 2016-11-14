$(function(){
//构建轮播图	
	$(".turn-warp").slide({titCell:".ph_p_warp",mainCell:".tw",autoPage:true,effect:"leftLoop",autoPlay:true,delayTime:1000,interTime:3000})
	$(".ph_p_warp").width($(".ph_p_warp li").length*40).css("margin-left",-$(".ph_p_warp li").length*10)
	
	//jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3});
})
