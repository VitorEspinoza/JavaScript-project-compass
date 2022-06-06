
function emailvalidation() {
    const selectEmail = document.querySelector('#email');
    const selectError = document.querySelector('#error-email');
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let selectStr = selectEmail.value;
    let test = re.test(selectStr);

    if (!selectEmail.checkValidity() || !test) {
        selectError.innerHTML = "E-mail Invaliqud";
        selectError.style.color = "red";
        selectError.style.margin = "6px 0";
        selectError.style.fontSize = "14px";
        selectError.style.fontFamily = "Nunito";
    }

}

function resetmessage() {
    let selectError = document.querySelector('#error-email');
    if (selectError.innerHTML == "Invalid email") {
        selectError.innerHTML = "";
    }
}
