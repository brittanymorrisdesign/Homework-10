// npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const outputPath = path.resolve(__dirname, 'output', 'team.html');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderHtml = require('./lib/generateHTML');
// const renderHtml = {
//   generateHTMLPage,
//   generateEmployeeHTML,
// }

const writeFileAsync = util.promisify(fs.writeFile);

const fullTeam = [];

// Create a manager
const promptManager = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is your Managers name?',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter a name.';
    },
  },
  {
    type: 'input',
    name: 'mnagerId',
    message: 'What is the employee id?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number.';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your managers email?',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter an email.';
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your managers office number?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number.';
    },
  },
];

// Create an engineer
const promptEngineer = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter a name.';
    },
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the id:',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number.';
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter an email.';
    },
  },

  //Would you like to add another engineer? 
  Yes 
  no 
  {
    type: 'input',
    name: 'extraInformation',
    message: 'Enter GitHub username:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter a username.';
    },
  },
];

// Create an intern
const promptIntern = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter a name.';
    },
  },
  {
    type: 'input',
    name: 'internId',
    message: 'Enter the Id:',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number.';
    },
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'Enter the email:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter an email.';
    },
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'Enter the school:',
    validate(value) {
      const valid = isNaN(value);
      return valid || 'Please enter a school.';
    },
  },
];

// Additional Employees
const promptMember = {
  type: 'list',
  name: 'userPrompt',
  message: 'What would you like to do?',
  choices: ['Add an Engineer', 'Add an Intern', 'Show my Team!'],
};

// Create a team
const createNewTeamMember = member => {
  switch (member) {
    case 'Manager':
      inquirer
        .prompt(promptManager)
        .then(response => {
          const manager = new Manager(
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.officeNumber
          );
          // buildTeam(manager);
          createNewTeamMember('Add an Engineer');
        })
        .catch(err => {
          throw err;
        });
      break;
    case 'Add an Engineer':
      inquirer
        .prompt(promptEngineer)
        .then(response => {
          const engineer = new Engineer(
            response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGithub
          );
         // if no
          createNewTeamMember('Add an Intern');
          // buildTeam(engineer);
        })
        .catch(err => {
          throw err;
        });
      break;
    case 'Add an Intern':
      inquirer
        .prompt(promptIntern)
        .then(response => {
          const intern = new Intern(
            response.internName,
            response.internId,
            response.internEmail,
            response.internSchool
          );
          buildTeam(intern);
        })
        .catch(err => {
          throw err;
        });
      break;
    case 'Show my Team!':
      buildTeam();
      break;
  }
};

// Main App
const mainApp = () => {
  console.log('Please build your team');
  createNewTeamMember('Manager');
};

// Create an Html Document
function buildTeam() {
  // write team members to a html file
  fs.writeFileSync(outputPath, renderHtml.generateHTMLPage(fullTeam), 'utf-8');
}

mainApp();
