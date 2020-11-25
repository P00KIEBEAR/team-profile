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
      }).then(({ position, name, id, email, officeNumber }) => {
        this.Manager = new Manager(position)
        this.Manager = new Manager(name)
        this.Manager = new Manager(id)
        this.Manager = new Manager(officeNumber)
        this.Manager = new Manager(email);
      })

      employees.push(Manager);
      console.log(new Manager)
    } else if (position === 'Engineer') {
      await inquirer.prompt({
        type: 'text',
        name: 'github',
        message: 'What is your github user name?'
      }).then(({ position, name, id, email, github }) => {
        this.Engineer = new Engineer(position)
        this.Engineer = new Engineer(name)
        this.Engineer = new Engineer(id)
        this.Engineer = new Engineer(github)
        this.Engineer = new Engineer(email);
      })

      employees.push(Engineer);
      console.log(employees)

    } else {
      await inquirer.prompt({
        type: 'text',
        name: 'school',
        message: 'What is your school?'
      }).then(({ position, name, id, email, school }) => {
        this.Intern = new Intern(position)
        this.Intern = new Intern(name)
        this.Intern = new Intern(id)
        this.Intern = new Intern(school)
        this.Intern = new Intern(email);
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
  console.log(employees.toString());
});