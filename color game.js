colors=generateRandomColor(6);

pickedColor=randomColor();

var stat = document.querySelector("#status");
var rgb=document.querySelector("#rgbDisplay");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var tiles=document.querySelectorAll(".square");
hard.classList.add("selected");

rgb.textContent=pickedColor;
window.num=6;

reset.addEventListener("click",function(){
	resetAll(window.num);
});


for(var i=0;i<tiles.length;i++){
	tiles[i].style.background=colors[i];
	tiles[i].addEventListener("click",function(){
	var clickedColor=this.style.backgroundColor;
	if(clickedColor==pickedColor){
		stat.textContent="Correct !";
		changeColor(pickedColor);
		h1.style.background=pickedColor;
		reset.textContent="Play Again?";
			reset.addEventListener("click",function(){
				reset.textContent="Change Color";
			})
	}else{
		this.style.backgroundColor= "#232323";  
		stat.textContent="Wrong !";
	}
})
}

function changeColor(color){
	for(var i =0;i<tiles.length;i++){
		tiles[i].style.backgroundColor=color;
	}
}

function randomColor(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColor(n){
	var arr = [];
	for (var i=0;i<n;i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}

function resetAll(num){
	colors=generateRandomColor(num);
	pickedColor=randomColor();
	tiles[3].style.display="block";
	tiles[4].style.display="block";
	tiles[5].style.display="block";
	for(var i=0;i<num;i++){
		tiles[i].style.background=colors[i];	
	}
	if(num===3){
		tiles[3].style.display="none";
		tiles[4].style.display="none";
		tiles[5].style.display="none";
	}
	h1.style.background="steelblue";
	rgb.textContent=pickedColor;
	stat.textContent="";

}

 easy.addEventListener("click",function(){
 	easy.classList.add("selected");
 	hard.classList.remove("selected");
 	window.num=3;
 	resetAll(window.num)
 })

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	window.num=6;
	resetAll(window.num)
})
