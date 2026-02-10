// function handleClick(){
//     document.querySelector("#head").style.color="red";
//     document.getElementById("btn").textContent="color changed"
// }
//Q2


// const handleClick =()=>{
//     const image = document.createElement("img");
//     image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxoM8du5cN5VvAXvnbrab6PbfkAAqjiyLbQ&s%22);")
//     image.setAttribute("alt", "Placeholder image");
//     document.getElementById("content").append(image);
// }

// dom

// document.getElementById("btn").addEventListener("click", () => {
//     const image= document.createElement("img");
//     image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxoM8du5cN5VvAXvnbrab6PbfkAAqjiyLbQ&s");
//     image.setAttribute("alt", "Placeholder image");
//     document.getElementById("content").append(image);
// })

const button = document.getElementById("btn");
const link = document.getElementById("link");
const box = document.getElementById("box");

button.addEventListener("click", function () {
    link.style.display = "block";
    box.style.display = "flex";
});
