const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');



describe('Manager', () => {
  it('should be a name', () => {
    const employee = new Manager('Pat', 13, "patpaggi@gmail.com", '4');
    expect(employee.name).toBe('Pat');
  }),
    it('should be id', () => {
      const employee = new Manager('Boo', 183, "patpaggi@gmail.com", '4')
      expect(employee.id).toEqual(expect.any(Number));
    }),
    it('should be an email', () => {

      const employee = new Manager('Bob', 18, "patpaggi@gmail.com", '4')
      expect(employee.email).toBe('patpaggi@gmail.com');
    }),
    it('should be an office number', () => {

      const employee = new Manager('Bob', 18, "patpaggi@gmail.com", 'manager', '4')
      expect(employee.officeNumber).toBe('4');
    })
})