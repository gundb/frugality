$(document).ready(function(){
	$(window).on('scroll', function(){
		parallaxScroll();
	});
	function parallaxScroll(){
		var scrolledY =$(window).scrollTop();
		var $why =$('.why'),
			offsetWhy = $why.offset().top,
			$how = $('.how'),
			offsetHow = $how.offset().top,
			$who = $('.who'),
			offsetWho = $who.offset().top,
			$header = $('.header'),
			offsetHead = $header.offset().top,
			trackWhy = offsetWhy - $(window).scrollTop(),
			trackHow = offsetHow - $(window).scrollTop(),
			trackWho = offsetWho - $(window).scrollTop(),
			trackHead = offsetHead - $(window).scrollTop(),
			remainWhy = ($(window).scrollTop() - $why.scrollTop()) / $why.height();

		console.log('remain', remainWhy, 'ratio', remainWhy/2, 'original', 30);	
		
		var y = (70 - (remainWhy/3)*100) + '%';
		console.log("we should be at", y);
		//$('.header img').css('top', '30%' + (remain/2));
		$('.object1').css({
			'top': y
		});
		var x = (40 - (remainWhy/5)*100) + '%';
		$('.object2').css({
			'top': x
		});
		// if(trackWhy < 0){
		// 	console.log('tracking why', trackWhy);
		// 	//$why.css('background-position', 'center -' + ((scrolledY * 0.2)) + 'px');
		// 	$('.object1').css('top','-' + ((scrolledY * 0.5)) + 'px'); 
		// }
	}
});