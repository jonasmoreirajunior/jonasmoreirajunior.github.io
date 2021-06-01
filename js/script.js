$(function () {

	var root = document.documentElement;
	root.className += ' js';

	function boxTop(idBox) {
		var boxOffset = $(idBox).offset().top;
		return boxOffset;
	}

	var $target = $('.anime'),
		animationClass = 'anime-init',
		windowHeight = $(window).height(),
		offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function () {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function () {
		setTimeout(function () { animeScroll() }, 100);
	});

	var bounce = new Bounce();

	bounce
		.translate({
			from: { x: -300, y: 0 },
			to: { x: 0, y: 0 },
			duration: 1000,
			stiffness: 4
		})
		.applyTo(document.querySelectorAll(".animation-target"));

	bounce
		.skew({
			from: { x: 0, y: 0 },
			to: { x: 40, y: 60 },
			easing: 'sway',
			duration: 750,
			bounces: 3,
			stiffness: 3
		})
		.scale({
			from: { x: 0, y: 0 },
			to: { x: 1, y: 1 },
			easing: 'bounce',
			duration: 750,
			bounces: 4,
			stiffness: 2
		})
		.applyTo(document.querySelectorAll(".animation-img"));

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

	$('.nav-link').click(function () {
		$('.navbar-collapse').removeClass('show');
	})

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