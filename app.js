// npm packages
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/Employee');

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

function engineerPrompt() {
  return inquirer.prompt([
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

function promptIntern() {
  return inquirer.prompt([
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
}

function mainPrompt() {
  return inquirer
    .prompt([
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
    ])
    .then(answer => {
      if (answer.type === 'Engineer') {
        engineerPrompt();
      } else if (answer.type === 'Intern') {
        promptIntern();
      } else {
        generateHTML(fullTeam);
      }
    });
}

managerPrompt();
