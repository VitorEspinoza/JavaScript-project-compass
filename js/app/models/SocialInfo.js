class SocialInfo {

    constructor(linkedin, github)
    {
        this._linkedin = linkedin;
        this._github = github;
    }

    get Linkedin() {
        return this._linkedin;
    }

    set Linkedin(value) {
        this._linkedin = value;
    }
    
    get Github() {
        return this._github;
    }

    set Github(value) {
        this._github = value;
    }

}