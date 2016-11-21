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
	for(var i = 0;i<5;i++){
		var html = '<li class="marli"><a style="color: #333;" href="http://www.baidu.com">'+
				'<div class="news_top fl over">'+
					'<img class="leftimg fl" src="../images/wechat.png" alt="" />'+
					'<div class="centercont">'+
						'<h4 class="tit_h">高铁巨大的场聚效应，成为品牌营销的理想入口</h4>'+
						'<p class="omit">华铁传媒独家垄断上海铁路局所辖全部高铁动车组媒体代理运营权，囊括包括京沪、沪宁高铁、沪杭高铁、宁杭甬高铁、沿海(沪深)客运专线、沪广高铁、沪汉蓉客运专线、沪昆高铁、徐兰高铁、合福高铁以及华东的宁启、宁安、金丽温等客运专线资源，在纵横交错的高铁主干线上形成最强经济实力的黄金网络布局。不仅如此，华铁传媒独家代理成都铁路局沪汉蓉全线资源，及以成都、重庆为中心，辐射至上海、北京、广州、南京、杭州、宁波等华东沿海城市的全线直达高铁动车组线路资源，完成了高铁媒体线路资源版图中西南地区的战略部署，全面布局国家长江经济带发展规划区域，并与国家长江经济带战略形成同步。</p>'+
					'</div>'+
				'</div>'+
				'<div class="news_bottom fr">'+
					'<p class="p_font">发布时间：</p>'+
					'<p class="p_font">2016-07-24</p>'+
					'<p class="p_font">10:00:00</p>'+
					'<div class="over div_margin"><img class="fl col_img" src="../images/mark.gif" alt="" /><p class="fl col_p">焦点新闻</p></div>'+
				'</div>'+
			'</a></li>';
    	$(".ulnews").append(html);
	}
	
/*	
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
				var html = '<li class="marli">'+
						'<div class="news_top fl over">'+
							'<img class="leftimg fl" src="../images/wechat.png" alt="" />'+
							'<div class="centercont">'+
								'<h4 class="tit_h">高铁巨大的场聚效应，成为品牌营销的理想入口</h4>'+
								'<p class="omit">华铁传媒独家垄断上海铁路局所辖全部高铁动车组媒体代理运营权，囊括包括京沪、沪宁高铁、沪杭高铁、宁杭甬高铁、沿海(沪深)客运专线、沪广高铁、沪汉蓉客运专线、沪昆高铁、徐兰高铁、合福高铁以及华东的宁启、宁安、金丽温等客运专线资源，在纵横交错的高铁主干线上形成最强经济实力的黄金网络布局。不仅如此，华铁传媒独家代理成都铁路局沪汉蓉全线资源，及以成都、重庆为中心，辐射至上海、北京、广州、南京、杭州、宁波等华东沿海城市的全线直达高铁动车组线路资源，完成了高铁媒体线路资源版图中西南地区的战略部署，全面布局国家长江经济带发展规划区域，并与国家长江经济带战略形成同步。</p>'+
							'</div>'+
						'</div>'+
						'<div class="news_bottom fr">'+
							'<p class="p_font">发布时间：</p>'+
							'<p class="p_font">2016-07-24</p>'+
							'<p class="p_font">10:00:00</p>'+
							'<div class="over div_margin"><img class="fl col_img" src="../images/mark.gif" alt="" /><p class="fl col_p">焦点新闻</p></div>'+
						'</div>'+
					'</li>';
		    		$(".ulnews").append(html);
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