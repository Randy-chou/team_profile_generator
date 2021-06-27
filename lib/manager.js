const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber = "placeholder"){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    formatThird() {
        return `Office number: ${this.officeNumber}`;
    }

    getIcon(){
        return `<i class="fas fa-mug-hot"></i>`;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;