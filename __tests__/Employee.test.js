const Employee = require('../lib/Employee');

test("Can create a new employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});

test('Can set name in employee object', () => {
    const employee = new Employee("Mike");
    expect(employee.name).toBe("Mike");
});

test('Can set employee_id in employee object', () => {
    const employee = new Employee("Mike", 12);
    expect(employee.employee_id).toBe(12);

});

test('Can set email in employee object', () => {
    const employee = new Employee("Mike", 12, "mike@email.com");
    expect(employee.email).toBe("mike@email.com");

});

test('Can get name from getName() method', () =>{
    const employee = new Employee("Mike", 12, "mike@email.com");
    expect(employee.getName()).toBe("Mike");
});


