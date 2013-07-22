$(document).ready(function(){


	
		$(".basecamp").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".alt-basecamp").show();
			$(".leftarrow").show();
	});	

		$(".basecamp").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".alt-basecamp").hide();
			$(".leftarrow").hide();
			$(".headliner").show();
	});	

		$(".highrise").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".alt-highrise").show();
			$(".leftarrow").show();
	});	
	
		$(".highrise").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".alt-highrise").hide();
			$(".leftarrow").hide();
			$(".headliner").show();
	});	

		$(".campfire").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".alt-campfire").show();
			$(".rightarrow").show();
	});	
	
		$(".campfire").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".alt-campfire").hide();
			$(".rightarrow").hide();
			$(".headliner").show();
	});	

});