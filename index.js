const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/*
inquirer
  .prompt([{
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'text',
    name: 'id',
    message: 'What is your id?'
  },
  {
    type: 'text',
    name: 'email',
    message: 'What is your email?'
  }
  ])
  // destructure name from the prompt object
  .then(({ name }) => {
    this.employee = new employee(name);

    // test the object creation


  });
*/

const employees = [];
// Create an async function
const getEmployees = async () => {
  // create a loop to collect names
  while (true) {
    // wait for the user to give a name
    const { position, name, id, email, github, school, officeNumber } = await inquirer.prompt([
      {
        type: 'list',
        name: 'position',
        message: 'What is your title? (Check one)',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
      {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'text',
        name: 'id',
        message: 'What is your id?'
      },
      {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
      }
    ]);
    if (position === 'Manager') {
      await inquirer.prompt({
        type: 'text',
        name: 'officeNumber',
        message: 'What is your office number?'
      }).then(({ position, name, id, email, github, school, officeNumber }) => {
        this.Manager = new Employee(position)
        this.Manager = new Employee(name)
        this.Manager = new Employee(id)
        this.Manager = new Employee(officeNumber)
        this.Manager = new Employee(email);
      })

      employees.push(Manager);
      console.log(employees)
    } else if (position === 'Engineer') {
      await inquirer.prompt({
        type: 'text',
        name: 'github',
        message: 'What is your github user name?'
      }).then(({ position, name, id, email, github, school, officeNumber }) => {
        this.Manager = new Employee(position)
        this.Manager = new Employee(name)
        this.Manager = new Employee(id)
        this.Manager = new Employee(github)
        this.Manager = new Employee(email);
      })

      employees.push(Engineer);
      console.log(employees)

    } else {
      await inquirer.prompt({
        type: 'text',
        name: 'school',
        message: 'What is your school?'
      }).then(({ position, name, id, email, github, school, officeNumber }) => {
        this.Manager = new Employee(position)
        this.Manager = new Employee(name)
        this.Manager = new Employee(id)
        this.Manager = new Employee(school)
        this.Manager = new Employee(email);
      })

      employees.push(Intern);
      console.log(employees)
    }
    const { more } = await inquirer.prompt([
      {
        name: 'more',
        message: 'Another?',
        type: 'confirm',
      },
    ]);
    if (!more) {
      break;
    }
  }
};
getEmployees().then(() => {
  console.log(employees);
});