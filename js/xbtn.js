// xbtn.js 
// xbtn的实现

function memuInit(btnId,memu){
	var status = 0; 
	var $memu = $("#"+memu) || $(memu); 

	// $memu.css("opacity","0").css("display","none");
	 
	function click(){
		if (status == 0){
			// status = 1;
			// $memu.css('display','block').animate({ opacity: 1 },800);
			// $(".memu-item").addClass("memu-item-active");
		} else if (status == 1){
			// status = 0; 
			// // $memu.css('display','none');
			// $memu.animate({
			// 	opacity: 0
			// },800,function(){
			// 	$memu.css('display','none');
			// });
		}
	}

	this.click = click;
}
