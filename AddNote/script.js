const notescontainer = document.querySelector(".container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//  function show(){

//      notescontainer.innerHTML = localStorage.getItem("notes");
//  }

//  show();

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}


CreateBtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box"
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img)
})



notescontainer.addEventListener("click",(e)=>{
    if (e.target.tagName=="IMG"){
      e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName=="p") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(element => {
           element.onkeyup = function(){
               updateStorage();
           }
        });
      }
})

    document.addEventListener("keydown", (event)=>{
        if (event.key=="Enter"){
            document.execCommand("insertLineBreak")
            event.preventDefault();
        }
     })