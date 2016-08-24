$(function(){
	var content = $("#animate_content");
	var shadow = $("#animate_shadow");
	var blur = $("#animate_blur");

	$("#animate_focus").click(function(){
		if(shadow.attr("class")=="shadow"){
			$(this).removeClass("focus");
			shadow.addClass("shadow_to_go");
			$("#animate_lens").animate({"background-size": "300px"},200)
			.animate({"background-size": "314px"}, 200, function(){
				setTimeout(function(){
					blur.addClass("blur_to_go");
				},1000); 
				setTimeout(function(){
					content.addClass("content_to_go");
				},2500); 
				setTimeout(function(){
					$("#animate_focus").addClass("focus");
				},5200); 
				
			});
		}else{
			$("#animate_lens").animate({"background-size": "300px"},200)
			.animate({"background-size": "314px"}, 200,function(){
				shadow.removeClass("shadow_to_go");
				blur.removeClass("blur_to_go");
				content.removeClass("content_to_go");
			});
			
		}
		
	})

})