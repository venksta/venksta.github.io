$(document).ready(function(){
	
		$('.product').on('mouseenter', function(){
			event.preventDefault();
			$('.headliner').hide();
			$(this).find('.leftarrow').show();
			$('.basecamp').show();
	});	

		$('.product').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.leftarrow').hide();
			$('.basecamp').hide();
			$('.headliner').show();
	});	

		$('.product').on('mouseenter', function(){
			event.preventDefault();
			$('.headliner').hide();
			$(this).find('.leftarrow').show();
			$('.highrise').show();
	});	
	
		$('.product').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.leftarrow').hide();
			$('.highrise').hide();
			$('.headliner').show();
	});	

		$('.product').on('mouseenter', function(){
			event.preventDefault();
			$('.headliner').hide();
			$(this).find('.rightarrow').show();
			$('.campfire').show();
	});	
	
		$('.product').on('mouseleave', function(){
			event.preventDefault();
			$(this).find('.rightarrow').hide();
			$('.campfire').hide();
			$('.headliner').show();
	});	

});