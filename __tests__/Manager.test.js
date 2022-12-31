const Manager = require('../lib/Manager');

// Creates manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Hanad', 1, 'Hanadisse1@gmail.com', 2);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Hanad', 1, 'Hanadisse1@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});