const COLOR0 = "white";
const COLOR_JUG1 = "red";
const COLOR_JUG2 = "blue";
//var breakdraw=0;
//var ra = 0;
//var rb = 0;
//var rc = 0;
//var rd = 0;
//var re = 0;
//var rf = 0;
//var rg = 0;
//var ja = 0;
//var jb = 0;
//var jc = 0;
//var jd = 0;
//var je = 0;
//var jf = 0;
//var jg = 0;
//var p = 0;
//La variable i para alternar los turnos
var i = 0;
//La variable x e y son para el tablero
var x = 0/3;
var y = 100/3;
//Las variables a, b, m, d, e, n, g son para que cuando un jugador pornga en una fila, el siguiente coloque su fiche encima de la anterior
var a = 0;
var b = 0;
var m = 0;
var d = 0;
var e = 0;
var n = 0;
var g = 0;
function setup() {
    createCanvas(800/3,700/3);
    background(5, 136, 211);
}
 
function draw(){
    //Creamos el tablero
    while (y <= height-33) {
        while (x < width-100/3) {
            x=x+100/3;
            fill(COLOR0);
            ellipse(x,y,75/3,75/3);
        }
        y=y+100/3;
        x=0;
    }
    if (i==0) {
        var div = document.querySelector("div");  // <div></div>
        div.textContent = "Comienzan las rojas. Pulsa para empezar."; // <div>Hola a todos</div>
        div.textContent;
    }
    //fill(COLOR_JUG1);
    //ellipse(100, 600, 75, 75);
   //Hacemos una llamada para poder interactuar con el programa pulsando, en este caso, sobre las columnas
    addEventListener("click", clickColumna);
}
function clickColumna(_event) {
    if (breakdraw==0) {
    //Según si i sea o no múltiplo de 2, le tocará a un jugador u otro, añadiendo 1 a i a cada movimiento, de modo que se vayan alternando los turnos
    if (i%2==0) {
        //Si i es multiplo de 2, le tocará a las rojas y el círculo se llenará donde diga
        if (mouseX >= 100/3-75/6 && mouseX <= 100/3+75/6 && a < 6) {
            fill(COLOR_JUG1);
            ellipse(100/3, 200-100/3*a, 75/3,75/3);
            i=i+1;
            a=a+1;
        }
        if (mouseX >= 200/3-75/6 && mouseX <= 200/3+75/6 && b < 6) {
            fill(COLOR_JUG1);
            ellipse(200/3, 200-100/3*b, 75/3,75/3);
            i=i+1;
            b=b+1;
        }
        if (mouseX >= 100-75/6 && mouseX <= 100+75/6 && m < 6) {
            fill(COLOR_JUG1);
            ellipse(100, 200-100/3*m, 75/3,75/3);
            i=i+1;
            m=m+1;
        }
        if (mouseX >= 400/3-75/6 && mouseX <= 400/3+75/6 && d < 6) {
            fill(COLOR_JUG1);
            ellipse(400/3, 200-100/3*d, 75/3,75/3);
            i=i+1;
            d=d+1;
        }
        if (mouseX >= 500/3-75/6 && mouseX <= 500/3+75/6 && e < 6) {
            fill(COLOR_JUG1);
            ellipse(500/3, 200-100/3*e, 75/3,75/3);
            i=i+1;
            e=e+1;
        }
        if (mouseX >= 200-75/6 && mouseX <= 200+75/6 && n < 6) {
            fill(COLOR_JUG1);
            ellipse(600/3, 600/3-100/3*n, 75/3,75/3);
            i=i+1;
            n=n+1;
        }
        if (mouseX >= 700/3-75/6 && mouseX <= 700/3+75/6 && g < 6) {
            fill(COLOR_JUG1);
            ellipse(700/3, 600/3-100/3*g, 75/3, 75/3);
            i=i+1;
            g=g+1;
        }
        //if () {
        //    var div = document.querySelector("div");  // <div></div>
        //    div.textContent = "GANAN LAS ROJAS."; // <div>Hola a todos</div>
        //    div.textContent;
        //    breakdraw=1;
        //}
        if (i%2==1) {
            var div = document.querySelector("div");  // <div></div>
            div.textContent = "ES EL TURNO DE LAS AZULES."; // <div>Hola a todos</div>
            div.textContent;
        }
        //Al terminar el turno, se le sumará 1 a i, haciendo que no sea múltiplo de 2 y le toquen a las azules
    } else {
        //Como al terminar las rojas, se le ha añadido 1 a i, ahora es el turno de las azules
        if (mouseX >= 100/3-75/6 && mouseX <= 100/3+75/6 && a < 6) {
            fill(COLOR_JUG2);
            ellipse(100/3, 200-100/3*a, 75/3,75/3);
            i=i+1;
            a=a+1;
        }
        if (mouseX >= 200/3-75/6 && mouseX <= 200/3+75/6 && b < 6) {
            fill(COLOR_JUG2);
            ellipse(200/3, 200-100/3*b, 75/3,75/3);
            i=i+1;
            b=b+1;
        }
        if (mouseX >= 100-75/6 && mouseX <= 100+75/6 && m < 6) {
            fill(COLOR_JUG2);
            ellipse(100, 200-100/3*m, 75/3,75/3);
            i=i+1;
            m=m+1;
        }
        if (mouseX >= 400/3-75/6 && mouseX <= 400/3+75/6 && d < 6) {
            fill(COLOR_JUG2);
            ellipse(400/3, 200-100/3*d, 75/3,75/3);
            i=i+1;
            d=d+1;
        }
        if (mouseX >= 500/3-75/6 && mouseX <= 500/3+75/6 && e < 6) {
            fill(COLOR_JUG2);
            ellipse(500/3, 200-100/3*e, 75/3,75/3);
            i=i+1;
            e=e+1;
        }
        if (mouseX >= 200-75/6 && mouseX <= 200+75/6 && n < 6) {
            fill(COLOR_JUG2);
            ellipse(600/3, 600/3-100/3*n, 75/3,75/3);
            i=i+1;
            n=n+1;
        }
        if (mouseX >= 700/3-75/6 && mouseX <= 700/3+75/6 && g < 6) {
            fill(COLOR_JUG2);
            ellipse(700/3, 600/3-100/3*g, 75/3, 75/3);
            i=i+1;
            g=g+1;
        }
        if (i%2==0) {
            var div = document.querySelector("div");  // <div></div>
            div.textContent = "ES EL TURNO DE LAS ROJAS."; // <div>Hola a todos</div>
            div.textContent;
        }
        //Al terminar las azules su turno, se le vuelve a sumar 1 a i, haciéndolo de nuevo múltiplo de 2, por lo que vuelve a ser el turno de las rojas. Esto se repite en bucle
        //Depende de la columna que se elija, se le añade 1 a las variables a, b, m, d, e, n o g para que si un jugador ya ha puesto en alguna de esas columnas, el siguiente movimiento ahí sea encima de la última ficha y no se solapen
    }
}
}
