const Engineer = require("../lib/engineer")

describe(`Engineer`, () => {
    it('should have a name, id, email, and github element', () => {
        let guy = new Engineer()
        expect('name' in guy).toBe(true);
        expect('id' in guy).toBe(true);
        expect('email' in guy).toBe(true);
        expect('github' in guy).toBe(true);
    });
    
    it('should construct a name, id, and email element', () => {
        let guy = new Engineer("joe", "1" , "joe@mail.com", "joe")
        expect(guy.name).toBe("joe");
        expect(guy.id).toBe("1");
        expect(guy.email).toBe("joe@mail.com");
        expect(guy.github).toBe("joe");
    });

    it('should have placeholders when empty', () => {
        let guy = new Engineer()
        expect(guy.name).toBe("placeholder");
        expect(guy.id).toBe("0");
        expect(guy.email).toBe("placeholder@gmail.com");
        expect(guy.github).toBe("placeholder");
    });

    it('should format a list item inner html', () => {
        let guy = new Engineer("joe", "1" , "joe@mail.com", "joe")
        expect(guy.formatThird()).toBe(`GitHub: <a href="https://github.com/joe">joe</a>`);
    });

    it('should get role', () => {
        let guy = new Engineer("joe", "1" , "joe@mail.com", "Upenn")
        expect(guy.getRole()).toBe(`Engineer`);
    });
});