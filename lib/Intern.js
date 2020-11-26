const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, position, school) {
    // from parent class
    super(name, id, email, position);
    this.school = school;
  }
  getSchool() {
    inquirer.prompt({
      type: 'text',
      name: 'school',
      message: 'What is your school?'
    })
    return { school: this.school }
  }
  getPosition() {
    inquirer.prompt(
      {
        type: 'list',
        name: 'position',
        message: 'What is your title? (Check one)',
        choices: ['Manager', 'Engineer', 'Intern'],
      });
    return { position: this.position }
  }

}

module.exports = Intern;