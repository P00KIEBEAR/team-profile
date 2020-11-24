const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, position, school) {
    // from parent class
    super(name, id, email, position);
    this.school = school;
  }
  getSchool() {
    return this.school
  }
  getPosition() {
    return position = 'Intern'
  }

}

module.exports = Intern;