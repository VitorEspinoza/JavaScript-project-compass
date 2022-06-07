// // personal info
// let fullName = document.querySelector('.full-name');
// let nickname = document.querySelector('.nickname');
// let email = document.querySelector('.email');
// let phone = document.querySelector('.phone');
// let dayBirthday = document.querySelector('.select-day');
// let monthBirthday = document.querySelector('.select-month');
// let yearBirthday = document.querySelector('.select-year');
// let birthday = new Date(yearBirthday, monthBirthday, dayBirthday);
// let age = document.querySelector('.age');
// let personalInfo;
// let btnFirstTab = document.getElementById('submitFirstTab').addEventListener("submit", (event) => {
//   event.preventDefault();
//   personalInfo = new PersonalInfo(fullName.value, nickname.value, email.value, phone.value, birthday.value, age.value);
// });

// // let fullName = "Thiago";
// // let nickname = "thiago";
// // let email = "teste@gmail.com";
// // let phone = "(41) 985159800";
// // let birthday = new Date(2004, 08, 25);
// // let age = "17";


// // social info 
// let linkedin = document.getElementById('linkedin');
// let github = document.getElementById('github');
// let socialInfo;
// let btnSecondTab = document.getElementById('submitSecondTab').addEventListener("submit", (event) => {
//   event.preventDefault();
//   socialInfo = new SocialInfo(linkedin.value, github.value);
// });
// // let linkedin = "www.google.com";
// // let github = "www.google.com";


// // qualification
// let listCertificates = new Array();
// certificates.querySelectorAll('input').forEach(certificate => {
//   listCertificates.push(certificate.value);
// });
// let teamName = document.querySelector("#teamName");
// let institution = document.querySelector('#institution');
// let graduation = document.querySelector('#graduation');
// let qualification;
// let person;
// let personString;
// let personObj;
// let btnThirdTab = document.getElementById('submitThirdTab').addEventListener("submit", (event) => {
//   event.preventDefault();
//   qualification = new Qualification(listCertificates.value, teamName.value, institution.value, graduation.value);
//   person = new Person(personalInfo, socialInfo, qualification);
//   localStorage.setItem('person', JSON.stringify(person));
//   personString = localStorage.getItem('person');
//   personObj = JSON.parse(personString);
//   console.log(personObj);
// });
// // let listCertificates = ["www.google.com", "www.google.com"];
// // let teamName = "www.google.com";
// // let institution = "teste";
// // let graduation = "teste";
