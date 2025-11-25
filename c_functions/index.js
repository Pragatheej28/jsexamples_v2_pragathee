// 1. Writing a function declaration

function ftnGreeting(salutation, user){
    
    // ? How does one refractor the string (using a interpolated string)
    
    const msg = `Hi, ${salutation} ${user}`;

    return msg;
}
console.log(ftnGreeting("Mr.", "Jones"));

//2. Functio returning a sum of two values
// 2.1 Equip frnAdd to handle non-existent ARGUMENTS (PASSED TO ITS PARAMETERS)
function ftnAdd(a = 0, b = 0){
    const result = a + b;
    return result;
}

const sum = ftnAdd(10, 5);   // ftn will be sent over 2 ARGUMENTS
console.log(sum);            // 15

const anothersum = ftnAdd(); // Passing in ZERO arguments
console.log(anothersum);

// 3.Arrow function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {

    // Handle empty string values
    if(salutation.length == 0 && name.length ==0)  
        return "Please enter your salutation and name"; 
    
    // Otherwise, return the appropriate feedback
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting("Ms.", "Pragathee"));
console.log(anotherftnGreeting()); // No parameters is passed to function anotherftnGreeting