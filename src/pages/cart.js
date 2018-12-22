require(["../scripts/config.js"],function() {
	require(["common","fontscroll","jquery","swiper"],function (com,font,$,swiper) {
		
		/*购物车数量加减*/
	var jia = document.querySelector(".jia");
	var jian = document.querySelector(".jian");
	var num =  document.querySelector(".num");
	jia.onclick = function(){
		num.innerHTML++;
		if(num.innerHTML > 10){
			num.innerHTML = 10
		}
	}
	jian.onclick = function(){
		num.innerHTML--;
		if(num.innerHTML <= 0){
			alert("您确定不购买该产品？");
			jian.parentElement.parentElement.parentElement.remove();
		}
	}
		
		
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
