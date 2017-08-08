$(document).ready(function(){
    $('.nav li').click(function(){
        $('li.active').removeClass('active');

        $(this).addClass('active');
    });
	
	$('.carousel').carousel({
		interval: 5000,
	});
	
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -70
			}, 1500);
			event.preventDefault();
		});
	});
	
});