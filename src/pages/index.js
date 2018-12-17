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
		
		//product悬浮显示购买
		$(".product").hover(function(){
			$(this).children(".buy_bar").show();
		$(this).children(".price").hide();
		},function(){
			$(this).children(".buy_bar").hide();
		$(this).children(".price").show();
		})
		
		
		
		//product_top悬浮上移
		$(".product_top").hover(function(){
			$(this).stop().animate({top:"50px"},300)
		},function(){
			$(this).stop().animate({top:"60px"},300)
		})
		
		//回到顶部
		$("#gotop").click(function(){
			$("html").animate({scrollTop:0},500)
		})
		
		// 获取数据
		$.ajax({
			url:`https://shop.nubia.com/show/page/shop`,
			// dataType:"jsonp",
			success:function(data){
				console.log(data);
			}
			})
		
	})
})
