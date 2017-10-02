/*
Dev     Kalin Bowden
Date:   
*/

// Class level variables
var formValidates = true;
var count0 = 0;
var count1 = 20;
var count2 = 0;
var count3 = 0;
var isGrowing = true;
var isRotating = false;


function onLoadMain()
{
    var myInt = setInterval(animateHeader, 5);
}

// 
function validateForm(e) 
{
    e.preventDefault();

    //
    if (formValidates)
    {
        document.getElementById("errorMsg").innerHTML = "";
        document.getElementById("errorMsg").style.display = "none";
        alert("Form Submitted");
    }
    else
    {
        document.getElementById("errorMsg").innerHTML = "Hmmmm... looks like there was a problem with on of the fields. Better try again.";
        document.getElementById("errorMsg").style.display = "block";
        scroll(0,0);
        alert("Form did not Submit");
    }

    formValidates = true;
}


//
function animateHeader()
{
    var header = document.getElementById("head");
    var title = document.getElementById("title");
    

    if (count0 < 360)
    {
        header.style.background = "linear-gradient(-" + count0 + "deg, purple, orangered)";
        count0 += 2;
    }
    else if (count0 >= 360)
    {
        count0 = 0;
        header.style.background = "linear-gradient(-" + count0 + "deg, purple, orangered)";
    }

    //
    if (count1 < 21 && isGrowing)
    {
        count1 += .015;
        title.style.fontSize = count1 + "em"
    }
    
    if (count1 > 21 && isGrowing)
    {
        isGrowing = false
    }

    if ( count1 > 19 && !isGrowing)
    {
        count1 -= .015;
        title.style.fontSize = count1 + "em"
    }


    if ( count1 < 19 && !isGrowing)
    {
        isGrowing = true;
    }

    if (count2 < 1500)
    {
        count2 += 1;
    }
    else if (count2 >= 1500)
    {
        if (count3 < 360)
        {
            count3 += 1;
            title.style.transform = "rotate(" + -count3 + "deg)";
            
        }
        else if(count3 >= 360)
        {
            count3 = 0;
            count2 = 0;
        }
        
    }


    

}


window.addEventListener("load", onLoadMain, false);