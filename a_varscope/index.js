// 1. Primitive Data type

let pi = 3.142; // Variable with a number of 3.142
console.log(typeof pi);

let strValue = "Hello"; // Variable (camelCase naming convention) with a value of "Hello"
console.log(typeof strValue);

let boolValue = true; // Variable string a boolean of true
console.log(typeof boolValue);

let nullValue = null;
console.log(typeof nullValue); // Variable of null value

let undefinedValue; // Variable that is declared BUT uninitialised
console.log(typeof undefinedValue) 

// 2. Non-primitve Types

let arr = ["a", "b", "c"];  // An array 3 elements, starting index: 0, 1, 2
console.log(arr);

let faang = new Array(); // Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook";   // Storing the value of "Facebook" to index[0] of the array
faang[1] = "Amazon";     // Store the value of "Amazon" to index position 1 of the array
console.log(faang);

console.log(faang[0]);  // Accessing the value from index position 0 from array: faang
console.log(faang[1]);  // Accessing the value from index position 1 from array: faang

let person = {name: "Sam", age: 42}; // Create a Javascript Onject with 2 key values pairs {name, age}
console.log(`Name, ${person.name}`);
console.log(`Age, ${person.age}`);

let vehicle = new Object();  // Declaring a new INSTANCE called vehicle
vehicle.name = "Suzuki";     // Giving the vehicle a PROPERTY called "name" and assigning it a value: "Suzuki"
vehicle.model = "Swift";     // Giving the vehicle a PROPERTY called "model" and assigning it a value: "Swift" 
vehicle.color = "Blue";      // ? what other related properties can be associated with the vehicle object

let announce = function(){console.log("Hello JS");}; // Declaring a new object "announce()" as a function
announce(); // Invoke and execute the new object "announce()"

let announce2 = () => { console.log("Hello JS again."); } // Declaring a new object "announce2" as an ARROW function
announce2(); // Invoke and execute the arrow function "announce2()"

// 3. Declaring variables using let, const and var
// Constant Variables
const PI = 3.14159; // Declare a mutable variable called PI
// PI = 3.142; // Update  PI's value because it is mutable
console.log(PI);

// let keyword
function greet(){
    let greeting = "Welcome FSD learmers"; // variabl let is locally scoped
    console.log(greeting);
}

// console.log(greeting); // ? is the variable greeting accessible here?

// var keyword (NOT advisable to use)
var localMsg = "Welcome FSD Developers"; // I have localMsg here.


function welcome(){
    var localMsg = "Welcome to Full Stack Development"; // I also have localMsg here.
    console.log(localMsg);
}

console.log(localMsg);  // Naturally the compile uses localMsg from line 61

// 4. Type Casting

// Converting values to numbers using the Number object
console.log(Number(3.142)); // 3.142
console.log(Number(Math.PI)); // 3.141592653589793
console.log(Number("    ")); // 0
console.log(Number("")); // 0 
console.log(Number("88 88")); // NaN (not a number)
console.log(Number("Steve")); // NaN (not a number)

// Converting values to strings using the String object
console.log(new Date()); // Unformatted of today's date and time
console.log(String(new Date())); // Todays's date and time
console.log(String("98765")); // "98765"
console.log(String(98765)); // "98765"

// Converting values into boolean 
console.log(Boolean("1")); // true  (truthy response)
console.log(Boolean(1));   // true
console.log(Boolean("0"));    // true (truthy response)
console.log(Boolean(0));    // false
console.log(Boolean(" "));    // true (truthy response)
console.log(Boolean(""));    // false (falsy response)
console.log(Boolean("John"));    // true

// let's try abit of a trivia using a prompt in the web browser
// try the THREE scenarios:
// 1. Use "  " in the prompt                // false
// 2. Use "James" in the prompt             // true
// 3. Use "" (an empty string) in the prompt // false
function greetUser(){
    let userName = prompt("Please enter your name:");
    
    if(userName.trim()){    // "  " will be trimmed, guard rail to prevent spaces being used
        alert(`Welcome to FSD ${userName}!!!`);
    }else{
        alert("We did not receive your name.");
    }
}
 
greetUser();
