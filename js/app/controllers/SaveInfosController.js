class SaveInfosController {

    constructor() {
        this._view = new View(document.querySelector('.viewTab'));
        this._view.update(this._personObj);
    }
    
    _SavePersonalInfo(event) {
        console.log('cheguei no personal info');
        event.preventDefault();
        let fullName = document.querySelector('.full-name');
        let nickname = document.querySelector('.nickname');
        let email = document.querySelector('.email');
        let phone = document.querySelector('.phone');
        let dayBirthday = document.querySelector('.select-day');
        let monthBirthday = document.querySelector('.select-month');
        let yearBirthday = document.querySelector('.select-year');
        let birthday = new Date(yearBirthday.value, monthBirthday.value, dayBirthday.value);
        let age = document.querySelector('.age');
        
    
        this._personalInfo = new PersonalInfo(fullName.value, nickname.value, email.value, phone.value, birthday, age.value)
    }
    
    _SaveSocialInfo(event) {
        console.log('cheguei no social info');
        event.preventDefault();
        let linkedin = document.getElementById('linkedin');
        let github = document.getElementById('github');
        this._socialInfo = new SocialInfo(linkedin.value, github.value);
    }
    
    _SaveCertificates(event) {
        console.log('cheguei nos certificados');
        event.preventDefault();
        let listCertificates = new Array();
        certificates.querySelectorAll('input').forEach(certificate => {
            listCertificates.push(certificate.value);
        });
    }

    _SaveQualifications(event){     
        console.log('cheguei nas qualificacoes');
        event.preventDefault();
        let teamName = document.querySelector("#teamName");
        let institution = document.querySelector('#institution');
        let graduation = document.querySelector('#graduation');
    
        this._qualification = new Qualification(listCertificates, teamName.value, institution.value, graduation.value);
    }
    
    _SavePerson(event) {
        console.log('Cheguei aqui');
        event.preventDefault();
        this._person = new Person(this._personalInfo, this.socialInfo, this._qualification)
        localStorage.setItem('person', JSON.stringify(this._person));
        this._personString = localStorage.getItem('person');
        this._personObj = JSON.parse(this._personString);
    }
}