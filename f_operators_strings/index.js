<<<<<<< HEAD
// 1. Trim a string 
let wordWithTrim = "   FSD   "
=======
// 1. Trim a string
let wordWithTrim = "   FSD   ";
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (convert a number to a string)
<<<<<<< HEAD
let statusCode = 404;   // Number 
console.log(typeof statusCode.toString());         // Approach 1
console.log(typeof String(statusCode).toString()); // Approach 2

// 3. TypeCast boolean data type to a string
let boolVal = true; // a boolean does not have a toString method
console.log(typeof String(boolVal).toString());

// 4. Splitting a string (index position, number of characters)
let fullName = "John Doe Smith";
let splitName = fullName.split(" "); // what type returned?
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Split a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);   // ["Hello", "World", "JS"]
=======
let statusCode = 404;       // Number
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. TypeCast boolean data type to a string
let boolVal = true; 
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Spilt a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);    // ["Hello", "World", "JS"]
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0);

<<<<<<< HEAD

// 6. Split the string based on today's date and render a custom 
const currDate = Date.now();
const today = new Date(currDate);     // new instance of Date
let splitToday = today.toDateString();    // eee mmm dd yyyy
splitToday = splitToday.split(" ");   // ["Fri", "Nov", "28", "2025"]
=======
// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);       // new instance of Date
let splitToday = today.toDateString();  // eee mmm dd yyyy
splitToday = splitToday.split(" ");     // ["Fri", "Nov", "28", "2025"]    
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

let msg = "";

switch(splitToday[0]){
    case "Mon":
<<<<<<< HEAD
        msg = "Moday Blues";
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        msg = "Work, work!";
        break;
    case "Fri":
        msg = "TGIF";
        break;
    default:
        msg = "Weekend is here"; 
=======
            msg = "Monday Blues";
            break;
    case "Tue":
    case "Wed":
    case "Thu":
            msg = "Work, work!";
            break;
    case "Fri":
            msg = "TGIF";
            break;
    default:
            msg = "Weekend is here";
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

console.log(msg);

<<<<<<< HEAD
// 7. Slicing a String (when working with String Object methods, each character is treated as an array element)
let sentence2 = "Hello World";             // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
let slicedResult = sentence2.slice(0,5);   // slicing based on start index (0) and end index (5-1)
console.log(slicedResult);                 // Output: Hello

let vowels = "aeiou";                     // ['a', 'e', 'i', 'o', 'u']
let slicedVowels = vowels.slice(2);       // using a single +ve value, refer to the number of characters to remove
console.log(slicedVowels);                // Output: last 3 characters (i, o, u)

let vowels2 = "aeiou";                    // ['a', 'e', 'i', 'o', 'u']
let slicedVowels2 = vowels2.slice(-2);    // using a single -ve value, refer to the number of characters returned from the back
console.log(slicedVowels2);               // Output: last 2 characters

// 8. Concatenation
let firstName = "Pragathee";
let lastName = "Jayasanker";

let fullName2 = firstName.concat(" ", lastName);   // the value return does not affect the variable firstName and lastName
console.log(fullName2);

// Arithmetic + operater to concatenate a string
let fullName3 = firstName + " " + lastName;
console.log(fullName3);

// 9. Substring (extracing parts of a string)
let language = "Javascript";
let substr = language.substring(0,4);             // start of index (0), end of index (4-1)
console.log(substr);                              // Output: Java

let language2 = "Java";
let substr2 = language2.substring(1);             // extracts all starting from index position 1
console.log(substr2);                             // Output: ava     


=======
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
