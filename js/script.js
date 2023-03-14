var dado = document.getElementById('dado');
var fotos 
dado.addEventListener("click", function(){
	
fotos = (Math.round(Math.random ()*10))+1;
	console.log (fotos);
dado.setAttribute("src", "imagens/"+fotos+".jpg");});