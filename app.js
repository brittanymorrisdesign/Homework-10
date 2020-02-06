// npm packages
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const path = require('path');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Cards
const managerCard = require('./templates/managerhtml');
const engineerCard = require('./templates/engineerhtml');
const internCard = require('./templates/internhtml');
const generateHtml = require('./templates/main');

// Places Html in output folder
const outputPath = path.resolve(__dirname, 'output', 'gnerateTeam.html');

const fullTeam = [];

// Create a manager
function managerPrompt() {
  console.log('Add a manager');
  return inquirer
    .prompt([
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
    ])
    .then(answers => {
      const { managerName, managerId, managerEmail, officeNumber } = answers;
      const managerObj = new Manager(
        managerName,
        managerId,
        managerEmail,
        officeNumber
      );

      const managerCardHtml = managerCard(managerObj);

      fullTeam.push(managerCardHtml);
      mainPrompt();
    });
}

// Main App
function mainPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'userPrompt',
        message: 'What would you like to do?',
        choices: [
          'Add an Engineer',
          'Add an Intern',
          "I'm all done. Let's see my team!",
        ],
      },
    ])
    .then(answers => {
      switch (answers.userPrompt) {
        case 1:
          'Add an Engineer';
          {
            engineerPrompt();
            break;
          }
        case 2:
          'Add an Intern';
          {
            internPrompt();
            break;
          }
        case 3:
          'Show my team!';
          {
            generateTeam();
            break;
          }
      }
    });
}

// Create an engineer
function engineerPrompt() {
  console.log('Add a new Engineer');
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the name:',
        name: 'engineerName',
      },
      {
        type: 'input',
        message: 'Enter the id:',
        name: 'engineerId',
      },
      {
        type: 'input',
        message: 'Enter the email:',
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'engineerGithub',
      },
    ])
    .then(answers => {
      const {
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub,
      } = answers;
      const engineerObj = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      const engineerCardHtml = engineerCard(engineerObj);
      fullTeam.push(engineerCardHtml);
      mainPrompt();
    });
}

// Create an intern
function internPrompt() {
  console.log('Add a new intern');
  return inquirer
    .prompt([
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
    ])
    .then(answers => {
      const { internName, internId, internEmail, internSchool } = answers;
      const internObj = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      const internCardHtml = internCard(internObj);

      fullTeam.push(internCardHtml);
      mainPrompt();
    });
}

function generateTeam() {
  const createTeam = fullTeam.join('');

  fs.writeFileSync(outputPath, generateHtml(createTeam, 'utf-8'));
}

managerPrompt();
