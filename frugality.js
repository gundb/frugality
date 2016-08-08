$(document).ready(function(){
	if($(window).width() > 1024){
		$(window).on('scroll', function(){
			parallaxScroll();
		});
		function parallaxScroll(){
			var $why =$('.why'),
				$how = $('.how'),
				$who = $('.who'),
				remainWhy = ($(window).scrollTop() - $why.scrollTop()) / $why.height(),
				remainHow = ($(window).scrollTop() - $how.scrollTop()) / $how.height(),
				remainWho =	($(window).scrollTop() - $who.scrollTop()) / $who.height();
			var object1Y = (70 - (remainWhy/3)*100) + '%';
			$('.object1').css({
				'top': object1Y
			});
			var object2Y = (40 - (remainWhy/5)*100) + '%';
			$('.object2').css({
				'top': object2Y
			});
			var object3Y = (35 - (remainWhy/8)*100) + '%';
			$('.object3').css({
				'top': object3Y
			});
			var object4Y = (28 - (remainWhy/5)*100) + '%';
			$('.object4').css({
				'top': object4Y
			});
			var batch2Y = (115 - (remainHow/4)*100) + '%';
			$('.batch2').css({
				'top': batch2Y
			});
			var batch3Y = (128 - (remainHow/2)*100) + '%';
			$('.batch3').css({
				'top' : batch3Y
			});
			var batch4Y = (120 - (remainWho/5)*100) + '%';
			$('.batch4').css({
				'top' : batch4Y 
			});
			var batch5Y = (100 - (remainWho/8)*100) + '%';
			$('.batch5').css({
				'top' : batch5Y
			});
			var batch6Y = (160 - (remainWho/2)*100) + '%';
			$('.batch6').css({
				'top': batch6Y
			});
		}
	}
});