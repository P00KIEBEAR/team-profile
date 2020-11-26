const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, position, github) {
    // from parent class
    super(name, id, email, position);
    this.github = github;
  }
  getGithub() {
    inquirer.prompt({
      type: 'text',
      name: 'github',
      message: 'What is your github user name?'
    })
    return { github: this.github }
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

module.exports = Engineer;