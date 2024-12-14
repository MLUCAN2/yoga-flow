// Dropdown
function dropMenu(){
    document.getElementById("dropdown").classList.toggle("show")
}

// Drag and Drop
function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
    event.preventDefault();
    let data=event.dataTransfer.getData("text")
    event.target.appendChild(document.getElementById(data))
}