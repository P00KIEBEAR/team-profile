class Employee {
  constructor(name, id, email, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = position
  }

  getName() {
    inquirer.prompt(
      {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      });
    return { name: this.name }
  }
  getId() {
    inquirer.prompt(
      {
        type: 'text',
        name: 'id',
        message: 'What is your id?'
      });
    return { id: this.id }
  }
  getEmail() {
    inquirer.prompt(
      {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
      });
    return { email: this.email }
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


module.exports = Employee