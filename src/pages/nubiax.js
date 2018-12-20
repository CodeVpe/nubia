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
	
	
// 	$.ajax({
// 		url:"https://shop.nubia.com/show/product/getExt?productId=760&specId=1127",
// 		success:function(data){
// 			console.log(data)
// 		}
// 	})
// 	
	
		//回到顶部
		$("#gotop").click(function(){
			$("html").animate({scrollTop:0},500)
		})
	})
})
