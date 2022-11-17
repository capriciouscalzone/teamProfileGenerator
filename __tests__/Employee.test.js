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
    const employee = new Employee("Mike", 12, "mike@gmail.com");
    expect(employee.email).toBe("mike@gmail.com");

});

test('Can get name from getName() method', () =>{
    const employee = new Employee("Mike");
    expect(employee.getName()).toBe("Mike");
});

test('Can get name from getId() method', () =>{
    const employee = new Employee("Mike", 12);
    expect(employee.getId()).toBe(12);
});

test('Can get name from getEmail() method', () =>{
    const employee = new Employee("Mike", 12, "mike@gmail.com");
    expect(employee.getEmail()).toBe("mike@gmail.com");
});

test('Can get name from getRole() method', () =>{
    const employee = new Employee("Mike", 12, "mike@gmail.com", "Employee");
    expect(employee.getRole()).toBe("Employee");
});



