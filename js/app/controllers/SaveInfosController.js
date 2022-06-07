class SaveInfosController {

    constructor(personObj) {
        this._view = new View(document.querySelector('.viewTab'));
        this._view.update(personObj);
    }
    
    SavePersonalInfo(event) {
        event.preventDefault();
        let fullName = document.querySelector('.full-name').value;
        let nickname = document.querySelector('.nickname').value;
        let email = document.querySelector('.email').value;
        let phone = document.querySelector('.phone').value;
        let dayBirthday = document.querySelector('.select-day').value;
        let monthBirthday = document.querySelector('.select-month').value;
        let yearBirthday = document.querySelector('.select-year').value;
        let birthday = new Date(yearBirthday, monthBirthday, dayBirthday);
        let age = document.querySelector('.age').value;
        
    
        let personalInfo = new PersonalInfo(fullName, nickname, email, phone, birthday, age)
    }
    
    SaveSocialInfo(event) {
        event.preventDefault();
        let linkedin = document.getElementById('linkedin').value;
        let github = document.getElementById('github').value;
        console.log(entreiInfoSocial)
        let socialInfo = new SocialInfo(linkedin, github);
    }
    
    SaveCertificates(event) {
        event.preventDefault();
        let listCertificates;
        certificates.querySelectorAll('input').forEach(certificate => {
            listCertificates.Add(certificate.value);
        });
    }

    SaveQualifications(event){     
        event.preventDefault(); 
        let teamName = document.querySelector("#teamName").value;
        let institution = document.querySelector('#institution').value;
        let graduation = document.querySelector('#graduation').value;
    
       let qualification = new Qualification(listCertificates, teamName, institution, graduation);
    }
    
    SavePerson(event) {
        event.preventDefault();
        let person = new Person(personalInfo, socialInfo, qualification);
        localStorage.setItem('person', JSON.stringify(person));
    }
}

