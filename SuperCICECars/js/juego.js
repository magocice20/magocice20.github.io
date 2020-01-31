console.log("jugando...");

var posPlayer1 = 0;
var posPlayer2 = 0;
var jugando = true;
const SPEED = 10;
const DISTANCIA = 900;

function inicializar(){
	var logo = document.getElementById("logo");
	// ALTERNATIVA BIND1
	logo.onmouseover = function(){	
	console.log("ENTRANDO");
   }
	// ALTERNATIVA BIND 2
	logo.addEventListener ("mouseleave", function(){	
	   console.log("SALIENDO");
   });
}
//	alert("HA GANADO EL PLAYER 1");
//	alert("HA GANADO EL PLAYER 2");

function capturarPulsacion(tecla){
	// a minuscula -->player 1
	// l minuscula -->player 2
	if (jugando==true) { 		
		if (tecla.key=="a"){
			posPlayer1=posPlayer1+SPEED;
			document.getElementById("player1").style.paddingLeft=posPlayer1+"px";
			if (posPlayer1 >= DISTANCIA){
			    document.getElementById("campeon").innerHTML="HA GANADO PLAYER 1";
			    document.getElementById("ap").play();
				jugando=false;
			}

		}
		if (tecla.key=="l"){
			posPlayer2=posPlayer2+SPEED;
			document.getElementById("player2").style.paddingLeft=posPlayer2+"px";
			if (posPlayer2 >= DISTANCIA){
				document.getElementById("campeon").innerHTML="HA GANADO PLAYER 2";
			    document.getElementById("ap").play();
				jugando=false;
			}
	}	}
}


function zoom(idcoche){
	console.log("Zoomeando");
	var coche = document.getElementById("player"+idcoche);
	coche.style.width="500px";
}
function antizoom(idcoche){
	console.log("Zoomeando");
	var coche = document.getElementById("player"+idcoche);
	coche.style.width="250px";
}