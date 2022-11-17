const Engineer = require('../lib/Engineer');

test("Can create a new engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object')
});

test('Can set name in engineer object', () => {
    const engineer = new Engineer("Mike");
    expect(engineer.name).toBe("Mike");
});

test('Can set employee_id in engineer object', () => {
    const engineer = new Engineer("Mike", 12);
    expect(engineer.employee_id).toBe(12);

});

test('Can set email in engineer object', () => {
    const engineer = new Engineer("Mike", 12, "mike@email.com");
    expect(engineer.email).toBe("mike@email.com");

});

test('Can get name from getName() method', () =>{
    const engineer = new Engineer("Mike");
    expect(engineer.getName()).toBe("Mike");
});

test('Can get name from getId() method', () =>{
    const engineer = new Engineer("Mike", 12);
    expect(engineer.getId()).toBe(12);
});

test('Can get name from getGitHub() method', () =>{
    const engineer = new Engineer("Mike", 12, "mike@gmail.com", "capriciouscalzone");
    expect(engineer.getGitHub()).toBe("capriciouscalzone");
});

test('Can get name from getRole() method', () =>{
    const engineer = new Engineer("Mike", 12, "mike@email.com", "Engineer");
    expect(engineer.getRole()).toBe("Engineer");
});



