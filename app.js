// npm packages
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Cards
const managerCard = require('./templates/managerhtml');
const engineerCard = require('./templates/engineerhtml');
const internCard = require('./templates/internhtml');

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
      promptMain();
    });
}

// Main App
function promptMain() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: [
          'Add an Engineer',
          'Add an Intern',
          "I'm all done. Let's see my team!",
        ],
      },
    ])
    .then(answers => {
      // console.log(answers.userChoice);
      // create a switch statement to choose between engineer, intern, or build team
      switch (answers.userChoice) {
        case 'Add an Engineer': {
          engineerPrompt();
          break;
        }
        case 'Add an Intern': {
          internPrompt();
          break;
        }
        case "I'm all done. Let's see my team!": {
          promptMain();
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
      // console.log(engineerObj);
      const engineerCardHtml = engineerCard(engineerObj);
      // console.log(engineerCardHtml);
      fullTeam.push(engineerCardHtml);
      promptMain();
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
      promptMain();
    });
}

function buildTeam() {
  // remove commas from the array
  const joinedTeam = fullTeam.join('');

  fs.writeFileSync(outputPath, mainRender(joinedTeam), 'utf-8');
}

managerPrompt();
