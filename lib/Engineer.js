const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, position, github) {
    // from parent class
    super(name, id, email, position);
    this.github = github;
  }
  getGithub() {
    return { github: this.github }
  }
  getPosition() {
    return { position: position = 'Engineer' }
  }

}

module.exports = Engineer;