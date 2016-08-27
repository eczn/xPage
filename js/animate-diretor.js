// animate-diretor.js
// 很显然 这是个导演程序

function Movie() {
	var lamb = $("#animate-lamb"),
		left_bottom = $("#animate-left-bottom"),
		right_bottom = $("#animate-right-bottom"),
		middle_text = $("#animate-middle"),
		main_text = $("#animate-main-text"),
		pacman = $("#animate-pacman"),
		black = $("#black"),
		poster_container = $(".poster-container"),
		margin_auto_str = 0;

	var calcAuto = (function(){
		var auto = $(window).innerWidth(); 
		auto = (auto-320)/2;
		margin_auto_str = "0 " + auto + "px " + "0 " + auto + "px"; 
	})(); 

	function ka(){
		black.addClass("on-dis"); 
		poster_container.addClass("juzhong");
		$(".animate-screen").addClass("poster-un-blur");
		$(".poster-intro").addClass("poster-blur");

		$(".poster-container").css("margin",margin_auto_str);
		lamb.addClass("animate-lamb");
		
		middle_text.addClass("animate-middle");

		setTimeout(function(){
			right_bottom.addClass("animate-right-bottom"); 
			pacman.addClass("animate-pacman");
		},500);


		setTimeout(function(){
			left_bottom.addClass("animate-left-bottom");
			
		},1000);

		setTimeout(function(){
			main_text.addClass("animate-main-text");
		},2500);

		setTimeout(function(){
			lamb.addClass("animate-shink");
			left_bottom.addClass("animate-shink");
			right_bottom.addClass("animate-shink");
			// middle_text.addClass("animate-shink");
			// main_text.addClass("animate-shink");
			// pacman.addClass("animate-shink");
		},5000); 

	}

	function car(){
		
	}

	this.ka = ka; 
	this.car = car; 
	this.calcAuto = calcAuto; 
}
