// console.log("start...");

// function myfunction(){
//     setTimeout(()=>{
//       console.log("myfunction timeout... ");
//     },2000);
// }
// myfunction();

// console.log("end...");

console.log("start...");

function myfunction(cb){
    setTimeout(()=>{
      cb("hello world");
    },2000);
}
myfunction((data)=>{
    console.log(data);

});

console.log("end...");
// get login video,get video list , get video:

