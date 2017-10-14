/*
Dev     Kalin Bowden
Date:   
*/

// Class level variables
// Pony object arrays
var names = ['Rainbow Dash', 'Flutter Shy', 'Derpy Whooves', 'Pinkie Pie', 'Scootaloo', 'Sweetie Belle', 'Twilight Sparkle'];
var ponysSelect = ['images/select0.gif', 'images/select1.gif', 'images/select2.gif', 'images/select3.gif', 'images/select4.gif', 'images/select5.gif', 'images/select6.gif'];
var ponysRacing = ['images/racer0.gif', 'images/racer1.gif', 'images/racer2.gif', 'images/racer3.png', 'images/racer4.gif', 'images/racer5.gif', 'images/racer6.gif'];
var ponysWinning = ['images/win0.gif', 'images/win1.gif', 'images/win2.gif', 'images/win3.gif', 'images/win4.gif', 'images/win5.gif', 'images/win6.gif'];
var randomImages = ['images/random0.gif', 'images/random1.gif', 'images/random2.gif', 'images/random3.gif', 'images/random4.gif', 'images/random5.gif', 'images/random6.gif', 'images/random7.gif', 'images/random8.gif', 'images/random0.gif9', ]
var isPegasus = [true, true, true, false, false, false, true];

// Counters
var counts = [0, 20, 0, 0, 0, 0, 0, 0, 0, 0,];
var count6 = 0;
var count7 = 0;
var count8 = 0;

// Booleans
var endSquence = false;
var isGrowing = true;
var isRotating = false;
var isRacing = false;

// Raceing variables
var raceCompelted0 = 25;
var raceCompelted1 = 25;
var currentIndex = 0;
var racers = 2;
var raceOver = false;
var racer0;
var racer1;
var winner;
var opponetPony;


var temp = 1;
var temp1 = 0;


// Run this when the pages loads
function onLoadMain() 
{
    // Set Interval
    var myInt = setInterval(animateHeader, 5);
    var rand = document.getElementById("rand");

    // Add listners to page
    document.getElementById("btnSignIn").addEventListener("click", gotoSignIn, false);
    document.getElementById("btnLogIn").addEventListener("click", gotoChar, false);
    document.getElementById("btnPickChar").addEventListener("click", gotoRace, false);

    // Set a random background race
    rand.src = randomImages[Math.floor(Math.random() * 9)];
}


// Run this function every 5 miliseconds
function animateHeader() 
{
    // Grab the all elemets that will be used by this function
    var header = document.getElementById("head");
    var title = document.getElementById("title");
    var leftArrow = document.getElementById("charArrowLeft");
    var rightArrow = document.getElementById("charArrowRight");
    var raceBackground0 = document.getElementById("race1");
    var raceBackground1 = document.getElementById("race2");
    var racer0 = document.getElementById("test0");
    var racer1 = document.getElementById("test1");
    var finishLine = document.getElementById("finish");
    var winnerIcon = document.getElementById("winningImg");
    var winningName = document.getElementById('winningName');
    var winner;


    //onGameEnd();
    animateHeader0(header);
    racePonies(raceBackground0, raceBackground1, racer0, racer1, finishLine);
    

    // Change the color of the arrows
    if (count6 < 256) 
    {
        count6++;
    } 
    else 
    {
        count6 = 0;
    }

    // Change the color of the arrows
    if (count8 > 0) {
        count8++;
    } else {
        count8 = 255;
    }

    // Change the color of the arrows
    leftArrow.style.color = 'rgb(' + count6 + ',' + count7 + ',' + count8 + ')';
    rightArrow.style.color = 'rgb(' + count6 + ',' + count7 + ',' + count8 + ')';


    //
    if ((raceCompelted0 > 1435 || raceCompelted1 > 1435) && !raceOver) 
    {
        raceOver = !raceOver;

        if (raceCompelted0 >= raceCompelted1 && isPegasus[currentIndex])
        {
            winnerIcon.src = ponysWinning[currentIndex];
            winningName.innerHTML = names[currentIndex];
        }
        else if (raceCompelted0 >= raceCompelted1 && !isPegasus[currentIndex])
        {
            winnerIcon.src = ponysWinning[opponetPony];
            winningName.innerHTML = names[opponetPony];
        }
        else if (raceCompelted1 >= raceCompelted0 && !isPegasus[currentIndex])
        {
            winnerIcon.src = ponysWinning[currentIndex];
            winningName.innerHTML = names[currentIndex];
        }
        else if (raceCompelted1 >= raceCompelted0 && isPegasus[currentIndex])
        {
            winnerIcon.src = ponysWinning[opponetPony];
            winningName.innerHTML = names[opponetPony];
        }
    }

    if (raceOver && !endSquence) 
    {
        toggleRace();
        setEndScreen();
        endSquence = !endSquence;
    }

    if (raceOver)
    {
        onGameEnd();
    }
}



// Go to the race TODO
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



// TODO
function gotoChar() 
{
    var charSelect = document.getElementById("charSelect");
    var signIn = document.getElementById("signInForm");

    charSelect.style.display = "block";
    signIn.style.display = "none";
}



// TODO
function gotoRace() 
{
    var race = document.getElementById("race");
    var charSelect = document.getElementById("charSelect");

    race.style.display = "block";
    charSelect.style.display = "none";
}

// Toggle togle the race and light on and off
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



// Allow the player to select a pony to race
function grabRacer() 
{
    // Function level variables
    var raceImg0 = document.getElementById("test0");
    var raceImg1 = document.getElementById("test1");
    opponetPony = currentIndex;

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


// When a pony wins run this code
function onGameEnd()
{
    // Function level variables
    var gameScreen0 = document.getElementById('race1');
    var gameScreen1 = document.getElementById('race2');
    var endScreen = document.getElementById('endingScreen');
    var race1 = document.getElementById('race1');
    var race2 = document.getElementById('race2');
    temp -= .00075;

    if (temp > 0)
    {
        gameScreen0.style.opacity = temp ;
        gameScreen1.style.opacity = temp ;
    }


    if (temp <= 0 && temp1 <= 1)
    {
        temp1 += .00075;
        race1.style.display = 'none';
        race2.style.display = 'none';
        endScreen.style.display = 'block';
        endScreen.style.opacity = temp1;
    }
}



// Contains and controls the header logic
function animateHeader0(header)
{
    // Spin the bacgorund
    if (counts[0] < 360) 
    {
        header.style.background = "linear-gradient(-" + counts[0] + "deg, purple, orangered)";
        counts[0] += 2;
    } 
    else if (counts[0] >= 360) 
    {
        counts[0] = 0;
        header.style.background = "linear-gradient(-" + counts[0] + "deg, purple, orangered)";
    }


    // Grow the title text
    if (counts[1] < 21 && isGrowing) 
    {
        counts[1] += .015;
        title.style.fontSize = counts[1] + "em";
    }

    // Make the title text shirnk;
    if (counts[1] > 21 && isGrowing) 
    {
        isGrowing = false
    }

    // Shrink the title text
    if (counts[1] > 19 && !isGrowing) 
    {
        counts[1] -= .015;
        title.style.fontSize = counts[1] + "em"
    }

    //  Make the title text grow
    if (counts[1] < 19 && !isGrowing)
    {
        isGrowing = true;
    }


    // Make the title test spin
    if (counts[2] < 1500) 
    {
        counts[2] += 1;
    } 
    else if (counts[2] >= 1500) 
    {
        if (counts[3] < 360) 
        {
            counts[3] += 1;
            title.style.transform = "rotate(" + -counts[3] + "deg)";

        } 
        else if (counts[3] >= 360) 
        {
            counts[3] = 0;
            counts[2] = 0;
        }

    }
}

function racePonies(raceBackground0, raceBackground1, racer0, racer1, finishLine)
{
        // If the ponies are racing make them run randomly
        if (isRacing) 
        {
            // Every 6th iteration randomly incrase the run distance 
            if (counts[4] % 6 === 0) 
            {
                // Move the backgrounds
                raceBackground0.style.backgroundPositionX = (counts[4]) / 15 + "%";
                raceBackground1.style.backgroundPositionX = (counts[4]) / 50 * -1 + "%";
    
                // Incremnt the raced distance
                raceCompelted0 += Math.ceil(Math.random() * 5);
                racer0.style.left = (raceCompelted0) + "px";
                raceCompelted1 += Math.ceil(Math.random() * 5);
                racer1.style.left = (raceCompelted1) + "px";
            } 
    
            // As the ponies get closer to the finish line start
            // to show the finsh line
            if (raceCompelted0 > 1100 || raceCompelted1 > 1100) 
            {
                counts[5] += .001;
                finishLine.style.opacity = counts[5];
            }
    
            counts[4]++;
        }
}

function setEndScreen()
{
    
}

window.addEventListener("load", onLoadMain, false);