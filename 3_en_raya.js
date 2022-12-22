const a=0;
const b=200;
const c=400;
const d=600;
const e=100;
const f=300;
const g=500;
const h=75;
const j=125;
const k=275;
const l=325;
const m=475;
const n=525;
var winner=0;
var _1=0;
var _2=0;
var _3=0;
var _4=0;
var _5=0;
var _6=0;
var _7=0;
var _8=0;
var _9=0;
var i=0;
var y=0;
var x=0;
function setup() {
    createCanvas (600,600);
}
function draw() {
    while (y<600) {
        while (x<600) {
            rect(x,y,200,200);
            x=x+200;
        }
        x=0;
        y=y+200;
    }
    addEventListener("click", clickColumna);
    if (i==0) {
        var div = document.querySelector("div");
        div.textContent = "Comienzan los circulos. Pulsa para empezar.";
    }
}
function clickColumna(_event) {
    if (winner==0 && i<9) {
        if (i%2==0) {
            if (mouseX>=a && mouseX<b && mouseY>=a && mouseY<b && _1==0) {
                ellipse(e,e,50,50);
                i=i+1;
                _1=1;
            }
            if (mouseX>=a && mouseX<b && mouseY>b && mouseY<c && _2==0) {
                ellipse(e,f,50,50);
                i=i+1;
                _2=1;
            }
            if (mouseX>=a && mouseX<b && mouseY>c && mouseY<=d && _3==0) {
                ellipse(e,g,50,50);
                i=i+1;
                _3=1;
            }
            if (mouseX>b && mouseX<c && mouseY>=a && mouseY<b && _4==0) {
                ellipse(f,e,50,50);
                i=i+1;
                _4=1;
            }
            if (mouseX>b && mouseX<c && mouseY>b && mouseY<c && _5==0) {
                ellipse(f,f,50,50);
                i=i+1;
                _5=1;
            }
            if (mouseX>b && mouseX<c && mouseY>c && mouseY<=d && _6==0) {
                ellipse(f,g,50,50);
                i=i+1;
                _6=1;
            }
            if (mouseX>c && mouseX<=d && mouseY>=a && mouseY<b && _7==0) {
                ellipse(g,e,50,50);
                i=i+1;
                _7=1;
            }
            if (mouseX>c && mouseX<=d && mouseY>b && mouseY<c && _8==0) {
                ellipse(g,f,50,50);
                i=i+1;
                _8=1;
            }
            if (mouseX>c && mouseX<=d && mouseY>c && mouseY<=d && _9==0) {
                ellipse(g,g,50,50);
                i=i+1;
                _9=1;
            }
            if (i%2==1) {
                var div = document.querySelector("div");
                div.textContent = "Es el turno de las cruces.";
            }
            if ((_1==1 && _2==1 && _3==1) | (_4==1 && _5==1 && _6==1) | (_7==1 && _8==1 && _9==1) |  (_1==1 && _4==1 && _7==1) |  (_2==1 && _5==1 && _8==1) |  (_3==1 && _6==1 && _9==1) |  (_1==1 && _5==1 && _9==1) |  (_3==1 && _5==1 && _7==1)) {
                winner=1;
                var div = document.querySelector("div");
                div.textContent = "Han ganado los circulos.";
            }
        } else {
            if (mouseX>=a && mouseX<b && mouseY>=a && mouseY<b && _1==0) {
                line(h,h,j,j);
                line(h,j,j,h);
                i=i+1;
                _1=2;
            }
            if (mouseX>=a && mouseX<b && mouseY>b && mouseY<c && _2==0) {
                line(h,k,j,l);
                line(h,l,j,k);
                i=i+1;
                _2=2;
            }
            if (mouseX>=a && mouseX<b && mouseY>c && mouseY<=d && _3==0) {
                line(h,m,j,n);
                line(h,n,j,m);
                i=i+1;
                _3=2;
            }
            if (mouseX>b && mouseX<c && mouseY>=a && mouseY<b && _4==0) {
                line(k,h,l,j);
                line(k,j,l,h);
                i=i+1;
                _4=2;
            }
            if (mouseX>b && mouseX<c && mouseY>b && mouseY<c && _5==0) {
                line(k,k,l,l);
                line(k,l,l,k);
                i=i+1;
                _5=2;
            }
            if (mouseX>b && mouseX<c && mouseY>c && mouseY<=d && _6==0) {
                line(k,m,l,n);
                line(k,n,l,m);
                i=i+1;
                _6=2;
            }
            if (mouseX>c && mouseX<=d && mouseY>=a && mouseY<b && _7==0) {
                line(m,h,n,j);
                line(m,j,n,h);
                i=i+1;
                _7=2;
            }
            if (mouseX>c && mouseX<=d && mouseY>b && mouseY<c && _8==0) {
                line(m,k,n,l);
                line(m,l,n,k);
                i=i+1;
                _8=2;
            }
            if (mouseX>c && mouseX<=d && mouseY>c && mouseY<=d && _9==0) {
                line(m,m,n,n);
                line(m,n,n,m);
                i=i+1;
                _9=2;
            }
            if (i%2==0) {
                var div = document.querySelector("div");
                div.textContent = "Es el turno de los circulos.";
            }
            if ((_1==2 && _2==2 && _3==2) | (_4==2 && _5==2 && _6==2) | (_7==2 && _8==2 && _9==2) |  (_1==2 && _4==2 && _7==2) |  (_2==2 && _5==2 && _8==2) |  (_3==2 && _6==2 && _9==2) |  (_1==2 && _5==2 && _9==2) |  (_3==2 && _5==2 && _7==2)) {
                winner=1;
                var div = document.querySelector("div");
                div.textContent = "Han ganado las cruces.";
            }
        }
    }
    if (winner==0 && i==9) {
        var div = document.querySelector("div");
                div.textContent = "Ha sido empate.";
    }
}