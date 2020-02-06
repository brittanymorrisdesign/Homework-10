const path = require('path');
const util = require('util');
const fs = require('fs');

// Puts output into the 'output' folder
const outputPath = path.resolve(__dirname, 'output', 'team.html');
const templatesDir = path.resolve(__dirname, '../templates');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

async function render(employees) {
  const html = [];

  const [
    managerTemplate,
    internTemplate,
    engineerTemplate,
    mainTemplate
  ] = await Promise.all([
    readFile(path.resolve(templatesDir, 'manager.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'intern.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'engineer.html'), 'utf8'),
    readFile(path.resolve(templatesDir, 'main.html'), 'utf8')
  ]);

  html.push(
    employees
      .filter(employee => employee instanceof Manager)
      .map(employee => {
        let template = managerTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join('')
  );

  html.push(
    employees
      .filter(employee => employee instanceof Engineer)
      .map(employee => {
        let template = engineerTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join('')
  );

  html.push(
    employees
      .filter(employee => employee instanceof Intern)
      .map(employee => {
        let template = internTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join('')
  );

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  await writeFile(
    path.resolve(outputDir, 'index.html'),
    replacePlaceholder(mainTemplate, 'body', html.join(''))
  );
}
function replacePlaceholder(template, target, value) {
  const regex = new RegExp('{{ ' + target + ' }}', 'gm');
  const newTemplate = template.replace(regex, value);
  return newTemplate;
}

module.exports = render;