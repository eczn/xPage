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


	var width_em = parseInt((window.innerWidth / 60)+1); 
	console.log(width_em); 




	g.font = "60px Mono ";
	// g.rotate(90 * Math.PI / 180);
	// g.translate(100, 100);

	var k = 30; 
	var imgTemp
	for (var j =0;j<code[0].length;j++){
		g.fillText(code[0].slice(j,j+1),0,j+k);
		k+=60;
	}
	

	imgTemp = g.getImageData(0,0,40,code[0].length*60); 
	g.clearRect(0,0,height,width);

	g.putImageData(imgTemp,0,0);

	// var i = 0; 
	// var str_length = code[0].length; 
	function draw(i){
		g.putImageData(imgTemp,0,i);
		
		requestAnimationFrame(function(){
			draw(i+1);
		});
	}
	// draw(); 

	// function fall(){
	// 	var i=0; 
	// 	for (i=0;i<width_em;i++){

	// 	}
	// }

//fillText(string text, int x, int y[, int maxWidth])


	// var raf;

	// var ball = {
	//   x: 100,
	//   y: 100,
	//   vx: 5,
	//   vy: 2,
	//   radius: 25,
	//   color: 'blue',
	//   draw: function() {
	//     g.beginPath();
	//     g.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	//     g.closePath();
	//     g.fillStyle = this.color;
	//     g.fill();
	//   }
	// };

	// function draw() {
	//   g.clearRect(0,0, domCanvas.width, domCanvas.height);
	//   ball.draw();
	//   ball.x += ball.vx;
	//   ball.y += ball.vy;
	//   raf = window.requestAnimationFrame(draw);
	// }


	// domCanvas.addEventListener('mouseover', function(e){
	//   raf = window.requestAnimationFrame(draw);
	// });

	// domCanvas.addEventListener("mouseout",function(e){
	//   window.cancelAnimationFrame(raf);
	// });

	// ball.draw();

	// this.fall = fall; 
	this.draw = draw; 
	// this.setFillStyle = setFillStyle;

}
