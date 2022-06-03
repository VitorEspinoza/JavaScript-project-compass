let githubUrl = document.getElementById('github');
let linkedinUrl = document.getElementById('linkedin');
let form = document.getElementById('social');
let btn = document.querySelector('.btn');
let btnImg = document.getElementById('arrow');
let githubError = document.getElementById('githubError');
let linkedinError = document.getElementById('linkedinError');
let reg = new RegExp(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/);

function urlValidation(r, url) {
  if(r.test(url)) {
    console.log("URL válida");
    return true;
  } else {
    console.log("URL inválida");
    return false;
  }
}

function formValidation() {
  if(urlValidation(reg, githubUrl.value) && urlValidation(reg, linkedinUrl.value)) {
    githubError.innerHTML = "";
    linkedinError.innerHTML = "";
    btn.classList.add('btnActive');
    btnImg.style.display = 'block';
  } else {
    if(!urlValidation(reg, githubUrl.value)) {
      githubError.innerHTML = "Preencha o URL corretamente";
    } else {
      githubError.innerHTML = "";
    }

    if(!urlValidation(reg, linkedinUrl.value)) {
      linkedinError.innerHTML = "Preencha o URL corretamente"
    } else {
      linkedinError.innerHTML = "";
    }
    btn.classList.remove('btnActive');
    btnImg.style.display = 'none';
  }
} 