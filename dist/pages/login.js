require(["../scripts/config.js"],function() {
	require(["common","fontscroll","jquery","swiper"],function (com,font,$,swiper) {
		
		$(".accont").click(function(){
			$(".maillogin").show().prev().hide();
			$(this).addClass("active").next().removeClass("active");
		})
		$(".phone").click(function(){
			$(".phonelogin").show().next().hide();
			$(this).addClass("active").prev().removeClass("active");
		})
	})
})
