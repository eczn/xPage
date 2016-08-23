// 4Touch.js
// require some jQuery function: $(document).height(), $(window).innerHeight()
// usage: 
// var myTouchCore = new moubileTouch(true);
// myTouchCore.height; 

function moubileTouch(ifBind){
	var height = 0,
		start = 0,
		end = 0,
		maxHeight = $(document).height()-$(window).innerHeight();

	if (ifBind){
		// document.addEventListener("touchstart", touchProcess, false);
		// document.addEventListener("touchend", touchProcess, false);
		// document.addEventListener("touchmove", touchProcess, false);
	}

	function touchProcess(ev){
		console.log(ev.target.tagName);
		console.log(document.getElementsByTagName('body'));
		if (ev.target.tagName != 'BODY'){
			console.log('body');
			return; 
		}

		if (ev.type == "touchstart"){
			// console.log(); 
			// console.log(ev.targetTouches[0].pageY);
			// console.log(ev.targetTouches);
			start = ev.targetTouches[0].pageY;
		} else if (ev.type == "touchend"){
			// console.log(ev.changedTouches);
			// console.log(ev.changedTouches[0].pageY);
			end = ev.changedTouches[0].pageY; 

			height += start - end;
			// console.log("差:" + start - end);
			
			if (height >= maxHeight){
				height = maxHeight;
			} else if (height <= 0){
				height = 0; 
			}
			console.warn("高:" + height);
		} 
	}

	this.height = height;
}


// {
// 	封面: {
// 		//somthing
// 	},
// 	展示区: [
// 		海报, // div.展示区#poster
// 		传单, // div.展示区#chuandanzi
// 		单反  // div.展示区#camara
// 	],
// 	报名表: {
// 		//somthing
// 	}, 
// }
