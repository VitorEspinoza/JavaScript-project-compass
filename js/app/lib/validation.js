
function ValidationField(regex, field, form) {
 
  if (regex.test(field.value) || field.value == "")
  {
    field.parentNode.querySelector('span').classList.add('invisible');
  
  }
    else {
    field.parentNode.querySelector('span').classList.remove('invisible');
     if (field.classList.contains("required")) {  
      let btnSubmit = form.querySelector('.btn-post');   
       btnSubmit.classList.remove('btnActive');
       btnSubmit.disabled = true; 
     }
  }
}

function ValidationForm(form, e){
  regUrl = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
  regName = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
  regEmail = new RegExp( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
 
  var listRequiredInputs = form.querySelectorAll(".required");

  
  let isValidBtn = true;
  
  listRequiredInputs.forEach(input => {
 
  if (!input.parentNode.querySelector('span').classList.contains("invisible") || input.value == "" || (input.classList.contains("input-check") && !input.checked)) {  
    isValidBtn = false;
  } 

  });

  listInputs = Array.prototype.slice(form.querySelectorAll('input'));
  listInputs.forEach(input => {
  if (!input.parentNode.querySelector('span').classList.contains("invisible")) {  
    isValidBtn = false;
  } 
  });
  
  let btnSubmit = form.querySelector('.btn-post');
  if (isValidBtn) {
    btnSubmit.classList.add('btnActive');
    btnSubmit.disabled = false;
  }
  else {
    btnSubmit.classList.remove('btnActive');
    btnSubmit.disabled = true; 
  }

  if (e.target.classList.contains('input-url')) {
    ValidationField(regUrl, e.target, form);   
  }
  if (e.target.classList.contains('input-name')) {
    ValidationField(regName, e.target, form);
  }
  if (e.target.classList.contains('input-email')) {
    ValidationField(regEmail, e.target, form);
  }
}
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {
      ValidationForm(form, e);
    }) 
    input.addEventListener('keyup', (e) => {
      ValidationForm(form, e);
    }) 
  })
});