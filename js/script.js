// ========================================
// PASSWORD / LOCK SCREEN
// ========================================

const lockScreen = document.getElementById("lockScreen");
const siteContent = document.getElementById("siteContent");

const passcodeInput = document.getElementById("passcodeInput");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");

const welcomeScreen = document.getElementById("welcomeScreen");

const backgroundMusic = document.getElementById("backgroundMusic");

const correctPasscode = "ilovekenai123";


function unlockSite() {

    if (passcodeInput.value === correctPasscode) {

        // Start music after correct password
        backgroundMusic.play();

        // Hide password screen
        lockScreen.classList.add("hidden");

        // Show welcome screen
        welcomeScreen.classList.remove("hidden");


        // Wait 2 seconds before showing main website
        setTimeout(function() {

            welcomeScreen.classList.add("hidden");

            siteContent.classList.remove("hidden");

        }, 2000);

    } else {

        // Wrong password
        errorMessage.classList.remove("hidden");

    }
}


// Unlock button
unlockButton.addEventListener("click", function() {

    unlockSite();

});


// Pressing Enter also unlocks
passcodeInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        unlockSite();

    }

});


// Hide error once she starts typing again
passcodeInput.addEventListener("input", function() {

    errorMessage.classList.add("hidden");

});



// ========================================
// MAIN WEBSITE ELEMENTS
// ========================================

const revealButton = document.getElementById("revealButton");
const hiddenMessage = document.getElementById("hiddenMessage");

const yesButton = document.getElementById("yesButton");
const notYetButton = document.getElementById("notYetButton");

const yesMessage = document.getElementById("yesMessage");
const funnyMessage = document.getElementById("funnyMessage");



// ========================================
// SECRET POEM ELEMENTS
// ========================================

const mainCard = document.getElementById("mainCard");

const secretHeart = document.getElementById("secretHeart");

const poemPage = document.getElementById("poemPage");

const backFromPoem = document.getElementById("backFromPoem");



// ========================================
// DATE RESPONSE FUNCTIONS
// ========================================

function hideResults() {

    yesMessage.classList.add("hidden");
    funnyMessage.classList.add("hidden");

    yesMessage.classList.remove("show-animation");
    funnyMessage.classList.remove("show-animation");

}


function showMessage(messageToShow) {

    hideResults();

    messageToShow.classList.remove("hidden");

    setTimeout(function() {

        messageToShow.classList.add("show-animation");

    }, 10);

}



// ========================================
// REVEAL DATE QUESTION
// ========================================

revealButton.addEventListener("click", function() {

    hiddenMessage.classList.toggle("hidden");


    if (hiddenMessage.classList.contains("hidden")) {

        revealButton.textContent = "Click Me ♥️";

        hideResults();

    } else {

        revealButton.textContent = "Hide Message";

    }

});



// ========================================
// DATE ANSWER BUTTONS
// ========================================

yesButton.addEventListener("click", function() {

    showMessage(yesMessage);

});


notYetButton.addEventListener("click", function() {

    showMessage(funnyMessage);

});



// ========================================
// SECRET POEM
// ========================================

secretHeart.addEventListener("click", function() {

    // Hide normal website
    mainCard.classList.add("hidden");

    // Show secret poem
    poemPage.classList.remove("hidden");


    // Move back to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



// ========================================
// RETURN FROM SECRET POEM
// ========================================

backFromPoem.addEventListener("click", function() {

    // Hide poem
    poemPage.classList.add("hidden");

    // Show normal website
    mainCard.classList.remove("hidden");


    // Move back to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ========================================
// CANCUN COUNTDOWN
// ========================================

// February 13, 2027 at midnight in Cancun
// Cancun uses UTC-5 year-round.
const cancunDate = new Date("2027-02-13T05:43:00-08:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownFinished = document.getElementById("countdownFinished");

function updateCountdown() {

    const now = new Date().getTime();

    const difference = cancunDate - now;

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdownFinished.classList.remove("hidden");

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Update immediately when the page loads
updateCountdown();

// Keep updating every second
setInterval(updateCountdown, 1000);
