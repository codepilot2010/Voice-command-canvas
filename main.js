var x=0;
var y=0;

var drawcircle="";
var drawrectangle="";
var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start()
{
    document.getElementById("status").innerHTML="system is listening, please speak";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="the speech has been recogonised as : "+content;
    if(content=="circle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle";
        drawcircle="set"
    }
    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing rectangle";
        drawrectangle="set"
    }
}
function setup()
{
    canvas=createCanvas(900,600);
}
function draw()
{
    if(drawcircle=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        drawcircle="";
    }
    if(drawrectangle=="set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        drawrectangle="";
    }
}

