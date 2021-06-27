const Employee = require("../lib/employee")

describe(`Employee`, () => {
    it('should have a name, id, and email element', () => {
        let employee = new Employee()
        expect('name' in employee).toBe(true);
        expect('id' in employee).toBe(true);
        expect('email' in employee).toBe(true);
    });

    it('should construct a name, id, and email element', () => {
        let guy = new Employee("joe", "1" , "joe@mail.com")
        expect(guy.name).toBe("joe");
        expect(guy.id).toBe("1");
        expect(guy.email).toBe("joe@mail.com");
    });

    it('should have placeholders when empty', () => {
        let guy = new Employee()
        expect(guy.name).toBe("placeholder");
        expect(guy.id).toBe("0");
        expect(guy.email).toBe("placeholder@gmail.com");
    });
});