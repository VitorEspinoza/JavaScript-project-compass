let certificateInput = document.querySelector("#certificates input");
let certificateError = document.getElementById('certificateError');

let nameInput = document.querySelector("#teamName input");
let nameError = document.getElementById('nameError');

let institutionInput = document.querySelector('#institution input');
let institutionError = document.getElementById('institutionError');

let graduationInput = document.querySelector('#graduation input');
let graduationError = document.getElementById('graduationError');

let btn = document.querySelector('.btn');
let submitBtn = document.getElementById('submitBtn');
let btnImg = document.getElementById('arrow');

let urlRegEx = new RegExp(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/);
let nameRegEx = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);

btn.classList.add('btnActive');
submitBtn.classList.add('btnActive');

function regValidation(r, el) {
    if (r.test(el)) {
        return true;
    } else {
        return false;
    }
}

function formValidation() {
    if (regValidation(urlRegEx, certificateInput.value)) {
        certificateError.innerHTML = "";
        btn.classList.remove('btnActive');
    } else {
        certificateError.innerHTML = "Preencha o URL corretamente";
        btn.classList.add('btnActive');
        btnImg.style.display = 'none';
    }

    if(regValidation(nameRegEx, nameInput.value) && regValidation(nameRegEx, institutionInput.value) && regValidation(nameRegEx, graduationInput.value)) {
        nameError.innerHTML = "";
        institutionError.innerHTML = "";
        graduationError.innerHTML = "";
        submitBtn.classList.remove('btnActive');
        btnImg.style.display = 'block';
    } else {
        if(!regValidation(nameRegEx, nameInput.value)) {
            nameError.innerHTML = 'Preencha o nome do time corretamente';
            submitBtn.classList.add('btnActive');
            btnImg.style.display = 'none';
        } else {
            nameError.innerHTML = "";
            submitBtn.classList.remove('btnActive');
            btnImg.style.display = 'block';
        }

        if(!regValidation(nameRegEx, institutionInput.value)) {
            institutionError.innerHTML = 'Preencha o nome da instituicao corretamente';
            submitBtn.classList.add('btnActive');
            btnImg.style.display = 'none';
        } else {
            institutionError.innerHTML = "";
            submitBtn.classList.remove('btnActive');
            btnImg.style.display = 'block';
            console.log('teste else');
        }

        if(!regValidation(nameRegEx, graduationInput.value)) {
            graduationError.innerHTML = 'Preencha o nome da graduação corretamente';
            submitBtn.classList.add('btnActive');
            btnImg.style.display = 'none';
        } else {
            graduationError.innerHTML = "";
            submitBtn.classList.remove('btnActive');
            btnImg.style.display = 'block';
        }
    }
}