const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school = "placeholder"){
        super(name,id,email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    formatThird() {
        return `School: ${this.school}`;
    }

    getIcon(){
        return `<i class="fas fa-user-graduate"></i>`;
    }
    
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;