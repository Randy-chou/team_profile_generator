class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name = "placeholder", id = "0", email = "placeholder@gmail.com") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return `<a href="mailto:${this.email}">${this.email}</a>`;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;