const Employee = require('../lib/Employee');

test('creates a employee object', () => {
  const employee = new Employee('Pat');
  //should be seperate tests
  expect(employee.name).toBe('Dave');
  //
  expect(employee.id).toEqual(expect.any(Number));
  //
  expect(employee.email).toBe('pat@gmail.com');
});
test("gets employee's stats as an object", () => {
  const employee = new Employee('Pat');

  expect(employee.getName()).toHaveProperty('name');

  expect(employee.getId()).toHaveProperty('id');

  expect(employee.getEmail()).toHaveProperty('email');

});


