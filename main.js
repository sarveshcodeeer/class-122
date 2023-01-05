x = "";
y = "" ; 
draw_circle = "" ; 
draw_rect = "" ; 

var SpeechRecognition = window.webkitSpeechRecognition ; 
var recog = new SpeechRecognition() ; 

function start1() {

document.getElementById("status").innerHTML = "system is listening" ; 
recog.start() ; 
}

recog.onresult = function(event){

var content = event.results[0][0].transcript ; 
document.getElementById("status").innerHTML = "system has recognised the shape as " + content ; 

if(content=="circle"){

    x = Math.floor(Math.random()*900) ; 
    y = Math.floor(Math.random()*600) ; 
    draw_circle = "set" ; 
    }

    if(content=="rectangle"){

        x = Math.floor(Math.random()*900) ; 
        y = Math.floor(Math.random()*600) ; 
        draw_rect = "set" ; 
        }

}
    function draw() {

if(draw_circle=="set"){

radius = Math.floor(Math.random()*100) ;
circle(x , y , radius)
document.getElementById("status").innerHTML = "the circle has been drawn" ; 
draw_circle = "" ;
}

if(draw_rect=="set"){

    radius = Math.floor(Math.random()*100) ;
    rect(x , y , 75 , 50) ; 
    document.getElementById("status").innerHTML = "the rectangle has been drawn" ; 
    draw_rect = "" ; 
    }

    }  

    function setup() {
createCanvas(900 , 600) 

    }