
let str ='JavaScript is amazing!';
let sub = str.slice(-1,-2);
console.log(sub)

//indexOf()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);

// //substr(start, length)
// let str = "OpenAI is innovative!";
// let sub = str.substr(8, 2);

//replace(search, replacement)
let sen= "I love JavaScript. JavaScript is powerful.";
let newSentence = sen.replace("JavaScript", "Node.js");

//concat(string1, string2, …)
let firstName = "John";
let lastName = "Doe";
// let fullName = firstName.concat(" ", lastName);
// let fullName = firstName+""+lastName
// string literals
let fullName=`${firstName} this is my firstname ${lastName}:this is my last name`
console.log(fullName);

let university ="K.R Mangalam";
let program = "BCA AI/DS";
console.log("My name is Sneha and im pursing"+""+program+"from"+university)
console.log(`My name is Sneha and im pursing ${program} from ${university}`)

let arr=[1,2,3]
let arr2=[4,5,6]
let newrray =[...arr,...arr2];
console.log(newrray)

//trim
let sentence = "   This is a sentence with spaces.   ";
let trimmed = sentence.trim();