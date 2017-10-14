/*
Dev     Kalin Bowden
Date:   
*/

// Class level variables
var formValidates = true;
var pony = ['0', '1', '2', '3', '4', '5', '6'];
var names = ['Rainbow Dash', 'Flutter Shy', 'Derpy Whooves', 'Pinkie Pie', 'Scootaloo', 'Sweetie Belle', 'Twilight Sparkle'];
var ponysSelect = ['images/select0.gif', 'images/select1.gif', 'images/select2.gif', 'images/select3.gif', 'images/select4.gif', 'images/select5.gif', 'images/select6.gif'];
var ponysRacing = ['images/racer0.gif', 'images/racer1.gif', 'images/racer2.gif', 'images/racer3.png', 'images/racer4.gif', 'images/racer5.gif', 'images/racer6.gif'];
var ponysWinning = ['images/racer0.gif', 'images/racer1.gif', 'images/racer2.gif', 'images/racer3.gif', 'images/racer4.gif', 'images/racer5.gif', 'images/racer6.gif'];
var isPegasus = [true, true, true, false, false, false, true];
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
var raceOver = false;
var racer0;
var racer1;
var temp = 100;



function onLoadMain() 
{
    // Set Interval
    var myInt = setInterval(animateHeader, 5);

    // Add listners to page
    document.getElementById("btnSignIn").addEventListener("click", gotoSignIn, false);
    document.getElementById("back").addEventListener("click", gotoHeader, false);
    document.getElementById("btnLogIn").addEventListener("click", gotoChar, false);
    document.getElementById("btnPickChar").addEventListener("click", gotoRace, false);

    // TODO
    var rand = document.getElementById("rand");
    rand.src = "images/random" + Math.floor(Math.random() * 9) + ".gif";
}


function createPony(name, select, race, win, peg, index) {
    var tempPony = [name, select, race, win, peg];
    pony[index] = tempPony;
}


//goto
function animateHeader() {
    var header = document.getElementById("head");
    var title = document.getElementById("title");
    var leftArrow = document.getElementById("charArrowLeft");
    var rightArrow = document.getElementById("charArrowRight");


    var raceBack = document.getElementById("race1");
    var raceBack1 = document.getElementById("race2");
    var racer0 = document.getElementById("test0");
    var racer1 = document.getElementById("test1");
    var finishLine = document.getElementById("finish");
    var winnerIcon = document.getElementById("winningImg");
    var winner;


    onGameEnd();
    


    if (isRacing) 
    {
        if (count4 < 75000 && count4 % 6 === 0) 
        {
            raceBack.style.backgroundPositionX = (count4) / 15 + "%";
            raceBack1.style.backgroundPositionX = (count4) / 50 * -1 + "%";

            raceCompelted0 += Math.ceil(Math.random() * 5);
            racer0.style.left = (raceCompelted0) + "px";
            raceCompelted1 += Math.ceil(Math.random() * 5);
            racer1.style.left = (raceCompelted1) + "px";
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

    if (count0 < 360) {
        header.style.background = "linear-gradient(-" + count0 + "deg, purple, orangered)";
        count0 += 2;
    } else if (count0 >= 360) {
        count0 = 0;
        header.style.background = "linear-gradient(-" + count0 + "deg, purple, orangered)";
    }

    //
    if (count6 < 256) {
        count6++;
    } else {
        count6 = 0;
    }

    //


    //
    if (count8 > 0) {
        count8++;
    } else {
        count8 = 255;
    }

    leftArrow.style.color = 'rgb(' + count6 + ',' + count7 + ',' + count8 + ')';
    rightArrow.style.color = 'rgb(' + count6 + ',' + count7 + ',' + count8 + ')';



    //
    if (count1 < 21 && isGrowing) {
        count1 += .015;
        title.style.fontSize = count1 + "em"
    }

    if (count1 > 21 && isGrowing) {
        isGrowing = false
    }

    if (count1 > 19 && !isGrowing) {
        count1 -= .015;
        title.style.fontSize = count1 + "em"
    }


    if (count1 < 19 && !isGrowing) {
        isGrowing = true;
    }

    if (count2 < 1500) {
        count2 += 1;
    } else if (count2 >= 1500) {
        if (count3 < 360) {
            count3 += 1;
            title.style.transform = "rotate(" + -count3 + "deg)";

        } else if (count3 >= 360) {
            count3 = 0;
            count2 = 0;
        }

    }


    //
    if ((raceCompelted0 > 1635 || raceCompelted1 > 1635) && !raceOver) {
        raceOver = !raceOver;

    }

    if (winner) {
        
    }

}


function gotoHeader() {
    var header = document.getElementById("head");
    var signIn = document.getElementById("signInForm");

    header.style.display = "block";
    signIn.style.display = "none";
}


function gotoSignIn() {
    var header = document.getElementById("head");
    var race = document.getElementById("race");
    var race1 = document.getElementById("race1");

    header.style.display = "none";
    race.style.display = "block";
    race1.style.display = "block";
    race2.style.display = "block";

}

function gotoChar() {
    var charSelect = document.getElementById("charSelect");
    var signIn = document.getElementById("signInForm");

    charSelect.style.display = "block";
    signIn.style.display = "none";
}


function gotoRace() {
    var race = document.getElementById("race");
    var charSelect = document.getElementById("charSelect");

    race.style.display = "block";
    charSelect.style.display = "none";
}

function toggleRace() {
    var light = document.getElementById("go");
    isRacing = !isRacing;

    if (isRacing) {
        light.style.background = 'radial-gradient(greenyellow,green)';
    } else {
        light.style.background = 'radial-gradient(lightcoral,red)'
    }
}

// In the select screen navigate right
function navRight() 
{
    // Function level variables
    var char = document.getElementById("char0");
    var name = document.getElementById("charName");

    // If the current index exceeds the max set index back to 0
    if (currentIndex === 6) {
        currentIndex = 0;
    } else {
        currentIndex++
    }

    // Display the new pony and title
    char.src = ponysSelect[currentIndex];;
    name.innerHTML = names[currentIndex];
}


// In the select screen navigate left
function navLeft() 
{
    // function level variables
    var char = document.getElementById("char0");
    var name = document.getElementById("charName");

    // If the current index exceeds the max set index back to 0
    if (currentIndex === 0) {
        currentIndex = 6;
    } else {
        currentIndex--
    }

    // Display the new pony and title
    char.src = ponysSelect[currentIndex];
    name.innerHTML = names[currentIndex];
}

function grabRacer() 
{
    // Function level variables
    var raceImg0 = document.getElementById("test0");
    var raceImg1 = document.getElementById("test1");
    var opponetPony = currentIndex;

    // If user selects a pegesus pick an non pegesus
    if (isPegasus[currentIndex]) 
    {
        while (isPegasus[opponetPony]) 
        {
            opponetPony = Math.floor(Math.random() * 7);
        }

        // Set pegasus to sky
        raceImg0.src = ponysRacing[currentIndex];
        raceImg1.src = ponysRacing[opponetPony];
    } 
    else 
    {
        while (!isPegasus[opponetPony]) 
        {
            opponetPony = Math.floor(Math.random() * 7);
        }

        // Set pegasus to sky
        raceImg0.src = ponysRacing[opponetPony];
        raceImg1.src = ponysRacing[currentIndex];
    }
}


function onWin()
{

}

function onGameEnd()
{
    // Function level variables
    var gameScreen0 = document.getElementById('race1');
    var gameScreen1 = document.getElementById('race2');
    temp -= 1;

    gameScreen0.style.opacity = temp + '%'; 
    gameScreen1.style.opacity = temp + '%';
}

window.addEventListener("load", onLoadMain, false);