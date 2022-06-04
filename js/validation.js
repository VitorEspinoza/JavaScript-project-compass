function ValidationButton(listElements, regex, form) {
  let btn = form.querySelector('.btn-post');
  let btnImg = form.querySelector('.btn-img');

  listElements.forEach(element => {
    if (regex.test(element.value)) {
      btn.classList.add('btnActive');
      btnImg.style.display = 'block !important';
      btn.disabled = false;
    }
    else {
      console.log(btnImg)
      btn.classList.remove('btnActive');
      btnImg.style.display = 'none !important';
      btn.disabled = true;
    }
  });
}


function ValidationField(regex, field) {
  if (regex.test(field.value) && (field.value != "")) {
    field.parentNode.querySelector('span').textContent = "";
  }
  else {
    field.parentNode.querySelector('span').textContent = "Erro! Insira corretamente.";
  }
}

const forms = document.querySelectorAll('form');

function validationInputs(e, form) {
  regUrl = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
  regName = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);

  var listUrls = form.querySelectorAll(".input-url");
  var listNames = form.querySelectorAll(".input-name");

  if (listUrls.length > 0) {
    ValidationButton(listUrls, regUrl, form);
  }
  if (listNames.length > 0) {
    ValidationButton(listNames, regName, form);
  }

  if (e.target.classList.contains('input-url')) {
    ValidationField(regUrl, e.target);
  }
  if (e.target.classList.contains('input-name')) {
    ValidationField(regName, e.target);
  }
};


forms.forEach(form => {
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', (e) => {
      validationInputs(e, form);
    })
    input.addEventListener('input', (e) => {
      validationInputs(e, form);
    })
  })
});



