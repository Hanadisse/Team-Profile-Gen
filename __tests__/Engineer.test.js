const Engineer = require('../lib/Engineer');

// Creates engineer object 

test('creates an Engineer object', () => {
    const engineer = new Engineer('Hanad', 1, 'Hanadisse1@gmail.com', 'Hisse1');
    expect(engineer.github).toEqual(expect.any(String));
});


// Gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Hanad', 1, 'Hanadisse1@gmail.com', 'Hisse1');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


// Gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Hanad', 1, 'Hanadisse1@gmail.com', 'Hisse1');
    expect(engineer.getRole()).toEqual("Engineer");
});