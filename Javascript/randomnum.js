let it = 0;
let min = 0;
let max = 0;

function makenum() {
    while (true) {
        
        while (true) {
            min = prompt("Please type in a minimum value");
            if (min === null) {
                document.getElementById("text").textContent = "Process canceled!";
                return;  
            }
            min = parseInt(min);
            if (!Number.isInteger(min)) {
                document.getElementById("text").textContent = "Type an integer";
                continue;
            } else {
                break;  
            }
        }

        
        while (true) {
            max = prompt("Please type in a maximum value");
            if (max === null) {
                document.getElementById("text").textContent = "Process canceled!";
                return;  
            }
            max = parseInt(max);
            if (!Number.isInteger(max)) {
                document.getElementById("text").textContent = "Type an integer";
                continue;
            } else {
                break;  
            }
        }

        
        if (min > max) {
            document.getElementById("text").textContent = "Make sure max > min";
            continue; 
        } else {
            break; 
        }
    }

    it = randomnum(min, max);
    console.log(it)
}

function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function guess() {
    while (true) {
        let num = prompt(`Guess a number between ${min} and ${max}`);
        if (num === null) {
            document.getElementById("text").textContent = "You canceled the guessing game.";
            return; 
        }

        num = parseInt(num);
        if (!Number.isInteger(num)) {
            document.getElementById("text").textContent = "Type an integer";
            continue;
        } else if (num < min || num > max) {
            document.getElementById("text").textContent = "Make sure you guess within min and max";
            continue;
        } else {
            if (num === it) {
                document.getElementById("text").textContent = "You got it right :)";
                break; 
            } else if (num < it) {
                document.getElementById("text").textContent = "Higher";
                continue;
            } else if (num > it) {
                document.getElementById("text").textContent = "Lower";
                continue;
            }
        }
    }
}
    

