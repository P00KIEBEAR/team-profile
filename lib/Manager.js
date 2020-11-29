const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, position, officeNumber) {
    // from parent class
    super(name, id, email, position);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {

    return this.officeNumber
  }
  getPosition() {


    return this.position
  }

}

module.exports = Manager;