// npm packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHtml = require('./lib/generateHTML');

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
          generateTeam(manager);
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
          generateTeam(engineer);
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
          generateTeam(intern);
        })
        .catch(err => {
          throw err;
        });
      break;
    case 'Show my Team!':
      genererateHtml();
      break;
  }
};

// Create an Html Document
const generateTeam = employee => {
  const html = generateHtml.generateTeam(employee);

  const htmlString = employee.getRole().toLowerCase();
  fs.writeFile(`./templates/${htmlString}.html`, html, function(err) {
    if (err) {
      throw err;
    }
  });
  fullTeam.push(html);
  addMember();
};

// Add a Team member
const addMember = () => {
  inquirer
    .prompt(newTeamMember)
    .then(response => {
      createNewTeamMember(response.newTeamMember);
    })
    .catch(err => {
      console.log(err);
    });
};

// Create an Html Document
const genererateHtml = () => {
  const outputPage = generateHtml.generateHTMLPage();
  const teamHTML = fullTeam.join('\n');
  fs.writeFile(
    `./output/team.html`,
    `${mainHTML + teamHTML}\n</div>\n</div>\n</body>\n</html>`,
    function(err) {
      if (err) {
        throw err;
      }
    }
  );
};

// Main App
const mainApp = () => {
  console.log('Please build your team');
  createNewTeamMember('Manager');
};

mainApp();
