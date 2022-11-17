const Intern = require('../lib/Intern');

test("Can create a new intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object')
});

test('Can set name in intern object', () => {
    const intern = new Intern("Mike");
    expect(intern.name).toBe("Mike");
});

test('Can set employee_id in intern object', () => {
    const intern = new Intern("Mike", 12);
    expect(intern.employee_id).toBe(12);

});

test('Can set email in intern object', () => {
    const intern = new Intern("Mike", 12, "mike@email.com");
    expect(intern.email).toBe("mike@email.com");

});

test('Can get name from getName() method', () =>{
    const intern = new Intern("Mike");
    expect(intern.getName()).toBe("Mike");
});

test('Can get name from getId() method', () =>{
    const intern = new Intern("Mike", 12);
    expect(intern.getId()).toBe(12);
});

test('Can get name from getSchool() method', () =>{
    const intern = new Intern("Mike", 12, undefined);
    expect(intern.getSchool()).toBe(undefined);
});

test('Can get name from getRole() method', () =>{
    const intern = new Intern("Mike", 12, "mike@email.com", "Intern");
    expect(intern.getRole()).toBe("Intern");
});



