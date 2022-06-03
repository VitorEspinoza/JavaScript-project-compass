function emailvalidation() {
    const email = document.querySelector('#email');
    const error = document.querySelector('#error-email');
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(!email.checkValidity()){
        error.innerHTML = "Invalid email";
        
    }

}

function resetmessage(){
    let error = document.querySelector('#error-email');
    if(error.innerHTML == "Invalid email"){
        error.innerHTML = "";
    }
}
