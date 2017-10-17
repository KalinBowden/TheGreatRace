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
var randomImages = ['images/random0.gif', 'images/random1.gif', 'images/random2.gif', 'images/random3.gif', 'images/random4.gif', 'images/random5.gif'];
var isPegasus = [true, true, true, false, false, false, true];

// Counters
var counts = [0, 20, 0, 0, 0, 0, 0, 0, 0, 0];
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
var finishLine;
var go;

// Other game elements
var background0;
var background1;
var gameOverScreen;
var winningImg;
var winningName;

// TODO
var temp = 1;
var temp1 = 0;



// Run this when the pages loads
function onLoadMain() 
{
    // Set Interval
    var myInt = setInterval(animateHeader, 5);
    var rand = document.getElementById("rand");
    racer0 = document.getElementById("racer0");
    racer1 = document.getElementById("racer1");
    background0 = document.getElementById("race1");
    background1 = document.getElementById("race2");
    winningImg = document.getElementById("winningImg");
    gameOverScreen = document.getElementById('endingScreen');
    winningName = document.getElementById('winningName');
    finishLine = document.getElementById("finish");
    go = document.getElementById('go');

    go.src = 'images/photoFinish1.png';
    // Add listners to page
    document.getElementById("btnSignIn").addEventListener("click", gotoSignIn, false);
    document.getElementById("btnPickChar").addEventListener("click", gotoRace, false);

    // Set a random background race
    rand.src = randomImages[Math.floor(Math.random() * 6)];
}


// Run this function every 5 miliseconds
function animateHeader() 
{
    // Grab the all elemets that will be used by this function
    var header = document.getElementById("head");
    var title = document.getElementById("title");
    var leftArrow = document.getElementById("charArrowLeft");
    var rightArrow = document.getElementById("charArrowRight");
    


    //onGameEnd();
    animateHeader0(header);
    racePonies();
    

    // Change the color of the arrows
    if (counts[6] < 256) 
    {
        counts[6]++;
    } 
    else 
    {
        counts[6] = 0;
    }

    // Change the color of the arrows
    if (counts[8] > 0) {
        counts[8]++;
    } else {
        counts[8] = 255;
    }

    // Change the color of the arrows
    leftArrow.style.color = 'rgb(' + counts[6] + ',' + counts[7] + ',' + counts[8] + ')';
    rightArrow.style.color = 'rgb(' + counts[6] + ',' + counts[7] + ',' + counts[8] + ')';


    // determin winner
    if ((raceCompelted0 > 1435 || raceCompelted1 > 1435) && !raceOver) 
    {
        raceOver = !raceOver;

        if (raceCompelted0 >= raceCompelted1 && isPegasus[currentIndex])
        {
            winningImg.src = ponysWinning[currentIndex];
            winningName.innerHTML = names[currentIndex];
        }
        else if (raceCompelted0 >= raceCompelted1 && !isPegasus[currentIndex])
        {
            winningImg.src = ponysWinning[opponetPony];
            winningName.innerHTML = names[opponetPony];
        }
        else if (raceCompelted1 >= raceCompelted0 && !isPegasus[currentIndex])
        {
            winningImg.src = ponysWinning[currentIndex];
            winningName.innerHTML = names[currentIndex];
        }
        else if (raceCompelted1 >= raceCompelted0 && isPegasus[currentIndex])
        {
            winningImg.src = ponysWinning[opponetPony];
            winningName.innerHTML = names[opponetPony];
        }
    }

    if (raceOver && !endSquence) 
    {
        toggleRace();
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

    header.style.display = "none";
    race.style.display = "block";
    background0.style.display = "block";
    background1.style.display = "block";
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
    isRacing = !isRacing;

    if (isRacing) 
    {
        go.style.background = 'radial-gradient(greenyellow,green)';
        go.src = 'images/photoFinish.png';
    } 
    else 
    {
        go.style.background = 'radial-gradient(lightcoral,red)';
        go.src = 'images/photoFinish1.png';
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
        currentIndex++;
    }

    // Display the new pony and title
    char.src = ponysSelect[currentIndex];
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
    opponetPony = currentIndex;

    // If user selects a pegesus pick an non pegesus
    if (isPegasus[currentIndex]) 
    {
        while (isPegasus[opponetPony]) 
        {
            opponetPony = Math.floor(Math.random() * 7);
        }

        // Set pegasus to sky
        racer0.src = ponysRacing[currentIndex];
        racer1.src = ponysRacing[opponetPony];
    } 
    else 
    {
        while (!isPegasus[opponetPony]) 
        {
            opponetPony = Math.floor(Math.random() * 7);
        }

        // Set pegasus to sky
        racer0.src = ponysRacing[opponetPony];
        racer1.src = ponysRacing[currentIndex];
    }
}


// When a pony wins run this code
function onGameEnd()
{
    // increment
    temp -= .00075;


    // if temp is greater than 0 blacken the race screen
    if (temp > 0)
    {
        background0.style.opacity = temp ;
        background1.style.opacity = temp ;
    }


    // when temp reaches 0 lighten the end screen
    if (temp <= 0 && temp1 <= 1)
    {
        temp1 += .00075;
        background0.style.display = 'none';
        background1.style.display = 'none';
        gameOverScreen.style.display = 'block';
        gameOverScreen.style.opacity = temp1;
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
        isGrowing = false;
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

function racePonies()
{
    // If the ponies are racing make them run randomly
    if (isRacing) 
    {
        // Every 6th iteration randomly incrase the run distance 
        if (counts[4] % 6 === 0) 
        {
            // Move the backgrounds
            background0.style.backgroundPositionX = (counts[4]) / 15 + "%";
            background1.style.backgroundPositionX = (counts[4]) / 50 * -1 + "%";

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



// When the user clicks the img reset the game
function onGameReset()
{
    // Goto game
    background0.style.display = 'block';
    background1.style.display = 'block';
    gameOverScreen.style.display = 'none';

    // Reset opacity
    background0.style.opacity = 1;
    background1.style.opacity = 1;
    gameOverScreen.style.opacity = 0;
    finishLine.style.opacity = 0;
    counts[5] = 0;

    // Reset Racers
    racer0.style.left = 0;
    racer1.style.left = 0;
    raceCompelted0 = 0;
    raceCompelted1 = 0;
    raceOver = !raceOver;
    endSquence = !endSquence;
    temp = 1;
    temp1 = 0;

    //
    winningImg.src = '';
}

// On load event listner
window.addEventListener("load", onLoadMain, false);