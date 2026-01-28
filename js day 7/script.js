var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();


// let user={
//     fullname:"Sneha Singh",
//     address:{
//         city:"Gurugram",
//         state:"Haryana",
//     },
//     mobileno:5525256996,
//     favcolor:["black","blue","green"],
//     demo:function(){
//         return "demo function"

//     }
// }
// console.log(user);
// console.log(user.fullname,user.mobileno,user.favcolor[1],user.address.city,user.demo());
// console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[0]);

// //string literal
// console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]}`);

//object methods
//object.keys(variable name)
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const car = {
//      make: "Mahindra",
//      model: "Thar" };
// Object.freeze(car);//we cant add a new key and value pair and we cant change or update
//the existing value

// car.color = "zblack"; // This property addition is ignored.
// console.log( car);

// const car = { 
//     make: "Mahindra", 
//     model: "Thar" 
// };
// Object.seal(car);
// car.model="XUV700"
// car.color = "zblack"; // This property addition is ignored.
// console.log(car.color);
