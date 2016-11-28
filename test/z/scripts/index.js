$(function(){
//构建轮播图	
	$(".turn-warp").slide({titCell:".ph_p_warp",mainCell:".tw",autoPage:true,effect:"leftLoop",delayTime:1000,interTime:3000,autoPlay:true,
	startFun:function(i,c){
		if(i==0){
			$(".show").show("1000");
		}else{
			$(".show").hide("1000");
		}
	}})
//控制按钮居中	
	var a=$("body").width();
	var b=$(".ph_p_warp").width();
	var c=a-b;
	var d=c/2+"px";
	var ba=$("#next").width();
	var ca=a-ba-10;
	var dd=ca/2+"px";
	$(".ph_p_warp").css({"left":d});
	$("#next").css({"left":dd});
//点击next----出现
	$("#next").on("click",function(){
		$("body").animate({scrollTop:$(".funbox").offset().top},300);
		$(".fun6,.fun7,.fun8,.fun9").slideDown(1200);
	})
//	$(".nba2").on("click",function(){
//		$(".remove").remove();
//		var a = 771, b = 455, r = 125, times = 0.1;
//  	var Method=setInterval(function flutter() {
//      times =times + 0.1;
//      //console.log(times)
//      var hudu = (2*Math.PI / 360) * 6 * times;
//      var X = a + Math.sin(hudu) * r;
//      var Y = b - Math.cos(hudu) * r            
//      $(".funwidth").append('<div class="remove" style="position:absolute; left:'+X+'px; top:'+Y+'px; width: 2px; height: 2px; background: #fff;z-index: 999999999999;"></div>');
//	        if(times == 66.20000000000051){
//	        	clearInterval(Method);
//	        	$(".remove").remove();
//	        }
//  	}, 2);
//	})
//	a:左右 b:上下
//	$(".nba1").on("click",function(){
//		$(".remove").remove();
//	    var a = 145, b = 182, r = 125, times = 0.1;
//	    var Method=setInterval(function flutter() {
//	        times =times + 0.1;
//	        console.log(times)
//	        var hudu = (2*Math.PI / 360) * 6 * times;
//	        
//	        var X = a + Math.sin(hudu) * r;
//	        //console.log(X)
//	        var Y = b - Math.cos(hudu) * r            
//	        $(".funwidth").append('<div class="remove" style="position:absolute; left:'+X+'px; top:'+Y+'px; width: 2px; height: 2px; background: #fff;z-index: 999999999999;"></div>');
//	        if(times == 66.20000000000051){
//	        	clearInterval(Method)
//	        }
//	    }, 2);
//	})    
	$(".before").on("click",function(){
		$(".before").show().parent().find(".after").hide();
		$(this).hide().parent().find(".after").show();
		$(".nba").show();
		$(".nba").eq($(this).data("index")).hide();

	})
	
	$(".before").on("click",function(){
		//$(".before").off("click");
		var times = 0.1;
		var index=$(this).data("index");
		$(".funwidthbox").html("");
		clearInterval(Method);
		if(index==0){
			var a = 145, b = 182;
		}else if(index==1){
			var a = 771, b = 455;
		}else if(index==2){
			var a = 274, b = 460;
		}else if(index==3){
			var a = 828, b = 179;
		}
	    var r = 125;
	    
	    var Method=setInterval(function flutter() {
	        times =times + 0.1;
	        //console.log(times)
	        var hudu = (2*Math.PI / 360) * 6 * times;
	  
	        var X = a + Math.sin(hudu) * r;
	        //console.log(X)
	        var Y = b - Math.cos(hudu) * r            
	        $(".funwidthbox").append('<div class="remove" style="position:absolute; left:'+X+'px; top:'+Y+'px; width: 2px; height: 2px; background: #fff;z-index: 999999999999;"></div>');
	        if(times == 60.00000000000058){
	        	clearInterval(Method);
	        	//$(".before").on("click");
	        }
	    }, 2);
	})
})
