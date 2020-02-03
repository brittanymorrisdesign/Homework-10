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

// Puts output into the 'output' folder
const outputPath = path.resolve(__dirname, 'output', 'team.html');

// Create a manager
 managerPrompt = () => {
  console.log('Who would you like on your team?');
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
      const { managerName, managerId, managerEmail, managerNumber } = answers;
      const managerObject = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerNumber
      );

      const managerCardHtml = managerCard(managerObject);

      teamMember.push(managerCardHtml);
      createTeam();
    });
};

const promptUserEngineer = () => {
    console.log("Create a new engineer profile.")
    return inquirer
      .prompt([
        {
            type: "input",
            message: "Enter the name:",
            name: "name",
        }, 
        {
            type: "input",
            message: "Enter the id:",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the email:",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the GitHub username:",
            name: "github",
}

const promptUserIntern = () => {
    console.log("Create a new intern profile.")
    return inquirer
      .prompt([
        {
            type: "input",
            message: "Enter the name:",
            name: "name",
        }, 
        {
            type: "input",
            message: "Enter the id:",
            name: "id",
        },
        {
            type: "input",
            message: "Enter the email:",
            name: "email",
        },
        {
            type: "input",
            message: "Enter the school:",
            name: "school",
        }
      ]);
}



fs.writeFileSync(outputPath), "utf-8");

managerPrompt();