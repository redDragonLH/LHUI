$(function(){
//切换新闻内容
	$(".three_ad li .back-img").on("click",function(){
		$(this).addClass("hide").parent().siblings().find(".back-img").removeClass("hide");
		var num=$(this).parent().data("num");
		if(num==1){
			$(".ad_content").show();
			$(".media_life").hide();
			$(".media_class").hide();
			$(".ctrl_bg").addClass("bg");
		}else if(num==2){
			$(".media_life").show();
			$(".ad_content").hide();
			$(".media_class").hide();
			$(".ctrl_bg").removeClass("bg");
		}else if(num==3){
			$(".media_class").show();
			$(".media_life").hide();
			$(".ad_content").hide();
			$("ctrl_bg").removeClass("bg");
		}
	})
/*	
	function goAjax(paramObj,urlStr,callback,type){
		
		if(type == undefined){
			type = "json";
		}
		$.ajax({
			url: urlStr,
	        type: "POST",
	        jsonp: "callback",
	        dataType: type,
	        async: false,
	        data: paramObj,
		})
		.done(function(res) {
			callback(res)
		})
		.fail(function() {
			alery("数据出现问题!");
		})
	}
//接口地址
	var msg_add = iwetuan_add+"/api/club/SpecialsList?club_id="+club_id+"&user_id="+user_id+"&type=1";
	
	goAjax = function(paramObj,urlStr){
		if(!paramObj) {
			paramObj = {};
		}
		return $.ajax({
			url: urlStr,
			type: 'POST',
			jsonp: "callback",
			dataType: "json",
			async: false,
			cache: true,
			data: paramObj,
		});
	};
	
	var pageNum = 1;
	
	var pageSize = 5;
	
	var totle = 0;//总数
	
	var numTotle = 0;//总页数
	
	function getArchiveList(add,pageNum,pageSize,status,callback){
	
		goAjax({
			"sn":pageNum,
			"nu":pageSize,
		},add).done(function(res){
			if(typeof callback == 'function'){
				callback(res);
			}else{
				archiveCallback(res);
			}
		})
	}
	
	function archiveCallback(res){
		if(res.error_code == 0){
			$(".search-bottom").show();
			totle = res.count;
			numTotle  = Math.ceil(totle/pageSize)
			$(".search-totle").html(pageNum+'/'+ numTotle)
			$(".ad_content").html('');
			for(var i = 0;i<res.data.length;i++){
	
				var html = '<tr class="'+k+'" data-did="'+m.id+'">'+
	              		'<td class="id">'+m.id+'</td>'+
	              		'<td class="title">'+'<a class="change-btn aac" aac="'+m.url+'" href="'+a1a+'" style="'+laker+'text-decoration:underline;color:#333333;" target="_blank">'+m.title+'</a>'+'</td>'+
	              		'<td class="show_create_time">'+m.show_create_time+'</td>'+
	              		'<td class="title">'+
	              			'<a class="change-btn aad" aad="'+m.edit_url+'" href="'+a2a+'" style="'+color+'text-decoration:underline;" target="_blank">修改</a>'+
	              		'</td>'+
						'<td class="action">'+
	              			'<a class="delok" href="javascript:;" data-id='+m.id+' data-status="'+msfd+'">'+n+'</a>'+
	              		'</td>'+
	       
	              		'</tr>';
		    		$("#topicListTable tbody").append(html);
			}
			
		}else if(res.error_code == 10002){
			$(".search-bottom").hide();
			$(".ad_content").html('');
			var html = '<tr>'+'<td colspan="5" style="text-align:center;font-size:20px;">没有数据</td>'+'</tr>';
			$("#topicListTable tbody").append(html);
		}
	}
	
	$(document).ready(function() {
		getArchiveList(msg_add,1,pageSize,99)
		//上一页按钮
		$(".prev-btn").click(function(event) {
			pageNum = --pageNum <1 ? 1 : pageNum;
			getArchiveList(msg_add,pageNum,pageSize,99)
		});
		//下一页按钮
		$(".next-btn").click(function(event) {
			pageNum = ++pageNum>numTotle ? numTotle : pageNum;
			getArchiveList(msg_add,pageNum,pageSize,99)
		});
		//搜索按钮
		$(".search-btn").click(function(event) {
			pageNum = 1;
			getArchiveList(msg_add,pageNum,pageSize,99)
		});
		//跳转按钮
		$(".jump-btn").click(function(event) {
			pageNum = $("#jumpNum").val();
			if(pageNum == "" || pageNum <1){
				pageNum = 1;
			}
			getArchiveList(msg_add,pageNum,pageSize,99)
		});
	});
	
*/
})
