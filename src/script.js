const Employee = require("../lib/Employee");
const Team = require("../lib/Team");
var team = document.querySelector('#team');



for (let i = 0; i < Employees.length; i++) {
  const { name, id, email, position, email } = Employees[i]
  var card = document.createElement('div');
  card.setAttribute('class', 'col-2 mx-auto ');
  team.appendChild(card);
  var positionEl = document.createElement('h3');
  positionEl.innerHTML = position;
  card.appendChild(positionEl);
  var nameEl = document.createElement('h6');
  nameEl.innerHTML = name;
  card.appendChild(nameEl);
  var idEl = document.createElement('p');
  idEl.innerHTML = id;
  card.appendChild(idEl);
  var emailEl = document.createElement('a')
  emailEl.src = email;
  //make it a link
  card.appendChild(emailEl);
  //make a if else!! for manager,engineer, intern!!!


}