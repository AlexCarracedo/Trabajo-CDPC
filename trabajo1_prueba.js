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
}
function clickcolumna(_event) {
    if (i%2==0) {
        if (mouseX>=0 && mouseX<200) {
            ellipse(100,100,20,20);
        }
        if (mouseX>200 && mouseX<400) {
            ellipse(200,100,20,20);
        }
        if (mouseX>400 && mouseX<=600) {
            ellipse(300,100,20,20);
        }
    }
}