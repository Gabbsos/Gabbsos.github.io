// Game state variables
let tamagotchi = {
    name: "",
    hunger: 100,
    happiness: 100,
    sleep: 100,
    isAlive: true,
    isSleeping: false,
    age: 0, // Age in game cycles
    deathReason: ""
    };

// DOM elements
const tamagotchiEmoji = document.getElementById('tamagotchiEmoji');
const hungerBar = document.getElementById('hungerBar');
const happinessBar = document.getElementById('happinessBar');
const sleepBar = document.getElementById('sleepBar');
const feedButton = document.getElementById('feedButton');
const playButton = document.getElementById('playButton');
const sleepButton = document.getElementById('sleepButton');
const messageBox = document.getElementById('messageBox');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const gameOverMessage = document.getElementById('gameOverMessage');
const resetButton = document.getElementById('resetButton');
/* Save the pet name element as a const */
const petName

let gameInterval;
let messageTimeout;
/* Add variables here */



// Function to clamp a value between a min and max
function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

// Function to display a temporary message
function showMessage(message) {
    messageBox.textContent = message;
    messageBox.classList.add('show');
    clearTimeout(messageTimeout); // Clear any existing timeout
    messageTimeout = setTimeout(() => {
        messageBox.classList.remove('show');
    }, 2000); // Message disappears after 2 seconds
}

// Function to update the visual representation of the Tamagotchi's stats
function updateStatsDisplay() {
    // Update hunger bar
    hungerBar.style.width = `${tamagotchi.hunger}%`;
    if (tamagotchi.hunger > 70) hungerBar.className = 'stat-bar green';
    else if (tamagotchi.hunger > 30) hungerBar.className = 'stat-bar orange';
    else hungerBar.className = 'stat-bar red';

    // Update happiness bar
    happinessBar.style.width = `${tamagotchi.happiness}%`;
    if (tamagotchi.happiness > 70) happinessBar.className = 'stat-bar green';
    else if (tamagotchi.happiness > 30) happinessBar.className = 'stat-bar orange';
    else happinessBar.className = 'stat-bar red';

    // Update sleep bar
    sleepBar.style.width = `${tamagotchi.sleep}%`;
    if (tamagotchi.sleep > 70) sleepBar.className = 'stat-bar green';
    else if (tamagotchi.sleep > 30) sleepBar.className = 'stat-bar orange';
    else sleepBar.className = 'stat-bar red';
}

// Function to update the Tamagotchi's emoji based on its state
function updateTamagotchiEmoji() {
    if (!tamagotchi.isAlive) {
        tamagotchiEmoji.textContent = '👻'; // Ghost emoji for dead
        tamagotchiEmoji.classList.remove('sleeping');
        return;
    }

    if (tamagotchi.isSleeping) {
        tamagotchiEmoji.textContent = '😴'; // Sleeping emoji
        tamagotchiEmoji.classList.add('sleeping');
    } else if (tamagotchi.hunger < 20 || tamagotchi.happiness < 20 || tamagotchi.sleep < 20) {
        tamagotchiEmoji.textContent = '😢'; // Sad/low health emoji
        tamagotchiEmoji.classList.remove('sleeping');
    } else if (tamagotchi.hunger > 80 && tamagotchi.happiness > 80 && tamagotchi.sleep > 80) {
        tamagotchiEmoji.textContent = '🥳'; // Very happy emoji
        tamagotchiEmoji.classList.remove('sleeping');
    }
    else {
        tamagotchiEmoji.textContent = '😊'; // Default happy emoji
        tamagotchiEmoji.classList.remove('sleeping');
    }
}

// Action functions
function feed() {
    if (!tamagotchi.isAlive) {
        showMessage("Your pet is gone...");
        return;
    }
    if (tamagotchi.isSleeping) {
        showMessage("Your pet is sleeping!");
        return;
    }
    tamagotchi.hunger = clamp(tamagotchi.hunger + 20, 0, 100);
    tamagotchi.happiness = clamp(tamagotchi.happiness + 5, 0, 100); // Small happiness boost
    showMessage("Yummy! 😋");
    updateStatsDisplay();
    updateTamagotchiEmoji();
}

function play() {
    if (!tamagotchi.isAlive) {
        showMessage("Your pet is gone...");
        return;
    }
    if (tamagotchi.isSleeping) {
        showMessage("Your pet is sleeping!");
        return;
    }
    tamagotchi.happiness = clamp(tamagotchi.happiness + 25, 0, 100);
    tamagotchi.hunger = clamp(tamagotchi.hunger - 10, 0, 100); // Playing makes it hungry
    showMessage("Whee! 😄");
    updateStatsDisplay();
    updateTamagotchiEmoji();
}

function putToSleep() {
    if (!tamagotchi.isAlive) {
        showMessage("Your pet is gone...");
        return;
    }
    if (tamagotchi.isSleeping) {
        showMessage("Your pet is already asleep!");
        return;
    }
    tamagotchi.isSleeping = true;
    tamagotchi.sleep = clamp(tamagotchi.sleep + 40, 0, 100); // Big sleep boost
    showMessage("Zzzzz... 😴");
    updateTamagotchiEmoji();
    disableButtons(true);

    // Wake up after a certain period (e.g., 5 seconds)
    setTimeout(() => {
        tamagotchi.isSleeping = false;
        showMessage("Good morning! 😊");
        updateTamagotchiEmoji();
        disableButtons(false);
    }, 5000); // Simulates a longer sleep period
}

// Function to disable/enable action buttons
function disableButtons(disabled) {
    feedButton.disabled = disabled;
    playButton.disabled = disabled;
    sleepButton.disabled = disabled;
}

// Game loop: periodically decrements stats and checks for death
function gameLoop() {
    if (!tamagotchi.isAlive) {
        clearInterval(gameInterval); // Stop the game loop if pet is dead
        return;
    }

    // Only decrease stats if not sleeping
    if (!tamagotchi.isSleeping) {
        tamagotchi.happiness = clamp(tamagotchi.happiness - happiness, 0, 100);
        tamagotchi.hunger = clamp(tamagotchi.hunger - hungriness, 0, 100);
        tamagotchi.sleep = clamp(tamagotchi.sleep - sleepiness, 0, 100);
    }
    tamagotchi.age++; // Pet ages with each cycle

    updateStatsDisplay();
    updateTamagotchiEmoji();
    checkHealth();
}

// Check if the Tamagotchi is still alive
function checkHealth() {
    if (tamagotchi.hunger <= 0) {
        tamagotchi.isAlive = false;
        tamagotchi.deathReason = "starvation! 🍔";
    } else if (tamagotchi.happiness <= 0) {
        tamagotchi.isAlive = false;
        tamagotchi.deathReason = "loneliness! 💔";
    } else if (tamagotchi.sleep <= 0) {
        tamagotchi.isAlive = false;
        tamagotchi.deathReason = "exhaustion! 😵";
    }

    if (!tamagotchi.isAlive) {
        clearInterval(gameInterval);
        if(tamagotchi.name !== "") gameOverMessage.textContent = `${tamagotchi.name} passed away from ${tamagotchi.deathReason}`;
        else if (tamagotchi.name == "") gameOverMessage.textContent = `Your pet passed away from ${tamagotchi.deathReason}`;
        gameOverOverlay.classList.add('active');
        disableButtons(true);
    }
}

// Function to reset the game
function resetGame() {
    if(tamagotchi.age == 0)
    {
        tamagotchi = {
            name: petName.value,
            hunger: 100,
            happiness: 100,
            sleep: 100,
            isAlive: true,
            isSleeping: false,
            age: 0,
            deathReason: ""
        };
    }

    gameOverOverlay.classList.remove('active');
    disableButtons(false);
    updateStatsDisplay();
    updateTamagotchiEmoji(); // Reset emoji to initial or 'happy' state
    // Restart the game loop
    clearInterval(gameInterval); // Clear any old interval first
    gameInterval = setInterval(gameLoop, gameSpeed*1000); // Game cycle every 1.5 seconds
    showMessage("A new pet has hatched! 🥚");
}

/* Cookie Save Function */




/* Cookie Get Function */




/* Event Listeners */


        

// Initial setup on window load
window.onload = function() {
    resetGame(); // Initialize the game state and start the loop
};