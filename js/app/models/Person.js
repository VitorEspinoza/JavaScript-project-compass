class Person {

    constructor(personalInfo, socialInfo, qualification)
    {
        this._personalInfo = personalInfo;
        this._socialInfo = socialInfo;
        this._qualification = qualification;
    }

    get PersonalInfo() {
        return this._personalInfo;
    }

    set PersonalInfo(value) {
        this._personalInfo = value;
    }
    
    get SocialInfo() {
        return this._socialInfo;
    }

    set SocialInfo(value) {
        this._socialInfo = value;
    }

    get Qualification() {
        return this._qualification;
    }

    set Qualification(value) {
        this._qualification = value;
    }
}