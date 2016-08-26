/* 
 * jP is a kind of player plugins based on canvas and web audio API 
 * 
 * this is the part of jP's animation code.
 *
 */ 

"use strict"; 
function wallInit(domCanvasId){
	var domCanvas = window.document.getElementById(domCanvasId);

	domCanvas.width =  parseInt($(window).innerWidth()*2);
	domCanvas.height = parseInt($(window).innerHeight()*2);

	var width = domCanvas.width*2,
		height = domCanvas.height*2,
		g = domCanvas.getContext('2d');


	var draw = 0; 
	this.draw = draw; 

	// function 
}
