/* 
 * jP is a kind of player plugins based on canvas and web audio API 
 * 
 * this is the part of jP's animation code.
 *
 */ 

"use strict"; 
function codeWallInit(domCanvasId){
	var domCanvas = window.document.getElementById(domCanvasId);
	var code = [
		'printf("nice to code you!");', 
		'printf("你好,朋友");',
		'printf("nice to code you!");'
	]; 

	domCanvas.width =  parseInt(window.innerWidth*2);
	domCanvas.height = parseInt(window.innerHeight*2);

	var width = domCanvas.width*2,
		height = domCanvas.height*2,
		g = domCanvas.getContext('2d');


	var width_em = parseInt((window.innerWidth / 60)+1); 
	console.log(width_em); 


	g.font = "36px Mono ";

	var k = 36; 
	var imgTemp
	for (var j =0;j<code[0].length;j++){
		g.fillText(code[0].slice(j,j+1),0,j+k);
		k+=36;
	}

	imgTemp = g.getImageData(0,0,60,code[0].length*36); 
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




	// function fall(){
	// 	var i=0; 
	// 	for (i=0;i<width_em;i++){

	// 	}
	// }

//fillText(string text, int x, int y[, int maxWidth])

	// this.fall = fall; 
	this.draw = draw; 
	// this.setFillStyle = setFillStyle;

}
