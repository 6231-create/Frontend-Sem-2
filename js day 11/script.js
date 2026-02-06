// function handleClick(){
//     document.querySelector("#head").style.color="red";
//     document.getElementById("btn").textContent="color changed"
// }
//Q2

const handleClick =()=>{
    const image = document.createElement("img");
    image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxoM8du5cN5VvAXvnbrab6PbfkAAqjiyLbQ&s%22);")
    image.setAttribute("alt", "Placeholder image");
    document.getElementById("content").append(image);
}
