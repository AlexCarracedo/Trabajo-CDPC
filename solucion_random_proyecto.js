console.log("Iniciando 4enRaya");
window.onload = preparar;

//Constantes
const SVG_NS = "http://www.w3.org/2000/svg";
const COLOR0 = "white";
const COLOR_JUG1 = "blue";
const COLOR_JUG2 = "red";
const OBJETIVO = 10;		//Jugamos a 10 puntos

//Variables Globales
var svg = null;
var turno = COLOR_JUG1;	//Cambiará de COLOR
var tablero;			//Un array de colores (por columnas) de 7 arrays de 6 posiciones.
var vistaTablero;		//Un array de circles (por columnas) de 7 arrays de 6 posiciones.
var puntos = [0,0];		//Puntos de la partida [Humano, IA]
var pResultado;			//Elemento HTML con la información del resultado de la partida
var mensaje; 			//Texto del mensaje ganar/perder
var nivel = 5;			//Nivel de juego
var pausa = false;		//Indica si el juego está en pausa
var contadorMovimientos = 0;
var rMargenY = 50;
var rAltura = 515;

//TODO: Poda alfa-beta
//Guardamos el valor mínimo (alfa, si es MIN(juega Humano)) o máximo (beta, si es MAX(juega IA)) de cada nivel.
//Si en al analizar una jugada de HUMANO, una opción no es inferior al mínimo...

function preparar(){
	svg = document.getElementById("svg");
	pResultado = document.getElementById("pResultado");
	mensaje = document.getElementById("spanResultado");
	
	/*
		Son 6 6 y 7 columnas.
		Cada posición con radio 40 y margen 5
		Ancho: 7*(40*2 + 5) + 5 de margen al final = 600
		Alto:  6*(40*2 + 5) + 5 de margen al final = 600
	*/
	
	//<rect x="0" y="0" rx="20" ry="20" width="600" height="515" />
	r = document.createElementNS(SVG_NS,"rect");
	r.setAttribute('x', 0);
	r.setAttribute('y', rMargenY);	//margen superior para las flechas
	r.setAttribute('rx', 20);
	r.setAttribute('ry', 20);
	r.setAttribute('width', 600);
	r.setAttribute('height', 515);
	svg.appendChild(r);
	
	mostrarPuntos();
	
	document.getElementById("btnSiguiente").addEventListener("click", iniciarPartida);
	
	iniciarPartida();
}

function iniciarPartida(){
	
	pResultado.style.visibility = 'hidden';
	pausa = false;
	
	//Inicializamos los arrays
	tablero = new Array(6);
	vistaTablero = new Array(6);
	for(let i = 0; i < 6; i++){
		tablero[i] = new Array(7);
		vistaTablero[i] = new Array(7);
	}
	
	//<circle cx="" cy="" r="40" />
	var cRadio = 40;
	for(var i = 0; i < 6; i++){
		for (var j = 0; j < 7; j++){
			var cy = 5 + rMargenY + cRadio + (2*cRadio+5)*i;
			var cx = 5 + 0 + cRadio + (2*cRadio+5)*j;
			m = document.createElementNS(SVG_NS,"circle");
			//m.id = 
			m.setAttribute('cx', cx);
			m.setAttribute('cy', cy);
			m.setAttribute('r', 40);
			m.style.fill = COLOR0;
			svg.appendChild(m);
			vistaTablero[i][j] = m;
			tablero[i][j] = COLOR0;
		}
	}
	
	//<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
	for (var i = 0; i < 7; i++){
		n = document.createElementNS(SVG_NS,"polygon");
		var p1X = 15 + 85*i;
		var p1Y = 15;
		var p2X = p1X + (86 - 15*2);
		var p2Y = p1Y;
		var p3X = p1X + (p2X - p1X) / 2;
		var p3Y = 40;
		n.setAttribute("points", p1X + "," + p1Y + " " + p2X + "," + p2Y + " " + p3X + "," + p3Y);
		n.setAttribute("data-col", i);
		svg.append(n);
		
		n.addEventListener("mouseover", cambiarColorFlecha);
		n.addEventListener("mouseout", borrarColorFlecha);
		n.addEventListener("click", clickColumna);
	}
	
	if (turno == COLOR_JUG2)
		jugarMaquina();
}

function cambiarColorFlecha(evento){
	var n = evento.target;
	n.style.fill =  turno;
}

function mostrarPuntos(){
	document.getElementById("puntosHumano").innerHTML = puntos[0];
	document.getElementById("puntosIA").innerHTML = puntos[1];
	if (puntos[0] >= OBJETIVO){
		alert("Tú ganas Humano... por ahora");
		location.reload();
	}
	if (puntos[1] >= OBJETIVO){
		alert("Te he ganado (como era de esperar) :)");
		location.reload();
	}
}

function borrarColorFlecha(evento){
	var n = evento.target;
	n.style.fill =  'white';
}

function clickColumna(evento){
	if (!pausa){
		var col = evento.target.getAttribute("data-col");
		jugar(col, tablero);
	}
	else
		console.log("Juego pausado.");
}

function jugar(col, tablero){
	if (!mover(col, tablero, turno)){	//Si el movimiento no es válido
		console.log("Mov. a " + col + " es ilegal");
		return;				//No hacemos nada
	}
	
	mostrar(tablero);
	
	console.log("Mov. " + (++contadorMovimientos) + " " + turno + " " + col);

	var ganador = verGanador(tablero);
	if (ganador == COLOR_JUG1){
		pausa = true;
		console.log("Gana Humano");
		mensaje.innerHTML = 'Tú ganas humano';
		pResultado.style.visibility = "visible";
		puntos[0]++;
		mostrarPuntos();
	}
	else if (ganador == COLOR_JUG2){
		pausa = true;
		console.log("Gana IA");
		mensaje.innerHTML = '¡Yo gano!';
		pResultado.style.visibility = "visible";
		puntos[1]++;
		mostrarPuntos();
	}
	else {
		//Vemos si hay empate
		let hayEmpate = true;
		for (let i = 0; i < 7; i++)
			if (verPrimerHueco(i, tablero) != -1){
				hayEmpate = false;
				break;
			}
		if (hayEmpate)
			empate();
		cambiarTurno();
	}
}

function mover(col, tablero, color){
	var fila = verPrimerHueco(col, tablero);
	if (fila == -1) return false;	//Fila llena

	tablero[fila][col] = color;
	return true;
}

function mostrar(tablero){
	for(let i = 0; i < 6; i++){
		for (let j = 0; j < 7; j++)
		vistaTablero[i][j].style.fill = tablero[i][j];
	}
}

function verPrimerHueco(col, tablero){
	var i = 6 - 1;
	while (i >= 0){
		if (tablero[i][col] == COLOR0)
			return i;
		i--;
	}
	//console.log("Columna Llena");
	return -1;
}

function cambiarTurno(){
	if (turno == COLOR_JUG1){
		turno = COLOR_JUG2;
		if (!pausa)
			jugarIA();
	}
	else
		turno = COLOR_JUG1;
}

/**
 * Decide el movimiento de la IA.
 * Utiliza el algoritmo MINIMAX
 */
function jugarIA(){
	var mejorValor = -2;
	var mejoresJugadas = new Array();
	
	for (let i = 0; i < 7; i++){
		if (verPrimerHueco(i, tablero) != -1){ //No comprobamos los ilegales
			var valor = valorarJugada(tablero, COLOR_JUG2, i, 0)
			console.log("Valor de col " + i + " = " + valor);
			if (valor > mejorValor){
				mejorValor = valor;
				mejoresJugadas = [i];	//Borramos el array y metemos el nuevo valor
			}
			else if (valor == mejorValor){
				mejoresJugadas.push(i);
			}
		}
	}
	
	if (mejoresJugadas.length == 0)	//No hay ningún movimiento legal
		empate();
	else{
		//Elegimos aleatoriamente entre las mejores mejoresJugadas
		var col = mejoresJugadas[Math.floor(Math.random() * mejoresJugadas.length)];
		console.log("Juego " + col);
		jugar(col, tablero);
	}
}

/**
 * Calcula el valor de una jugada.
 * tablero 	- Situación del tablero antes del movimiento.
 * jugador	- Jugador que hace el movimiento (COLOR_JUG2 | COLOR_JUG1)
 * col		- Índice de la columna a mover.
 * profundidad	- Profundidad de la jugada en el árbol.
 * Devuelve:
 *	 1 si gana IA.
 * 	-1 si gana HUMANO.
 * 	 0 si la columna está llena o no hay ningún ganador.
 */
function valorarJugada(tablero, jugador, col, profundidad){
	
	if (verPrimerHueco(col, tablero) == -1)	//Columna llena
		return 0;		//Peor es perder
	
	if (profundidad == nivel)	//Si hemos llegado al último nivel
		return 0;		// ya no valoramos la jugada
		
	//Hacemos una copia del tablero
	var tablero1 = copiarTablero(tablero);
	
	mover(col, tablero1, jugador);
	
	//Vemos si la jugada es terminal
	if (jugador == COLOR_JUG2){
		if (verGanador(tablero1) == COLOR_JUG2) //Si es terminal -> 1
			return 1;
		//Profundizamos buscando la mejor jugada de Humano (MIN)
		let min = 1;
		for (let col2 = 0; col2 < 7; col2++){
			let tablero2 = copiarTablero(tablero1);
			let valor = valorarJugada(tablero2, COLOR_JUG1, col2, profundidad + 1);
			//console.log("\tIA: Valor de col " + col2 + " = " + valor);
			if (valor < min)
				min = valor;
		}
		return min;
	}
	else {
		if (verGanador(tablero1) == COLOR_JUG1)	//Si es terminal -> -1
			return -1;
		//Profundizamos buscando la mejor jugada de IA (MAX)
		let max = -2;
		for (let col2 = 0; col2 < 7; col2++){
			let tablero2 = copiarTablero(tablero1);
			let valor = valorarJugada(tablero1, COLOR_JUG2, col2, profundidad + 1);
			//console.log("\tHumano: Valor de col " + col2 + " = " + valor);
			if (valor > max)
				max = valor;
		}
		return max;
	}
	
	return 0;	//Si no gana ninguno devolvemos cero
	
		//IA - Escojo la jugada que maximiza el valor (mi mejor jugada)
		//HUMANO - Escojo la jugada que minimiza el valor (su mejor jugada)
}

function empate(){
	console.log("Empate");
	alert("Empate");
	pResultado.style.visibility = "visible";
}

function copiarTablero(tablero){
	var copiaTablero = new Array(6);
	for(var i = 0; i < 6; i++)
		copiaTablero[i] = tablero[i].slice();
	
	return copiaTablero;
}

function verGanador(tablero){
	//Buscamos en horizontal
	for (var m = 0; m < 6; m++){
		var n1 = 0;
		var n2 = 0;
		for (var n = 0; n < 7; n++){
			if (tablero[m][n] == COLOR0){
				n1 = 0;
				n2 = 0;
			}
			else if (tablero[m][n] == COLOR_JUG1){
				n1++;
				n2 = 0;
				if (n1 == 4)
					return COLOR_JUG1;
			}
			else{
				n1 = 0;
				n2++;
				if (n2 == 4)
					return COLOR_JUG2;
			}
		}
	}
	
	//Buscamos en vertical de abajo a arriba
	for (var m = 0; m < 7; m++){
		var n1 = 0;
		var n2 = 0;
		for (var n = 6-1; n >= 0; n--){	//De abajo a arriba para poder cortar.
			if (tablero[n][m] == COLOR0){
				break;	//Ya no hay mas en la columna.
			}
			else if (tablero[n][m] == COLOR_JUG1){
				n1++;
				n2 = 0;
				if (n1 == 4)
					return COLOR_JUG1;
			}
			else{
				n1 = 0;
				n2++;
				if (n2 == 4)
					return COLOR_JUG2;
			}
		}
	}
	
	//Buscamos en diagonal de izquierda a derecha
	for (var i = -(7 + 4); i < 7; i++){
		var n1 = 0;
		var n2 = 0;
		for (var n = 0; n < 6; n++){
			var m = i + n;
			if ((m < 0) || (m >= 7))
				continue;
			if (tablero[n][m] == COLOR0){
				n1 = 0;
				n2 = 0;
			}
			else if (tablero[n][m] == COLOR_JUG1){
				n1++;
				n2 = 0;
				if (n1 == 4)
					return COLOR_JUG1;
			}
			else{
				n1 = 0;
				n2++;
				if (n2 == 4)
					return COLOR_JUG2;
			}
		}
	}
	
	//Buscamos en diagonal de derecha a izquierda
	for (var i = 0; i < 7 + 4; i++){
		var n1 = 0;
		var n2 = 0;
		for (var n = 0; n < 6; n++){
			var m = i - n;
			if ((m < 0) || (m >= 7))
				continue;
			if (tablero[n][m] == COLOR0){
				n1 = 0;
				n2 = 0;
			}
			else if (tablero[n][m] == COLOR_JUG1){
				n1++;
				n2 = 0;
				if (n1 == 4)
					return COLOR_JUG1;
			}
			else{
				n1 = 0;
				n2++;
				if (n2 == 4)
					return COLOR_JUG2;
			}
		}
	}
	return undefined;
}