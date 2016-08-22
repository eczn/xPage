// 4Touch.js
// require some jQuery function: $(document).height(), $(window).innerHeight()
function moubileTouch(ifBind){
	var height = 0,
		start = 0,
		end = 0,
		maxHeight = $(document).height()-$(window).innerHeight();

	if (ifBind){
		document.addEventListener("touchstart", touchProcess, false);
		document.addEventListener("touchend", touchProcess, false);
		document.addEventListener("touchmove", touchProcess, false);
	}

	function touchProcess(ev){
		if (ev.type == "touchstart"){
			// console.log(ev.targetTouches[0].pageY);
			// console.log(ev.targetTouches);
			start = ev.targetTouches[0].pageY;
		} else if (ev.type == "touchend"){
			// console.log(ev.changedTouches);
			// console.log(ev.changedTouches[0].pageY);
			end = ev.changedTouches[0].pageY; 

			height += start - end;
			// console.log("差:" + start - end);
			
			if (height >= $(document).height()-$(window).innerHeight()){

				height = $(document).height()-$(window).innerHeight();
			} else if (height <= 0){
				height = 0; 
			}
			console.log("高:" + height);
		} 
	}

	this.height = height;
}
