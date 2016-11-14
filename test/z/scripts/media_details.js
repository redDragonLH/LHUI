$(function(){
	/*图片切换*/	
//	$(".turn-warp").slide({titCell:".ph_p_warp",mainCell:".tw",autoPage:true,effect:"leftLoop",autoPlay:true,delayTime:1000,interTime:3000});
	$(".turn-warp").slide({titCell:".ph_p_warp",mainCell:".tw",autoPage:true,effect:"leftLoop"});
	$(".ph_p_warp").width($(".ph_p_warp li").length*40).css("margin-left",-$(".ph_p_warp li").length*10);
	
	var index=1;
	var initleft=$(".tw").css("left");
	$("#nextDetails").on("click",function(){
		index=index+1;
		if(index==$(".tw li").length-1){
			index=1;
		}
//		console.log(index);
		$(".indexhide").hide();
		$("[data-num="+index+"]").show();
	})
})
