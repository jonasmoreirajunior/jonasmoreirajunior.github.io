$(function () {

	$(".progress").each(function () {

		var value = $(this).attr('data-value');
		// var valueSkill = $(this).attr('data-skill');
		var left = $(this).find('.progress-left .progress-bar');
		var right = $(this).find('.progress-right .progress-bar');
		// var span = $('.skill-text');

		if (value > 0) {
			if (value <= 50) {
				right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
			} else {
				right.css('transform', 'rotate(180deg)')
				left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
			}
		}

	})

	function percentageToDegrees(percentage) {

		return percentage / 100 * 360

	}

});


// $(document).ready(function(){
//     $('.nav li').click(function(){
//         $('li.active').removeClass('active');

//         $(this).addClass('active');
//     });

// 	$('.carousel').carousel({
// 		interval: 5000,
// 	});

// 	$(function() {
// 		$('a.page-scroll').bind('click', function(event) {
// 			var $anchor = $(this);
// 			$('html, body').stop().animate({
// 				scrollTop: $($anchor.attr('href')).offset().top -70
// 			}, 1500);
// 			event.preventDefault();
// 		});
// 	});	
// });