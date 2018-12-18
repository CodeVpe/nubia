require(["../scripts/config.js"],function() {
	require(["common","fontscroll","jquery","swiper"],function (com,font,$,swiper) {
		
		var mySwiper = new swiper('.swiper-container',{
				//无缝连接
				loop : true,
				
				// 如果需要分页器
				pagination: {
				  el: '.swiper-pagination',
				},
				//自动切换
				autoplay:true,
				
				navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
				},
		})
		
		/*购物车数量加减*/
// 		$(".jia").click(function(){
// 			
// 			var num = $(this).prev("span").text();
// 			num++;
// 		})
// 		
		
		// 购物车删除
		$(".icon-guanbi3").click(function(){
			$(this).parent().parent().remove();
		})
		
		/*进度条*/
		$(".hot_product ul li").hover(function(){
			$(this).find(".progressbar").stop().animate({width:"100%"},400)},
			function(){
			$(this).find(".progressbar").stop().animate({width:"15%"},400)
		})
		
		//回到顶部
		$("#gotop").click(function(){
			$("html").animate({scrollTop:0},500)
		})
	})
})
