$(function () {

	// Animation Scroll
	var root = document.documentElement;
	root.className += 'js';

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

	function menuFixed() {
		var documentTop = $(document).scrollTop(),
			navbar = $('.navbar'),
			fixedClass = 'fixed-menu';
		if (documentTop > 80) {
			$(navbar).addClass(fixedClass);
		} else {
			$(navbar).removeClass(fixedClass);
		}
	}

	$(document).on('scroll', function () {
		menuFixed();
		setTimeout(function () {
			animeScroll();
		}, 100);
	});

	// Bounce Animation
	var bounce = new Bounce();
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
		.applyTo(document.querySelectorAll('.animation-img'));

	// Progerss Circle
	$('.progress').each(function () {
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

	// Menu Class Active
	$('.nav-link').on('click', function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	})

	// Menu Mobile Collapse
	$('.nav-link').on('click', function () {
		$('.navbar-collapse').removeClass('show');
	})
});