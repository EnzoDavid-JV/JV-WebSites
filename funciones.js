function inicio(){
	document.getElementById("cajaForm").style.display = "none"
}
function cerrarSaludo(){
	var cajaIni = document.getElementById("bienvenida")
	document.getElementById("cajaForm").style.display = "block"
	if (cajaIni.style.display = "block"){
		cajaIni.style.display = "none"
		
	}
}



function activarBoton(){
	
	
	
	var boton1 = document.getElementById("nickName")
	var nameIn = true
	if(nameIn == false){
	 boton1.disabled = true	
	}else{
	boton1.disabled = false	
}
}




function empezar(){
	
	
	
	var pantalla = document.getElementById("visor")
	var botonC = document.getElementById("botonC")
	var botonN = document.getElementById("botonN")
	var botonL = document.getElementById("botonL")
	var botonF = document.getElementById("botonF")
	var nameIn = document.getElementById("nombre").value
	var nameIn = nameIn.toUpperCase()
	pantalla.innerHTML="<p>" + "HOLA "+ nameIn + "!!" + "<br/>" + "VAMOS A JUGAR!!" + "</br>" + "Elige una categoria"
	
	if(botonC.disabled || botonN.disabled || botonL.disabled){
	botonC.disabled = false 
	botonN.disabled = false
	botonL.disabled = false	
	botonF.disabled = false
	}
}


var pantalla = document.getElementById("visor")
var botonC = document.getElementById("botonC")
var botonN = document.getElementById("botonN")
var botonL = document.getElementById("botonL")
var botonF = document.getElementById("botonF")
const nameIn = document.getElementById("nombre").value
var boton1 = document.getElementById("nickName")

// Tablero de Colores


 preguntas = [
 {c:"AZUL",opt:["caja1"]},
 {c:"ROJO",opt:["caja2"]},
 {c:"AMARILLO",opt:["caja3"]},
 {c:"VERDE",opt:["caja4"]},
 {c:"BLANCO",opt:["caja5"]},
 {c:"VIOLETA",opt:["caja6"]},
 {c:"NEGRO",opt:["caja7"]},
 {c:"ROSA",opt:["caja8"]},
 {c:"NARANJA",opt:["caja9"]},
 {c:"MARRON",opt:["caja10"]}
]

	const tableroNum = document.getElementById("tabNum")
	const tableroCol = document.getElementById("tabCol")
	const tableroLet = document.getElementById("tabLet")
	const tableroFor = document.getElementById("tabFor")





function preguntaColores(){
	
	if(tableroCol.style.display = "none"){
		tableroNum.style.display = "none"
		tableroLet.style.display = "none"
		tableroCol.style.display = "block"
		tableroFor.style.display = "none"
}
	
	preguntasAleatorias = Math.floor(Math.random()*preguntas.length)
		
	pantalla.innerHTML="<p>"+ "CUAL ES EL COLOR "+ "</br>" + preguntas[preguntasAleatorias].c + " ?"
	
}

function validar(caja){
	
	console.log(preguntas[preguntasAleatorias].opt + preguntas[preguntasAleatorias].c)
	if(caja == preguntas[preguntasAleatorias].opt){
		
		pantalla.innerHTML="<h1>"+"EXCELENTE"
	
		setTimeout(() => {
			preguntaColores()
		}, 1500); 

}
} 

// Tablero de Numeros


var numeros = [
{n:1,opt2:["1"]},
{n:2,opt2:["2"]},
{n:3,opt2:["3"]},
{n:4,opt2:["4"]},
{n:5,opt2:["5"]},
{n:6,opt2:["6"]},
{n:7,opt2:["7"]},
{n:8,opt2:["8"]},
{n:9,opt2:["9"]},
{n:10,opt2:["10"]}
]

function preguntaNumeros(){
	if(tableroNum.style.display = "none"){
		tableroNum.style.display = "block"
		tableroCol.style.display = "none"
		tableroLet.style.display = "none"
		tableroFor.style.display = "none"
}
	
numerosAleatorios = Math.floor(Math.random()*numeros.length)
		console.log(numeros[numerosAleatorios].opt2)
	pantalla.innerHTML="<p>"+"CUAL ES EL NUMERO "+ "</br>" + numeros[numerosAleatorios].n + " ?"


}
function validar2(caja2){	
console.log(caja2 + numeros[numerosAleatorios].opt2)
if(caja2 == numeros[numerosAleatorios].opt2){
		
	pantalla.innerHTML="<h1>"+"EXCELENTE"
	
	setTimeout(() => {
		preguntaNumeros()
	}, 1500); 

}
}

// Tablero de Letras
var letras = [
{l:"A",opt3:["a"]},
{l:"B",opt3:["b"]},
{l:"C",opt3:["c"]},
{l:"D",opt3:["d"]},
{l:"E",opt3:["e"]},
{l:"F",opt3:["f"]},
{l:"G",opt3:["g"]},
{l:"H",opt3:["h"]},
{l:"I",opt3:["i"]},
{l:"J",opt3:["j"]},
{l:"K",opt3:["k"]},
{l:"L",opt3:["l"]},
{l:"LL",opt3:["ll"]},
{l:"M",opt3:["m"]},
{l:"N",opt3:["n"]},
{l:"Ñ",opt3:["ñ"]},
{l:"O",opt3:["o"]},
{l:"P",opt3:["p"]},
{l:"Q",opt3:["q"]},
{l:"R",opt3:["r"]},
{l:"S",opt3:["s"]},
{l:"T",opt3:["t"]},
{l:"U",opt3:["u"]},
{l:"V",opt3:["v"]},
{l:"W",opt3:["w"]},
{l:"X",opt3:["x"]},
{l:"Y",opt3:["y"]},
{l:"Z",opt3:["z"]}
]

function preguntaLetras(){
	if(tableroLet.style.display = "none"){
		tableroLet.style.display = "block"
		tableroNum.style.display = "none"
		tableroCol.style.display = "none"
		tableroFor.style.display = "none"
}
	
letrasAleatorias = Math.floor(Math.random()*letras.length)
		console.log(letras[letrasAleatorias].l)
	pantalla.innerHTML='<p>'+'CUÁL ES LA LETRA '
	+ "</br>" + ' "' + letras[letrasAleatorias].l + '" ' +' ?'


}
function validar3(caja3){	
console.log(caja3 + letras[letrasAleatorias].opt3)
if(caja3 == letras[letrasAleatorias].opt3){
		
	pantalla.innerHTML="<h1>"+"EXCELENTE"
	
	setTimeout(() => {
		preguntaLetras()
	}, 1500); 

}
}

//Tablero de formas

var formas = [
{f:"EL CUADRADO",opt4:["01"]},
{f:"EL CIRCULO",opt4:["02"]},
{f:"EL OVALO",opt4:["03"]},
{f:"EL RECTANGULO",opt4:["04"]},
{f:"EL TRIANGULO",opt4:["05"]},
{f:"EL CORAZON",opt4:["06"]},
{f:"EL EXAGONO",opt4:["07"]},
{f:"LA ESTRELLA",opt4:["08"]},
{f:"EL ROMBO",opt4:["09"]},
{f:"EL PENTAGONO",opt4:["10"]}
]



 
function preguntaFormas(){
	if(tableroFor.style.display = "none"){
		tableroNum.style.display = "none"
		tableroCol.style.display = "none"
		tableroLet.style.display = "none"
		tableroFor.style.display = "block"
}
	
formasAleatorias = Math.floor(Math.random()*formas.length)
		console.log(formas[formasAleatorias].opt4)
	pantalla.innerHTML="<p>"+"CUAL ES "+ "</br>" + formas[formasAleatorias].f + " ?"


}



function validar4(caja4){	
console.log(caja4 + formas[formasAleatorias].opt4)
if(caja4 == formas[formasAleatorias].opt4){
		
	pantalla.innerHTML="<h1>"+"EXCELENTE"
	
	setTimeout(() => {
		preguntaFormas()
	}, 1500); 
} 
}
