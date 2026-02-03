const heading= document.getElementById("myHeading");
console.log(heading);

heading.style.color="tomato";
heading.style.backgroundColor="yellow";
console.log(heading.textContent);
heading.textContent="Hello India";

const subHeading= document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i=0;i<subHeading.length;i++){
    subHeading[i].style.color="blue";
}

const h2heading=document.getElementsByTagName("h2");
console.log(h2heading);

for(let i = 0; i <h2heading.length;i++){
    h2heading[i].style.backgroundColor ="cyan";
}


