const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, position, github) {
    // from parent class
    super(name, id, email, position);
    this.github = github;
  }
  getGithub() {

    return this.github
  }
  getPosition() {

    return this.position
  }

}

module.exports = Engineer;