// personal info
// let fullName = document.querySelector('.full-name').value;
// let nickname = document.querySelector('.nickname').value;
// let email = document.querySelector('.email').value;
// let phone = document.querySelector('.phone').value;
// let dayBirthday = document.querySelector('.select-day').value;
// let monthBirthday = document.querySelector('.select-month').value;
// let yearBirthday = document.querySelector('.select-year').value;
// let birthday = new Date(yearBirthday, monthBirthday, dayBirthday);
// let age = document.querySelector('.age').value;

let fullName = "Thiago";
let nickname = "thiago";
let email = "teste@gmail.com";
let phone = "(41) 985159800";
let birthday = new Date(2004, 08, 25);
let age = "17";

let personalInfo = new PersonalInfo(fullName, nickname, email, phone, birthday, age);


// social info 
// let linkedin = document.getElementById('linkedin').value;
// let github = document.getElementById('github').value;

let linkedin = "www.google.com";
let github = "www.google.com";

let socialInfo = new SocialInfo(linkedin, github);


// qualification
// let listCertificates;
// certificates.querySelectorAll('input').forEach(certificate => {
//   listCertificates.Add(certificate.value);
// });
// let teamName = document.querySelector("#teamName").value;
// let institution = document.querySelector('#institution').value;
// let graduation = document.querySelector('#graduation').value;

let listCertificates = ["www.google.com", "www.google.com"];
let teamName = "www.google.com";
let institution = "teste";
let graduation = "teste";

let qualification = new Qualification(listCertificates, teamName, institution, graduation);

let person = new Person(personalInfo, socialInfo, qualification);
localStorage.setItem('person', JSON.stringify(person));

let personString = localStorage.getItem('person');
let personObj = JSON.parse(personString);
console.log(personObj);