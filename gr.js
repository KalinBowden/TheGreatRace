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
var count4 = 0;
var isGrowing = true;
var isRotating = false;


function onLoadMain()
{
    var myInt = setInterval(animateHeader, 5);
    document.getElementById("btnSignIn").addEventListener("click", gotoSignIn, false);
    document.getElementById("back").addEventListener("click", gotoHeader, false);
    document.getElementById("btnLogIn").addEventListener("click", gotoChar, false);
    document.getElementById("btnPickChar").addEventListener("click", gotoRace, false);
}   


//goto
function animateHeader()
{
    var header = document.getElementById("head");
    var title = document.getElementById("title");


    var raceBack = document.getElementById("race1");

    if (count4 < 75000)
    {
        raceBack.style.backgroundPositionX = (count4++)/75 + "%";
    }
    else if (count4 >= 75000)
    {
        count4 = -10;
    }
    
    

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


function gotoHeader()
{
    var header = document.getElementById("head");
    var signIn = document.getElementById("signInForm");

    header.style.display = "block";
    signIn.style.display = "none";
}


function gotoSignIn()
{
    var header = document.getElementById("head");
    var signIn = document.getElementById("signInForm");

    header.style.display = "none";
    signIn.style.display = "block";
}

function gotoChar()
{
    var charSelect = document.getElementById("charSelect");
    var signIn = document.getElementById("signInForm");

    charSelect.style.display = "block";
    signIn.style.display = "none";
}


function gotoRace()
{
    var race = document.getElementById("race");
    var charSelect = document.getElementById("charSelect");

    race.style.display = "block";
    charSelect.style.display = "none";
}



window.addEventListener("load", onLoadMain, false);