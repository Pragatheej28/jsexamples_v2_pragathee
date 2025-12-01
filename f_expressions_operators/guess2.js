let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

while (userInput  !=='q' ) { // as long as the user doesn't enter 'q' AND 'Q', run the loop
    console.log(userInput);
    if(Number(userInput) === 10 || userInput === "ten"){ // if the user enter the correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if(!userInput){                               // if the user put in an empty string, provide an alert and prompt
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }
    else{                                             // if the user enter a wrong answer, provide and alert and prompt
        alert("Answer incorrect.");
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();                        
    }
}
