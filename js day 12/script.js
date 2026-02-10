// document.getElementById("myInput");
// addEventListener("change",()=>{
//     document.getElementById("output").textContent="Change detected!"
// });

const nameInput = document.getElementById
("myInput");
const courseInput=document.getElementById
("course");
const Form=document.getElementById("myForm");
const output=document.getElementById("output");

// courseInput.addEventListener("change",()=>{
//     console.log (courseInput.value);
// })


Form.addEventListener("submit",(event)=>{
    // to prevent the autorefresh
    event.preventDefault();   
    // console.log(event.target.value);
    const name = nameInput.value;
    const course = courseInput.value;
    console.log(name,course);
    output.textContent=name+course;
})