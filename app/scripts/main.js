'use strict';

$(function() {
  
	$('.do-toggle-section').on('click', function() {
		var container = $('.l-container');
		container.toggleClass('show');

		if(container.hasClass('show')) {
			$('.toggle-on-button-click').removeClass('hidden');
			$(this).text('Show less');
		} else {
			$('.toggle-on-button-click').addClass('hidden');
			$(this).text('Show more');
		}
	});
});
