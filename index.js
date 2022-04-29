var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up:38,
    Rigth:39,
    Down:40,
    Left:37
}

var x = 50;
var y = 50;
var movimento = 10;
document.addEventListener("keydown", desenhalinha);

function desenhalinha(Event){

switch(Event.keyCode){
    case teclas.Down:
        desenho("green", x , y , x , y+movimento);
        y = y + movimento;
    break;
    case teclas.Up:
        desenho("green", x , y , x , y-movimento);
        y = y - movimento;
    break;
    case teclas.Rigth:
        desenho("green", x , y , x+movimento,y);
        x = x + movimento;
    break;    
    case teclas.Left:
        desenho("green", x , y , x-movimento, y);
        x = x - movimento;
    break;
}
}

function desenho(cor, xInicial, yInicial, xFinal, yFinal){
papel.beginPath();
papel.strokeStyle = cor;
papel.lineWidth = 3;
papel.moveTo(xInicial, yInicial);
papel.lineTo(xFinal, yFinal);
papel.stroke();
papel.closePath();
}