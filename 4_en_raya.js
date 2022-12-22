const COLOR0 = "white";
const COLOR_JUG1 = "red";
const COLOR_JUG2 = "blue";
//var breakdraw=0;
//La variable x e y son para el tablero
var x = 0;
var y = 100;
//Las variables a, b, c, d, e, f, g son para que cuando un jugador pornga en una fila, el siguiente coloque su fiche encima de la anterior
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var i = parseInt(prompt("¿Que jugador comienza? (0->Rojas/1->Azules)"));
if (i<0 | (i>0 && i<1) | i>1) {
    var i = parseInt(prompt("¿Que jugador comienza? (0->Rojas/1->Azules)"));
}
function setup() {
    createCanvas(800,700);
    background(5, 136, 211);
}
 
function draw(){
    //Creamos el tablero
    while (y <= height-100) {
        while (x < width-100) {
            x=x+100;
            fill(COLOR0);
            ellipse(x,y,75,75);
        }
        y=y+100;
        x=0;
    }
    if (i==0) {
        var div = document.querySelector("div");  // <div></div>
        div.textContent = "Comienzan las rojas. Pulsa para empezar."; // <div>Hola a todos</div>
        div.textContent;
    }
    if (i==1) {
        var div = document.querySelector("div");  // <div></div>
        div.textContent = "Comienzan las azules. Pulsa para empezar."; // <div>Hola a todos</div>
        div.textContent;
    }
    //fill(COLOR_JUG1);
    //ellipse(100, 600, 75, 75);
   //Hacemos una llamada para poder interactuar con el programa pulsando, en este caso, sobre las columnas
    addEventListener("click", clickColumna);
}
function clickColumna(_event) {
    if (a<6 && b<6 && c<6 && d<6 && e<6 && f<6 && g<6) {
    //if (breakdraw==0) {
    //Según si i sea o no múltiplo de 2, le tocará a un jugador u otro, añadiendo 1 a i a cada movimiento, de modo que se vayan alternando los turnos
    if (i%2==0) {
        //Si i es multiplo de 2, le tocará a las rojas y el círculo se llenará donde diga
        if (mouseX >= 100-75/2 && mouseX <= 100+75/2 && a < 6) {
            fill(COLOR_JUG1);
            ellipse(100, 600-100*a, 75,75);
            i=i+1;
            a=a+1;
        }
        if (mouseX >= 200-75/2 && mouseX <= 200+75/2 && b < 6) {
            fill(COLOR_JUG1);
            ellipse(200, 600-100*b, 75,75);
            i=i+1;
            b=b+1;
        }
        if (mouseX >= 300-75/2 && mouseX <= 300+75/2 && c < 6) {
            fill(COLOR_JUG1);
            ellipse(300, 600-100*c, 75,75);
            i=i+1;
            c=c+1;
        }
        if (mouseX >= 400-75/2 && mouseX <= 400+75/2 && d < 6) {
            fill(COLOR_JUG1);
            ellipse(400, 600-100*d, 75,75);
            i=i+1;
            d=d+1;
        }
        if (mouseX >= 500-75/2 && mouseX <= 500+75/2 && e < 6) {
            fill(COLOR_JUG1);
            ellipse(500, 600-100*e, 75,75);
            i=i+1;
            e=e+1;
        }
        if (mouseX >= 600-75/2 && mouseX <= 600+75/2 && f < 6) {
            fill(COLOR_JUG1);
            ellipse(600, 600-100*f, 75,75);
            i=i+1;
            f=f+1;
        }
        if (mouseX >= 700-75/2 && mouseX <= 700+75/2 && g < 6) {
            fill(COLOR_JUG1);
            ellipse(700, 600-100*g, 75, 75);
            i=i+1;
            g=g+1;
        }
        //if () {
        //    var div = document.querySelector("div");
        //    div.textContent;
        //    breakdraw=1;
        //}
        if (i%2==1) {
            var div = document.querySelector("div");  // <div></div>
            div.textContent = "Es el turno de las azules."; // <div>Hola a todos</div>
            div.textContent;
        }
        //Al terminar el turno, se le sumará 1 a i, haciendo que no sea múltiplo de 2 y le toquen a las azules
    } else {
        //Como al terminar las rojas, se le ha añadido 1 a i, ahora es el turno de las azules
        if (mouseX >= 100-75/2 && mouseX <= 100+75/2 && a < 6) {
            fill(COLOR_JUG2);
            ellipse(100,600-100*a, 75,75);
            i=i+1;
            a=a+1;
        }
        if (mouseX >= 200-75/2 && mouseX <= 200+75/2 && b < 6) {
            fill(COLOR_JUG2);
            ellipse(200, 600-100*b, 75,75);
            i=i+1;
            b=b+1;
        }
        if (mouseX >= 300-75/2 && mouseX <= 300+75/2 && c < 6) {
            fill(COLOR_JUG2);
            ellipse(300, 600-100*c, 75,75);
            i=i+1;
            c=c+1;
        }
        if (mouseX >= 400-75/2 && mouseX <= 400+75/2 && d < 6) {
            fill(COLOR_JUG2);
            ellipse(400, 600-100*d, 75,75);
            i=i+1;
            d=d+1;
        }
        if (mouseX >= 500-75/2 && mouseX <= 500+75/2 && e < 6) {
            fill(COLOR_JUG2);
            ellipse(500, 600-100*e, 75,75);
            i=i+1;
            e=e+1;
        }
        if (mouseX >= 600-75/2 && mouseX <= 600+75/2 && f < 6) {
            fill(COLOR_JUG2);
            ellipse(600, 600-100*f, 75,75);
            i=i+1;
            f=f+1;
        }
        if (mouseX >= 700-75/2 && mouseX <= 700+75/2 && g < 6) {
            fill(COLOR_JUG2);
            ellipse(700, 600-100*g, 75, 75);
            i=i+1;
            g=g+1;
        }
        if (i%2==0) {
            var div = document.querySelector("div");
            div.textContent = "Es el turno de las rojas.";
            div.textContent;
        }
        //Al terminar las azules su turno, se le vuelve a sumar 1 a i, haciéndolo de nuevo múltiplo de 2, por lo que vuelve a ser el turno de las rojas. Esto se repite en bucle
        //Depende de la columna que se elija, se le añade 1 a las variables a, b, c, d, e, f o g para que si un jugador ya ha puesto en alguna de esas columnas, el siguiente movimiento ahí sea encima de la última ficha y no se solapen
    }
//}
    } else {
        if (mouseX >= 100-75/2 && mouseX <= 100+75/2 && a < 6) {
            fill(COLOR_JUG2);
            ellipse(100,600-100*a, 75,75);
        }
        if (mouseX >= 200-75/2 && mouseX <= 200+75/2 && b < 6) {
            fill(COLOR_JUG2);
            ellipse(200, 600-100*b, 75,75);
        }
        if (mouseX >= 300-75/2 && mouseX <= 300+75/2 && c < 6) {
            fill(COLOR_JUG2);
            ellipse(300, 600-100*c, 75,75);
        }
        if (mouseX >= 400-75/2 && mouseX <= 400+75/2 && d < 6) {
            fill(COLOR_JUG2);
            ellipse(400, 600-100*d, 75,75);
        }
        if (mouseX >= 500-75/2 && mouseX <= 500+75/2 && e < 6) {
            fill(COLOR_JUG2);
            ellipse(500, 600-100*e, 75,75);
        }
        if (mouseX >= 600-75/2 && mouseX <= 600+75/2 && f < 6) {
            fill(COLOR_JUG2);
            ellipse(600, 600-100*f, 75,75);
        }
        if (mouseX >= 700-75/2 && mouseX <= 700+75/2 && g < 6) {
            fill(COLOR_JUG2);
            ellipse(700, 600-100*g, 75, 75);
        }
        var div = document.querySelector("div");
            div.textContent = "Ha sido empate.";
            div.textContent;
    }
}