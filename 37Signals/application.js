$(document).ready(function(){

// basecamp rollover

	$(".bc").mouseenter(function(){
		$(".headline").hide();
		$(".headline-bc").show();
		$(".bc .arrow").show();
 	});
	$(".bc").mouseleave(function(){
		$(".headline").show();
		$(".headline-bc").hide();
		$(".bc .arrow").hide();
	});	
// highrise button rollover

	$(".hr").mouseenter(function(){
		$(".headline").hide();
		$(".headline-hr").show();
		$(".hr .arrow").show();
 	});
 	$(".hr").mouseleave(function(){
		$(".headline").show();
		$(".headline-hr").hide();
		$(".hr .arrow").hide();
 	});	

// campfire button rollover

	$(".cf").mouseenter(function(){
		$(".headline").hide();
		$(".headline-cf").show();
		$(".cf .arrow").show();
 	});
 	$(".cf").mouseleave(function(){
		$(".headline").show();
		$(".headline-cf").hide();
		$(".cf .arrow").hide();
 	});		
});
