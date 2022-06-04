class Qualification {

    constructor(fullName, nickname, email, phone, birthday, agr)
    {
        this._fullName = fullName;
        this._nickname = nickname;
        this._email = email;
        this._phone = phone;
        this._birthday = birthday;
        this._age = age;
    }

    get FullName() {
        return this.fullName;
    }

    set FullName(value) {
        this._fullName = value;
    }
    
    get Nickname() {
        return this._nickname;
    }

    set Nickname(value) {
        this._nickname = value;
    }

    get Email() {
        return this._email;
    }

    set Email(value) {
        this._email = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get Birthday() {
        return this._birthday;
    }

    set Birthday(value) {
        this._birthday = value;
    }

    get Age() {
        return this._age;
    }

    set Age(value) {
        this._age = value;
    }

}