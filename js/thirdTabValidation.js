// Input Fields
let certificate = document.querySelector("#certificates input");
let teamName = document.querySelector("#teamName input");
let institution = document.querySelector('#institution input');
let graduation = document.querySelector('#graduation input');

// Error Fields
let certificateError = document.querySelector("#certificates span");
let teamNameError = document.querySelector("#teamName span");
let institutionError = document.querySelector("#institution span");
let graduationError = document.querySelector("#graduation span");

// Form
let formThirdTab = document.querySelector("#formThirdTab");

// Validation Regex
let validateWebSite = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
let validateNames = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);

// Functions
function errorCheck(validation, errorField, textError) {
    validation == false ? errorField.textContent = textError : errorField.textContent = "";
}

// Event
/* formThirdTab.addEventListener("change", e => {

    // Input Validation
    let certificateOk = validateWebSite.test(certificate.value); 
    let teamNameOk = validateWebSite.test(teamName.value); 
    let institutionOk = validateNames.test(institution.value);
    let graduationOk = validateNames.test(graduation.value);

    errorCheck(certificateOk, certificateError, "Erro! Insira corretamente.");
    errorCheck(teamNameOk, teamNameError, "Erro! Insira corretamente.");
    errorCheck(institutionOk, institutionError, "Erro! Insira corretamente.");
    errorCheck(graduationOk, graduationError, "Erro! Insira corretamente.");
}) */

certificate.addEventListener("input", e => {
    let certificateOk = validateWebSite.test(certificate.value); 
    errorCheck(certificateOk, certificateError, "Erro! Insira corretamente.");
})

teamName.addEventListener("input", e => {
    let teamNameOk = validateWebSite.test(teamName.value); 
    errorCheck(teamNameOk, teamNameError, "Erro! Insira corretamente.");
})

institution.addEventListener("input", e => {
    let institutionOk = validateNames.test(institution.value);
    errorCheck(institutionOk, institutionError, "Erro! Insira corretamente.");
})

graduation.addEventListener("input", e => {
    let graduationOk = validateNames.test(graduation.value);
    errorCheck(graduationOk, graduationError, "Erro! Insira corretamente.");
})





