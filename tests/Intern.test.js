const Intern = require("../lib/intern")

describe(`Intern`, () => {
    it('should have a name, id, and email element', () => {
        let guy = new Intern()
        expect('name' in guy).toBe(true);
        expect('id' in guy).toBe(true);
        expect('email' in guy).toBe(true);
    });

    it('should construct a name, id, and email element', () => {
        let guy = new Intern("joe", "1" , "joe@mail.com", "Upenn")
        expect(guy.name).toBe("joe");
        expect(guy.id).toBe("1");
        expect(guy.email).toBe("joe@mail.com");
        expect(guy.school).toBe("Upenn");
    });

    it('should have placeholders when empty', () => {
        let guy = new Intern()
        expect(guy.name).toBe("placeholder");
        expect(guy.id).toBe("0");
        expect(guy.email).toBe("placeholder@gmail.com");
        expect(guy.school).toBe("placeholder");
    });

    it('should format a list item inner html', () => {
        let guy = new Intern("joe", "1" , "joe@mail.com", "Upenn")
        expect(guy.formatThird()).toBe(`School: Upenn`);
    });

    it('should get role', () => {
        let guy = new Intern("joe", "1" , "joe@mail.com", "Upenn")
        expect(guy.getRole()).toBe(`Intern`);
    });
});