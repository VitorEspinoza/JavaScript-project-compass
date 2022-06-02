let certificateInput = document.querySelector("#certificates input");
let teamName = document.querySelector("#teamName input");
let institution = document.querySelector('#institution input');
let graduation = document.querySelector('#graduation input')

// TESTES
let teste = document.querySelector("#institution label");
//

let validateWebSite = new RegExp(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/);

let validateNames = new RegExp(/[A-Z][a-z] [A-Z][a-z]/);


let certificateOk = validateWebSite.test(certificateInput.value); 
let teamNameOk = validateWebSite.test(teamName.value); 

let institutionOk = validateNames.test(institution.value);

teste.addEventListener('click', e => {
    institution.value = (institution.value).trim(); /* remove espaços desnecessários no começo e no fim */
    console.log(institutionOk);
    console.log(institution.value);
})


