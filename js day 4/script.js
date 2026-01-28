//slicing
// let numbers=[1,2,3,4,5];
// let sliced=numbers.slice(1,4);
// console.log(sliced);

//some
let number=[2,4,6,8,10]
let hasEven = number.some(x=>x%2==0);
console.log(hasEven);

//every
let num=[2,4,6,8,10];
let allEven = num.every(x=>x%2==0);
console.log(allEven);

//concat
let fruits1 =["apple,banana"];
let fruits2=["cherry,orange"];
let combined = fruits1.concat(fruits2);

//splice
let fruits=["apple","banana","cherry"];
fruits.splice(1,1,"orange",'grape');

//reverse
let no = [1, 2, 3, 4, 5];
no.reverse();

//includes
const array1 = [1, 2, 3];
console.log(array1.includes(2));
  
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

//Length Attribute
let message = "Hello, world!";
let length = message.length;

//find out all the characters in a string
// var str = "Hello";
// for (var i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// //reverse a string 
// var str = "Hello";
// let rev="";
// for (var i = str.length-1; i >=0; i--) {
//   rev+=str[i];
// }
// console.log(rev);

//slice(start, end)
// let str = "JavaScript is fun!";
// let sliced = str.slice(0, 10);


//replace(search, replacement
let sentence = "I love JavaScript. JavaScript is powerful.";
let newSentence = sentence.replace("JavaScript", "Node.js");

//replaceAll(search, replacement)
// let sentence = "I love JavaScript. JavaScript is powerful.";
// let newSentence = sentence.replaceAll("JavaScript", "Node.js");

//toUpperCase() and toLowerCase()
let name = "John Doe";
let upperCaseName = name.toUpperCase(); 
let lowerCaseName = name.toLowerCase();

//concat(string1, string2, …)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);


//charAt(index) and charCodeAt(index
let word = "Hello";
let char = word.charAt(1); 
let charCode = word.charCodeAt(1);

//split(separator)
// let sentence = "I,am,a,comma,separated,sentence";
// let words = sentence.split(",")

