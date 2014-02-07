$(function() {
	var 
		url = $.url().param('url'),
		bgColor = '#'+$.url().param('bg');


	$('.iframe').attr('src', url);

	$('body').css('background-color', bgColor);

});