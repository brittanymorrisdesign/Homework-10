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

// Puts output into the 'output' folder
const outputPath = path.resolve(__dirname, 'output', 'team.html');

const fullTeam = [];

// Create a manager
managerPrompt = () => {
  console.log('Who would you like on your team?');
  return inquirer
    .prompt([{
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
    .then((data) => {

      const managerObject = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
      console.log(managerObject)
      const managerCardHtml = managerCard(managerObject);
      fullTeam.push(managerCardHtml);
      chooseTeam();
    });
};


const chooseTeam = () => {
    inquirer.prompt([{
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I dont want to add any more team members"]
      }])
      .then((data) => {
          if (data.member === "Engineer") {
            promptUserEngineer();

          } else if (data.member === "Intern") {

            promptUserIntern();
          } else {
            console.log("Look in your output folder to see your team!")
            const outputPage = html.generateHTML(team_cards);
            fs.writeFile("./output/generateteam.html", outputPage, (err) => {
                if (err) throw err;

              }
            }

          }


          promptUserEngineer = () => {
              console.log("Create a new engineer profile.")
              return inquirer
                .prompt([{
                      type: "input",
                      message: "Enter the name:",
                      name: "engineerName",
                    },
                    {
                      type: "input",
                      message: "Enter the id:",
                      name: "enginnerId",
                    },
                    {
                      type: "input",
                      message: "Enter the email:",
                      name: "engineerEmail",
                    },
                    {
                      type: "input",
                      message: "Enter the GitHub username:",
                      name: "engineerGithub",
                    }.then((data) => {
                    let newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                    // console.log(newIntern);
        
                    engineerCard = genCard.genInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school);
                    

                    promptUserIntern = () => {
                      console.log("Create a new intern profile.")
                      return inquirer
                        .prompt([{
                            type: "input",
                            message: "Enter the name:",
                            name: "internName",
                          },
                          {
                            type: "input",
                            message: "Enter the id:",
                            name: "internId",
                          },
                          {
                            type: "input",
                            message: "Enter the email:",
                            name: "internEmail",
                          },
                          {
                            type: "input",
                            message: "Enter the school:",
                            name: "internSchool",
                          }.then((data) => {
                          let newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
                          // console.log(newIntern);
              
                          engineerCard = genCard.genInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school);
                    }
                  ]);  


                    async function combineAnimals() {
                      try {
                        const hamster = await readFileAsync("hamster.json", "utf8");
                        const dog = await readFileAsync("dog.json", "utf8");
                        const cat = await readFileAsync("cat.json", "utf8");
                        const goldfish = await readFileAsync("goldfish.json", "utf8");

                        const animalJSON = [hamster, dog, cat, goldfish].map(JSON.parse);

                        await writeFileAsync(
                          "combined.json",
                          JSON.stringify(animalJSON, null, 2),
                          "utf8"
                        );

                        console.log("Successfully wrote to 'combined.json' file");
                      } catch (err) {
                        console.log(err);
                      }
                    }

                    combineAnimals();


                    managerPrompt();
                    promptUserIntern();
                    promptUserEngineer();