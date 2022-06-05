console.log(saveInfosController.SaveQualifications);

function ValidationButton(listElements, regex, form) {
  let btn = form.querySelector('.btn-post');
  listElements.forEach(element => {
    if(element.classList.contains('required')){
      if (regex.test(element.value)) {
        btn.classList.add('btnActive');
        btn.disabled = false;
      }
      else {
        btn.classList.remove('btnActive');
        btn.disabled = true;
      }
    }
    
  });
}


function ValidationField(regex, field) {
  if (regex.test(field.value)) {
    field.parentNode.querySelector('span').classList.add('invisible');
  }
  else {
    field.parentNode.querySelector('span').classList.remove('invisible');
  }
}

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', (e) => {

      regUrl = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
      regName = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
      regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
     
      var listUrls = form.querySelectorAll(".input-url");
      var listNames = form.querySelectorAll(".input-name");
      var listEmails = form.querySelectorAll(".input-email");
    
      
      if (listUrls.length > 0) {
        ValidationButton(listUrls, regUrl, form);
      }
      if (listNames.length > 0) {
        ValidationButton(listNames, regName, form);
      }
    
      if (listEmails.length > 0) {
        ValidationButton(listEmails, regEmail, form);
      }
    
      if (e.target.classList.contains('input-url')) {
        ValidationField(regUrl, e.target);   
      }
      if (e.target.classList.contains('input-name')) {
        ValidationField(regName, e.target);
      }
      if (e.target.classList.contains('input-email')) {
        ValidationField(regEmail, e.target);
      }

    })
  })
});



