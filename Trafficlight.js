let redElement=document.getElementById("redchange");
let yellowElement=document.getElementById("yellowchange");
let greenElement=document.getElementById("greenchange");
let stopElement=document.getElementById("stop");
let readyElement=document.getElementById("ready");
let goElement=document.getElementById("go");

function stopbutton(){
    redElement.style.backgroundColor="red";
    yellowElement.style.backgroundColor="#4b5069";
    greenElement.style.backgroundColor="#4b5069";

    stopElement.style.backgroundColor="red";
    readyElement.style.backgroundColor="#1f1d41";
    goElement.style.backgroundColor="#1f1d41";

}


function Readybutton(){
    redElement.style.backgroundColor="#4b5069";
    yellowElement.style.backgroundColor="yellow";
    greenElement.style.backgroundColor="#4b5069";

    stopElement.style.backgroundColor="#1f1d41";
    readyElement.style.backgroundColor="yellow";
    goElement.style.backgroundColor="#1f1d41";

}


function Gobutton(){
    redElement.style.backgroundColor="#4b5069";
    yellowElement.style.backgroundColor="#4b5069";
    greenElement.style.backgroundColor="green";


    
    stopElement.style.backgroundColor="#1f1d41";
    readyElement.style.backgroundColor="#1f1d41";
    goElement.style.backgroundColor="green";


    
    

}