const Manager = require('../lib/Manager');

test("Can create a new Manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object')
});

test('Can set name in Manager object', () => {
    const manager = new Manager("Mike");
    expect(manager.name).toBe("Mike");
});

test('Can set employee_id in Manager object', () => {
    const manager = new Manager("Mike", 12);
    expect(manager.employee_id).toBe(12);

});

test('Can set email in Manager object', () => {
    const manager = new Manager("Mike", 12, "mike@email.com");
    expect(manager.email).toBe("mike@email.com");

});

test('Can get name from getName() method', () =>{
    const manager = new Manager("Mike");
    expect(manager.getName()).toBe("Mike");
});

test('Can get name from getId() method', () =>{
    const manager = new Manager("Mike", 12);
    expect(manager.getId()).toBe(12);
});

test('Can get name from getOfficeNumber() method', () =>{
    const manager = new Manager("Mike", 12, "mike@gmail.com", 250);
    expect(manager.getOfficeNumber()).toBe(250);
});

test('Can get name from getRole() method', () =>{
    const manager = new Manager("Mike", 12, "mike@email.com", 250, "Manager");
    expect(manager.getRole()).toBe("Manager");
});



