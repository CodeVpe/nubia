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
		
		// download鼠标悬浮放大
		$(".downlink").hover(function(){
			$(this).children().stop().animate({width:"330",height:"200", left: "-10px", top: "-10px" },1000)
		},function(){
			$(this).children().stop().animate({width:"310",height:"180", left: "0px", top: "0px" },1000)
		})
		
		
	})
})
