//split
// let sentence = "I,am,a,comma,separated,sentence";
// let words = sentence.split(",");
// console.log(words)
//1. count the occurence of "r" in the given string.
// let str="tu meri me tera me tera tu meri";
// let words=str.split("r").length-1;
// console.log(words)

//first class function

// const demo=()=>console.log("welcome")
// demo()
//  function test(a){
//     console.log("test")
//     return function test2(b){
//         console.log("test2")
//         return function test3(c){
//             console.log("test3")
//         }
//     }
//  }
// let value=test(10)
// let value2=value(12);
// value2(15);
// //test()()()

// //Anonymous function
// Map(function(){

// })

//IIFE(SELF INVOKING FUNCTION)
(function(){
    let n=3
    let a=10**n
     b=a
    console.log(a)
})
()
console.log(b)