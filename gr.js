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
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var isGrowing = true;
var isRotating = false;
var isRacing = false;
var raceCompelted0 = 25;
var raceCompelted1 = 25;
var currentIndex = 0;
var racers = 2;



function onLoadMain()
{
    var myInt = setInterval(animateHeader, 5);
    document.getElementById("btnSignIn").addEventListener("click", gotoSignIn, false);
    document.getElementById("back").addEventListener("click", gotoHeader, false);
    document.getElementById("btnLogIn").addEventListener("click", gotoChar, false);
    document.getElementById("btnPickChar").addEventListener("click", gotoRace, false);

    var racer0 = document.getElementById("test0");
    var racer1 = document.getElementById("test1");
    var rand = document.getElementById("rand");
    racer0.src = "images/racer" + Math.floor(Math.random()*7) +".gif";
    racer1.src = "images/racer" + Math.floor(Math.random()*7) +".gif";
    rand.src = "images/random" + Math.floor(Math.random()*9) +".gif";

    console.log(Math.floor(Math.random()*6));
}   


//goto
function animateHeader()
{
    var header = document.getElementById("head");
    var title = document.getElementById("title");
    var leftArrow = document.getElementById("charArrowLeft");
    var rightArrow = document.getElementById("charArrowRight");


    var raceBack = document.getElementById("race1");
    var raceBack1 = document.getElementById("race2");
    var racer0 = document.getElementById("test0");
    var racer1 = document.getElementById("test1");
    var finishLine = document.getElementById("finish");


    if (isRacing)
    {
        if (count4 < 75000 && count4 % 6 === 0 )
        {
            raceBack.style.backgroundPositionX = (count4)/15 + "%";
            raceBack1.style.backgroundPositionX = (count4)/50*-1 + "%";
            
            raceCompelted0 += Math.ceil(Math.random()*5);
            racer0.style.left = (raceCompelted0) + "px";
            raceCompelted1 += Math.ceil(Math.random()*5);
            racer1.style.left = (raceCompelted1) + "px";

            console.log('Racer 0: ' + racer0.style.left.toString());
            console.log('Racer 1: ' + racer1.style.left.toString());
            
        }
        else if (count4 >= 75000)
        {
            count4 = 0;
        }

        if (raceCompelted0 > 1100 || raceCompelted1 > 1100)
        {
            count5 += .001;
            finishLine.style.opacity = count5;
        }
        count4++;
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
    if (count6 < 256)
    {
        count6++;
    }
    else
    {
        count6 = 0;
    }

    //
    

    //
    if (count8 > 0)
    {
        count8++;
    }
    else
    {
        count8 = 255;
    }

    leftArrow.style.color = 'rgb('+ count6 +','+ count7 +','+ count8 +')';
    rightArrow.style.color = 'rgb('+ count6 +','+ count7 +','+ count8 +')';



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
    var race = document.getElementById("race");
    var race1 = document.getElementById("race1");

    header.style.display = "none";
    race.style.display = "block";
    race1.style.display = "block";
    race2.style.display = "block";
    
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

function toggleRace()
{
    var light = document.getElementById("go");
    isRacing = !isRacing;

    if (isRacing)
    {
        light.style.background = 'radial-gradient(greenyellow,green)';
    }
    else
    {
        light.style.background = 'radial-gradient(lightcoral,red)'
    }
}


function navRight()
{
    var char = document.getElementById("char0");

    if(currentIndex === 6)
    {
        currentIndex = 0;
    }
    else
    {
        currentIndex++
    }


    char.src = 'images/racer' + currentIndex + '.gif';
}

function navLeft()
{
    var char = document.getElementById("char0");

    if(currentIndex === 0)
    {
        currentIndex = 6;
    }
    else
    {
        currentIndex--
    }

    char.src = 'images/racer' + currentIndex + '.gif';
}

window.addEventListener("load", onLoadMain, false);