$(document).ready(function() {

	$('.nav_move').on('click', function(event){
			event.preventDefault();
			var sectionID = $(this).attr("href");
			scrollToID(sectionID, 500);
	});
	
	$(".text-bienvenido").hide();
	$(".text-bienvenido").fadeIn();
});

function scrollToID(id, speed){
		var offSet = 50;
		var targetOffset = $(id).offset().top - offSet;
		$('html,body').animate({scrollTop:targetOffset}, speed);
	}