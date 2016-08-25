$(function(){
	var content = $("#animate_content");
	var shadow = $("#animate_shadow");
	var blur = $("#animate_blur");
	var flicker = $("#animate_flicker");

	$("#animate_focus").click(function(){
		if(shadow.attr("class")=="shadow"){
			$(this).removeClass("focus");
			shadow.addClass("shadow_to_go");
			setTimeout(function(){
				flicker.addClass("flicker");
			},200); 
			$("#animate_lens").animate({"background-size": "90%"},200)
			.animate({"background-size": "98%"}, 200, function(){
				setTimeout(function(){
					blur.addClass("blur_to_go");
				},800); 
				setTimeout(function(){
					content.addClass("content_to_go");
				},1100); 
				setTimeout(function(){
					$("#animate_focus").addClass("focus");
				},2600); 
				
			});
		}else{
			$("#animate_lens").animate({"background-size": "90%"},200)
			.animate({"background-size": "98%"}, 200,function(){
				shadow.removeClass("shadow_to_go");
				blur.removeClass("blur_to_go");
				content.removeClass("content_to_go");
				flicker.removeClass("flicker");
			});
			
		}
		
	})

})