// animate-diretor.js
// 很显然 这是个导演程序

function Movie() {
	var lamb = $("#animate-lamb"),
		left_bottom = $("#animate-left-bottom"),
		right_bottom = $("#animate-right-bottom"),
		middle_text = $("#animate-middle"),
		main_text = $("#animate-main-text"),
		pacman = $("#animate-pacman"); 

	function ka(){
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


	}
	this.ka = ka; 
}