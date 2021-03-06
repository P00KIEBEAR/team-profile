const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager");
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer')


// 
function generatePage(Employees) {
  //const data = JSON.stringify(Employees)
  //console.log(Employees);
  const managers = Employees.filter(Employee => Employee.position === 'Manager');
  const engineers = Employees.filter(Employee => Employee.position === 'Engineer');
  const interns = Employees.filter(Employee => Employee.position === 'Intern');

  const internForm = interns.map(internForm => {
    console.log(internForm.getSchool())
    internForm = `<div class="col-2 mx-auto">
  <h3>${internForm.getPosition()}</h3>
  <p>${internForm.getName()}</p>
  <p>ID:${internForm.getId()}</p>
   <a href="mailto:${internForm.getEmail()}"> Email: ${internForm.getEmail()}</a>
   <p>School:${internForm.getSchool()}<p>
   </div>
   `
    return internForm
  })
  const engineerForm = engineers.map(engineerForm => {

    engineerForm = `<div class="col-2 mx-auto">
  <h3>${engineerForm.getPosition()}</h3>
  <p>${engineerForm.getName()}</p>
  <p>ID:${engineerForm.getId()}</p>
   <a href="mailto:${engineerForm.getEmail()}"> Email: ${engineerForm.getEmail()}</a>
   <a href="https://github.com/${engineerForm.getGithub()}"><img src="./src/images/github.png" height="36px" /></a>
   </div>
   `
    return engineerForm
  })
  const managerForm = managers.map(managerForm => {

    managerForm = `<div class="col-2 mx-auto">
  <h3>${managerForm.getPosition()}</h3>
  <p>${managerForm.getName()}</p>
  <p>ID:${managerForm.getId()}</p>
   <a href="mailto:${managerForm.getEmail()}"> Email: ${managerForm.getEmail()}</a>
      <p>Office Number#${managerForm.getOfficeNumber()}<p>
   </div>
   `
    return managerForm
  })

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./src/style.css" />
    <title>MY TEAM</title>
  </head>
  
    <body>
       <header class="hero">
      <h1 class="app-title">My Team</h1>
      
    </header>
       <main class="flex-row justify-space-between">
       <div class="container m-0">
            <div class="row card-5 " id="team">
            ${managerForm.join('\n')}
            ${engineerForm.join('\n')}
            ${internForm.join('\n')}
            </div>
       </div>
 
 
      </main>
     <script src="/.src/script.js"></script>
    </body>
    </html>
        
    `
};
//${Employees.length ? '* ' + (Employees) : ''}
module.exports = generatePage;