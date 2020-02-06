// npm packages
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const employee = require('./lib/employee');
const engineerCard = require('./lib/employee');
const internCard = require('./lib/employee');
const managerCard = require('./lib/employee');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const fullTeam = [];

// Create a manager
function managerPrompt() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your Managers Name?',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the employee id?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your managers email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your managers office number?',
    },
  ]);
}

function mainPrompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'member',
      message: 'Which type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'I dont want to add any more team members',
      ],
    },
  ]);
}

function prompEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name:',
      name: 'engineerName',
    },
    {
      type: 'input',
      message: 'Enter the id:',
      name: 'enginnerId',
    },
    {
      type: 'input',
      message: 'Enter the email:',
      name: 'engineerEmail',
    },
    {
      type: 'input',
      message: 'Enter the GitHub username:',
      name: 'engineerGithub',
    },
  ]);
}

function prompIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name:',
      name: 'internName',
    },
    {
      type: 'input',
      message: 'Enter the id:',
      name: 'internId',
    },
    {
      type: 'input',
      message: 'Enter the email:',
      name: 'internEmail',
    },
    {
      type: 'input',
      message: 'Enter the school:',
      name: 'internSchool',
    },
  ]);
  managerPrompt();
}
