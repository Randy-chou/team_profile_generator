const Manager = require("../lib/manager")

describe(`Manager`, () => {
    it('should have a name, id, and email element', () => {
        let guy = new Manager()
        expect('name' in guy).toBe(true);
        expect('id' in guy).toBe(true);
        expect('email' in guy).toBe(true);
    });

    it('should construct a name, id, and email element', () => {
        let guy = new Manager("joe", "1" , "joe@mail.com", "1")
        expect(guy.name).toBe("joe");
        expect(guy.id).toBe("1");
        expect(guy.email).toBe("joe@mail.com");
        expect(guy.officeNumber).toBe("1");
    });

    it('should have placeholders when empty', () => {
        let guy = new Manager()
        expect(guy.name).toBe("placeholder");
        expect(guy.id).toBe("0");
        expect(guy.email).toBe("placeholder@gmail.com");
        expect(guy.officeNumber).toBe("placeholder");
    });

    it('should format a list item inner html', () => {
        let guy = new Manager("joe", "1" , "joe@mail.com", "1")
        expect(guy.formatThird()).toBe(`Office number: 1`);
    });

    it('should get role', () => {
        let guy = new Manager("joe", "1" , "joe@mail.com", "1")
        expect(guy.getRole()).toBe(`Manager`);
    });
});