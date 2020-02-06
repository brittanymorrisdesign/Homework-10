const commonQuestions = [
  {
    type: 'input',
    message: 'Please enter their name.',
    name: 'name',
    validate(value) {
      if (value.trim().length > 0) {
        return true;
      }
      return 'Please enter a valid name.';
    },
    filter(value) {
      return value.trim();
    },
  },
  {
    type: 'number',
    message: 'What is their ID number?',
    name: 'idNumber',
    validate(value) {
      if (Number.isNaN(Number(value))) {
        return 'Please enter a valid ID number.';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'What is their email address?',
    name: 'email',
    // TODO: email validation
  },
];

const manager = [
  {
    type: 'input',
    message: "Please enter the lead manager's name.",
    name: 'name',
    validate(value) {
      if (value.trim().length > 0) {
        return true;
      }
      return 'Please enter a valid name.';
    },
  },
  ...commonQuestions.slice(1),
  {
    type: 'number',
    message: 'What is their office number?',
    name: 'uniqueProp',
    validate(value) {
      if (Number.isNaN(Number(value))) {
        return 'Please enter a valid office number.';
      }
      return true;
    },
  },
];

const engineer = [
  ...commonQuestions,
  {
    type: 'input',
    message: 'What is their github username?',
    name: 'uniqueProp',
    // TODO: proper url validation
  },
];

const intern = [
  ...commonQuestions,
  {
    type: 'input',
    message: "What is their school's name?",
    name: 'uniqueProp',
    // TODO: proper url validation
  },
];

const nextMember = [
  {
    type: 'list',
    message: "What is the next team member's position?",
    choices: [
      'Engineer',
      'Intern',
      'No more team members. Build the team page.',
    ],
    name: 'position',
    filter(value) {
      return value.toLowerCase();
    },
  },
];

module.exports = { manager, engineer, intern, nextMember };
