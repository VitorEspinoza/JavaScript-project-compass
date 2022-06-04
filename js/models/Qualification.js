class Qualification {

    constructor(certificates, teamName, institution, graduation)
    {
        this._certificates = certificates;
        this._teamName = teamName;
        this._institution = institution;
        this._graduation = graduation;
    }

    get Certificates() {
        return this.certificates;
    }

    set Certificates(value) {
        this._certificates = value;
    }
    

    get TeamName() {
        return this._teamName;
    }

    set TeamName(value) {
        this._certificates = value;
    }

    get Institution() {
        return this._institution;
    }

    set Institution(value) {
        this._certificates = value;
    }

    get Graduation() {
        return this._graduation;
    }

    set Graduation(value) {
        this._certificates = value;
    }
}