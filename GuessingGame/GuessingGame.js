<<<<<<< HEAD
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess anumber between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number")

































        

    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low! TRY AGAIN!")
        }
        else if (guess > maxNum) {
            window.alert("Too HiGH! TRY AGAIN!")
        } else {
            window.alert(`CORRECT! the answer was ${answer}. It took you ${attempts} attempts `)
            running = false
        }
    }
}






=======
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess anumber between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number")

    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low! TRY AGAIN!")
        }
        else if (guess > maxNum) {
            window.alert("Too HiGH! TRY AGAIN!")
        } else {
            window.alert(`CORRECT! the answer was ${answer}. It took you ${attempts} attempts `)
            running = false
        }
    }
}






>>>>>>> d4e41b84137924648f4dab2fef31bb094fa55f30
