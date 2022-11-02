
let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter valid number!"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Try again.");
    } else {
        guess = prompt("Too low! Try again.");
    }
}

if (guess === 'q') {
    console.log("You are quitting.")
} else {
    console.log(`You got it! It took you ${attempts} guesses!`);
}

