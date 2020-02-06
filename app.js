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
const managerPrompt = () => {
  console.log('Add a manager');
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
};

// Create an engineer
const engineerPrompt = () => {
  console.log('Add a new Engineer');
  return inquirer.prompt([
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
  ]);
};

// Create an intern
const internPrompt = () => {
  console.log('Add a new intern');
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
};

(async function() {
  try {
    // Manager info
    const managerData = await managerPrompt();
    const userManagerName = managerData.managerName;
    const userManagerId = managerData.managerId;
    const userManagerEmail = managerData.managerEmail;
    const userOfficeNumber = managerData.officeNumber;
    const newmanager = new Manager(
      userManagerName,
      userManagerId,
      userManagerEmail,
      userOfficeNumber
    );
  } catch (err) {
    console.log(err);

    // Engineer Info
    for (let i = 0; i < fullTeam.length; i++) {
      const engineerData = await engineerPrompt();
      const userEngineerName = engineerData.engineerMame;
      const userEngineerId = engineerData.engineerId;
      const userEngineerEmail = engineerData.engineerEmail;
      const userEngineerGithub = engineerData.engineergithub;
      const newEngineer = new Engineer(
        userEngineerName,
        userEngineerId,
        userEngineerEmail,
        userEngineerGithub
      );
      fullTeam.push(newEngineer);
    }

    // Intern info
    for (let i = 0; i < fullTeam; i++) {
      const internData = await internPrompt();
      const userinternName = internData.internName;
      const userinternId = internData.internId;
      const userinternEmail = internData.internEmail;
      const userinternSchool = internData.internSchool;
      const newIntern = new Intern(
        userinternName,
        userinternId,
        userinternEmail,
        userinternSchool
      );
      fullTeam.push(newIntern);
    }
  }
})();
