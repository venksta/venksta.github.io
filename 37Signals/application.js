$(document).ready(function(){


	
		$(".basecamp").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".leftarrow").show();
			$(".alt-basecamp").show();
	});	

		$(".basecamp").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".leftarrow").hide();
			$(".alt-basecamp").hide();
			$(".headliner").show();
	});	

		$(".highrise").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".leftarrow").show();
			$(".alt-highrise").show();
	});	
	
		$(".highrise").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".leftarrow").hide();
			$(".alt-highrise").hide();
			$(".headliner").show();
	});	

		$(".campfire").on("mouseenter", function(){
			event.preventDefault();
			$(".headliner").hide();
			$(this).find(".rightarrow").show();
			$(".alt-campfire").show();
	});	
	
		$(".campfire").on("mouseleave", function(){
			event.preventDefault();
			$(this).find(".rightarrow").hide();
			$(".alt-campfire").hide();
			$(".headliner").show();
	});	

});
