// require(["../scripts/config.js"],function() {
// 	require(["common","fontscroll","jquery","swiper"],function (com,font,$,Swiper) {
// 		
// 		 var mySwiper = new swiper('.swiper-container',{
// 				//无缝连接
// 				 loop : true,
// 				//自动切换
// 				autoplay:true,
// 				 navigation: {
// 			      nextEl: '.swiper-button-next',
// 			      prevEl: '.swiper-button-prev'
//     		}
// 		})
// 		console.log($)
// 		
// 	})
// })
// 
require(["../scripts/config.js"],function(){
	require(["common","jquery","swiper","fontscroll"],function( com , $ , swiper){
			console.log($);
	})
})