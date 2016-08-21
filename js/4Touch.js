// 4Touch.js

function moubileTouch(){
	var hight = 0,
		start = 0,
		end = 0; 

	function handleTouchEvent(ev) {
		if (ev.touches.length == 1) {
			switch (ev.type) {
				case "touchstart":
				console.log("start"); 
				break;
				case "touchend":console.log("start"); 
				
				break;
				case "touchmove": console.log("move"); 
//				event.preventDefault(); //阻止滚动

				break;
			}
		}
	}

}

document.addEventListener("touchstart", moubileTouch, false);
document.addEventListener("touchend", moubileTouch, false);
document.addEventListener("touchmove", moubileTouch, false);

