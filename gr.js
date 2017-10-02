/*
Dev     Kalin Bowden
Date:   
*/

// Class level variables
var formValidates = true;
var count0 = 0;
var count1 = 



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

    if()

}


window.addEventListener("load", onLoadMain, false);