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

// Form Validation
function validateForm(event){
    // Pulls the element and defaults them to false
    event.preventDefault();
    const filled=document.querySelectorAll('input[type="checkbox"]');
    let checked=false;

    // Will loop through to check if a checkbox is checked
    filled.forEach(checkbox=> {
        if(checkbox.checked){
            checked=true;
        }
    });
    // If none are checked, an alert will pop up
    if(!checked){
        alert("Please select a checkbox.")
        return false
    }
    return true
}