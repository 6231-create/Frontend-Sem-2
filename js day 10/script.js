const head=document.getElementById("heading");
//head.innerHTML="<i>New Heading</i>"
console.log(head.innerText)//it will only show the visible text
console.log(head.textContent)//it will show all the text including hidden text
console.log(head.innerHTML)//it will show all the text with its tag/element

//DOM Modification
//create a new element and set its content
const newParagraph=document.createElement("p");
newParagraph.textContent="this is a dynimacally created paragraph."
console.log(newParagraph.textContent)
//Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);
// remove element
// const para = document.querySelector("#container p");
// para.remove();
// or
document.querySelector("#container p").remove();

let date = new Date();
console.log(date);

setTimeout(()=>{
    console.log("welcome");
    alert("offer valid till 12pm")
},5000)

setInterval(()=>{
    let date = new Date()
    console.log(date);

},1000)

//Event handle
function handleclick(){
    document.getElementById("output").
    textContent="Button Clicked";
}