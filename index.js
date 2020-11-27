
const Employees = require('./lib/Team');
const fs = require('fs');
const pageHTML = require('http')

Employees = getEmployees().then(() => {
  fs.writeFile('./index.html', pageHTML, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Page created! Check out index.html in this directory to see it!');

    fs.copyFile('../src/style.css', '../dist/style.css', err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Style sheet copied successfully!');
    });
  });
})
