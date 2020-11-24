
const Employee = require('../lib/Employee');


describe('Person', () =>
  it('should be a name', () => {
    const employee = new Employee('Pat');
    //should be seperate tests
    expect(employee.name).toBe('Dave');
  }),
  it('should be id', () => {
    expect(employee.id).toEqual(expect.any(Number));
    //
    expect(employee.email).toBe('pat@gmail.com');
  }),
  test("gets employee's stats as an object", () => {
    const employee = new Employee('Pat');

    expect(employee.getName()).toHaveProperty('name');

    expect(employee.getId()).toHaveProperty('id');

    expect(employee.getEmail()).toHaveProperty('email');

  }));


