// npm packages
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const fullTeam = [];

// Create a manager
const managerPrompt = () => {
  console.log('You must create 1 manger profile.');
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your Managers Name?',
      validate(value) {
        const valid = isNaN(value);
        return valid || 'Please enter a name.';
      },
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the employee id?',
      validate(value) {
        const valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a name.';
      },
    },
    {
      type: 'input',
      name: 'managerEmail',
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
  ]);
};

(async function() {
  try {
    // Wait on user's data on 1 manager and then store input into manager object
    const managerData = await managerPrompt();
  } catch (err) {
    console.log(err);
  }
})();
