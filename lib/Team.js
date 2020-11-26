const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generatePage = require('../src/page-template');
const fs = require('fs');


const Employees = [];
// Create an async function
const getEmployees = async () => {
  // create a loop to collect names
  while (true) {
    // wait for the user to give a name
    const Employee = await inquirer.prompt([
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
    if (Employee.position === 'Manager') {

      await inquirer.prompt({

        type: 'text',
        name: 'officeNumber',
        message: 'What is your office number?'
      }).then(({ officeNumber }) => {

        this.manager = new Manager(Employee.name, Employee.id, Employee.email, Employee.position, officeNumber),

          Employees.push(this.manager);
        console.log(this.manager)
      })
    } else if (Employee.position === 'Engineer') {
      await inquirer.prompt({
        type: 'text',
        name: 'github',
        message: 'What is your github user name?'
      }).then(({ github, }) => {
        this.Engineer = new Engineer(Employee.name, Employee.id, Employee.email, Employee.position, github)
      })

      Employees.push(this.Engineer);


    } else {
      await inquirer.prompt({
        type: 'text',
        name: 'school',
        message: 'What is your school?'
      }).then(({ school }) => {

        this.Intern = new Intern(Employee.name, Employee.id, Employee.email, Employee.position, school)
      })

      Employees.push(this.Intern);

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
  fs.writeFile('../team.html', generatePage(Employees))
  //  console.log(Employees);
})
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

