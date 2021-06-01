var el = document.getElementById('skills'); // get canvas

var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 400,
    lineWidth: el.getAttribute('data-line') || 25,
    rotate: el.getAttribute('data-rotate') || 0,
	skill: el.getAttribute('data-skill')
}

var canvas = document.getElementsByClassName('skill').getElementsByClassName('circle-skill');
var span = document.createElement('span');
span.textContent = options.skill;
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = canvas.height = options.size;

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 24a0);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
};

drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#555555', options.lineWidth, options.percent / 100);

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