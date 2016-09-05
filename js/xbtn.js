function memuInit(btn, target, openClass, closeClass){
	var status = 0; 
	var $btn = $("."+btn);
	var $target = $("."+target);

	function memuClick(){
		if (status == 0){
			status = 1;
			$(".nav").addClass("nav-memu-open"); 
			$btn.addClass("memu-btn-touch");
		} else if (status == 1){
			status = 0;
			$(".nav").removeClass("nav-memu-open"); 
			$btn.removeClass("memu-btn-touch")
		}
	}

	$(".nav-a").click(memuClick); 
	$btn.click(memuClick);
}
