const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');



describe('Intern', () => {
  it('should be a name', () => {
    const intern = new Intern('Pat', 13, "patpaggi@gmail.com");
    expect(intern.name).toBe('Pat');
  }),
    it('should be id', () => {
      const intern = new Intern('Boo', 183, "patpaggi@gmail.com");
      expect(intern.id).toEqual(expect.any(Number));
    }),
    it('should be an email', () => {

      const intern = new Intern('Bob', 18, "patpaggi@gmail.com");
      expect(intern.email).toBe('patpaggi@gmail.com');
    }),
    it('should be an school', () => {

      const intern = new Intern('Bob', 18, "patpaggi@gmail.com", 'intern', 'ASU');
      expect(intern.school).toBe('ASU');
    })
})
