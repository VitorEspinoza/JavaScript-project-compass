

function onCheckbox(){
    let getCheckbox = document.querySelector("#checkboxId");
    let isChecked = getCheckbox.checked;
    if(isChecked){
        alert("accept the terms of use");
    }

}