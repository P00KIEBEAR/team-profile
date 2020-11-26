
const Engineer = require('../lib/Engineer');




describe('Engineer', () => {
  it('should be a name', () => {
    const engineer = new Engineer('Pat', 13, "patpaggi@gmail.com", 'github.com/P00KIEBEAR');
    expect(engineer.name).toBe('Pat');
  }),
    it('should be id', () => {
      const engineer = new Engineer('Boo', 183, "patpaggi@gmail.com", 'github.com/P00KIEBEAR')
      expect(engineer.id).toEqual(expect.any(Number));
    }),
    it('should be an email', () => {

      const engineer = new Engineer('Bob', 18, "patpaggi@gmail.com", 'github.com/P00KIEBEAR')
      expect(engineer.email).toBe('patpaggi@gmail.com');
    }),
    it('should be an github', () => {

      const engineer = new Engineer('Bob', 18, "patpaggi@gmail.com", 'engineer', 'github.com/P00KIEBEAR')
      expect(engineer.github).toBe('github.com/P00KIEBEAR');
    })
})
