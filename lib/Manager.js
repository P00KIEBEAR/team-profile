const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, position, officeNumber) {
    // from parent class
    super(name, id, email, position);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    inquirer.prompt({

      type: 'text',
      name: 'officeNumber',
      message: 'What is your office number?'
    })
    return { officeNumber: this.officeNumber }
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

module.exports = Manager;