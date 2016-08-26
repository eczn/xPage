/* 
 * jP is a kind of player plugins based on canvas and web audio API 
 * 
 * usage : 1,add canvas tag named jP in .html 
 *         2,and add code:'jP.init()' after <body> to use this script 
 *         3,if sucess... you can see a simply player display... 
 *
 *         ** jP is bind to the audio and canvas html element (id is "jPA" and "jPC")
 *
 *         ** jPen has some function to draw. it needs some para 
 * 
 */ 

"use strict"; 

function codeWallInit(domCanvasId){
	var domCanvas = window.document.getElementById(domCanvasId);
	var code = [
		'printf("hello");', 
		'printf("你好,朋友")',
		'printf("nice to code you!")'
	]; 

	domCanvas.width =  parseInt(window.innerWidth*2);
	domCanvas.height = parseInt(window.innerHeight*2);

	var width = domCanvas.width*2,
		height = domCanvas.height*2,
		g = domCanvas.getContext('2d');


	function setFillStyle(style){
		g.fillStyle = style;
	}

	function clearCanvas(){
		g.clearRect(0,0,width,height);
		// var i = 0; 
		// var imgTemp = g.getImageData(0,0,width,height); 

		// for(i=0; i<imgTemp.data.length ; i+=4 ){
		// 	imgTemp.data[i+3] = 0;
		// }
		// g.putImageData(imgTemp,0,0);
	}

	g.font = "60px Mono ";
	g.rotate(90 * Math.PI / 180);
	function draw(i){
		// alert("click");
		// g.font = "60px Mono ";
		// //设置字体填充颜色
		// g.fillStyle = "blue";
		// //从坐标点(50,50)开始绘制文字
		// g.fillText("CodePlayer+中文测试", 50, 50);

		
		// ctx.translate(100, 100);
		
		var str_length = code[0].length; 

		g.fillText(code[0],i-str_length*60,0);

		window.requestAnimationFrame(function(){
			i+= 10;
			draw(i); 
		});
	}

	this.draw = draw; 
	this.setFillStyle = setFillStyle;

}
