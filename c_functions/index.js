// 1. Writing a function declaration
<<<<<<< HEAD

function ftnGreeting(salutation, user){
    
    // ? How does one refractor the string (using a interpolated string)
    
    const msg = `Hi, ${salutation} ${user}`;

    return msg;
}
console.log(ftnGreeting("Mr.", "Jones"));

//2. Functio returning a sum of two values
// 2.1 Equip frnAdd to handle non-existent ARGUMENTS (PASSED TO ITS PARAMETERS)
=======
function ftnGreeting(salutation, user){

    const msg = `Hi, ${salutation} ${user}.`;
    
    return msg; 
}

console.log( ftnGreeting("Mr.", "Jones") );

// 2. Function returning a sum of two values
// 2.1. Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters)
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
function ftnAdd(a = 0, b = 0){
    const result = a + b;
    return result;
}

<<<<<<< HEAD
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
    
=======
const sum = ftnAdd(10, 5);   // ftn will sent over 2 ARGUMENTS
console.log(sum);            // 15

const anothersum = ftnAdd(); // Passing in ZERO ARGUMENTS
console.log(anothersum);

// 3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {

    // Handle empty string values 
    if(salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name.";

>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
    // Otherwise, return the appropriate feedback
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

<<<<<<< HEAD
console.log(anotherftnGreeting("Ms.", "Pragathee"));
console.log(anotherftnGreeting()); // No parameters is passed to function anotherftnGreeting
=======
console.log(anotherftnGreeting("Ms.", "Fareeda"));
console.log(anotherftnGreeting());                  // No parameter is passed to function anotherftnGreeting
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
