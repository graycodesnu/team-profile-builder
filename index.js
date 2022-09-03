const inquirer = require('inquirer');
const fs = require('fs');

// Generate HTML
const generateHTML = require('./src/template.js');

// Link js files to HTML 

const Engineer = require('./lib/engineer.js');

const Intern = require('./lib/intern.js');

const Manager = require('./lib/manager');
const { type } = require('os');

const teamArray = [];

// TODO: Create inquirer prompts
const addTeam = () => {

inquirer
  .prompt([
    {
      type: 'list',
      name: 'addEmployeePrompt',
      message: 'Which type of employee do you want to add?',
      choices: ['Manager', 'Engineer', 'Intern', 'None - I am done adding team members.'],

      // Switch case for prompts based on user input 
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case 'Manager':
          addManager();
          break;
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;

          default:
            generateTeam();
      }
    })
  

// TODO: Manager inquirer prompts

    function addManager() {
      inquirer
        .prompt([

          {
            type: 'input',
            name: 'manager name',
            message: 'Manager Name:',
          },
          {
            type: 'input',
            name: 'employee id',
            message: 'Employee ID:',
          },
          {
            type: 'input',
            name: 'email address',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'office number',
            message: 'Office Number:',
          },
        ])
        // Loops back to menu
        .then(addTeam);
      }

// TODO: Engineer inquirer prompts
      function addEngineer() {
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'engineer name',
            message: 'Engineer Name:',
          },
          {
            type: 'input',
            name: 'engineer id',
            message: 'Engineer ID:',
          },
          {
            type: 'input',
            name: 'email address',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'github username',
            message: 'GitHub Username:',
          },
        ])
        // Loops back to menu
        .then(addTeam);
      }


// TODO: Intern inquirer prompts 
      function addIntern() {
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'intern name',
            message: 'Intern Name:',
          },
          {
            type: 'input',
            name: 'employee id',
            message: 'Employee ID:',
          },
          {
            type: 'input',
            name: 'email address',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'intern school',
            message: 'Intern School:',
          },
        ])
        // Loops back to menu
        .then(addTeam);
      }

// TODO: Generate HTML when "none" option is selected      
      const generateTeam = () => {
        console.log('Generating Team . . .')
      }
};

addTeam();