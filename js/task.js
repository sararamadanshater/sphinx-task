
var showAns=document.getElementById("showAns");
var correctAnswer=document.getElementById("correctAnswer");
var replay=document.getElementById("replay");
var resource=document.getElementById("resource");
var help=document.getElementById("help");
var lightBox=document.querySelector(".lightBox");
var helpBox=document.querySelector(".helpBox");
var close1=document.getElementById("close1");
var close2=document.getElementById("close2");
var wrong=document.getElementsByClassName("wrong");
var right=document.getElementsByClassName("right");

showAns.addEventListener("click",showAnswer);
replay.addEventListener("click",replayAnswer);
resource.addEventListener("click",showLightBox);
close1.addEventListener("click",hideLightBox);
help.addEventListener("click",showHelpBox);
close2.addEventListener("click",hideHelpBox);


function changeColor(){
    myBtn.style.backgroundColor="#09c"
    myBtn.style.color="white"

    
}
function showAnswer()
{
    correctAnswer.style.display="flex";
    for(var i=0;i<right.length;i++)
        {
           right[i].style.visibility="hidden";
          
        }
    
     for(var i=0;i<wrong.length;i++)
        {
           wrong[i].style.opacity=.5;
          
        }
    
    
}

function replayAnswer()
{
    correctAnswer.style.display="none";
    for(var i=0;i<right.length;i++)
        {
           right[i].style.visibility="visible";
          
        }
    for(var i=0;i<wrong.length;i++)
        {
           wrong[i].style.opacity=1;
          
        }
}

function showLightBox(e)
{
    lightBox.style.display="flex";
    
    
}

function hideLightBox ()
{
    lightBox.style.display="none";
}

function showHelpBox(e)
{
    helpBox.style.display="flex";
    
    
}

function hideHelpBox ()
{
    helpBox.style.display="none";
}




function timedRefresh() {
    
	
    document.getElementById('loader').style.display = "none";
   
}
setTimeout(timedRefresh,5000);

window.onload = setTimeout(timedRefresh,2000);













