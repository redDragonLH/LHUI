$(function(){
	/*图片切换*/	
	$(".turn-warp").slide({titCell:".ph_p_warp",mainCell:".tw",autoPage:true,effect:"leftLoop",
	startFun:function(i,c){
		if(i==0){
			$(".word").show("1000");
		}else{
			$(".word").hide("1000");
		}
	}})
	$(".ph_p_warp").width($(".ph_p_warp li").length*40).css("margin-left",-$(".ph_p_warp li").length*10);
	
	var index=1;
	var initleft=$(".tw").css("left");
	$("#nextDetails").on("click",function(){
		index=index+1;
		if(index==$(".tw li").length-1){
			index=1;
		}
		$(".indexhide").hide();
		$("[data-num="+index+"]").show();
	})
})
