const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Generate HTML
  // Link javascript to newly gnerated html
const generateHTML = require('./src/template.js');
  // Create new directory
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// TODO: Link to lib path and files
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager');


// ? const { type } = require('os');

const teamArray = [];

// TODO: Create inquirer prompts
const addTeam = () => {

return inquirer.prompt([
    {

// TODO: Prompt menu
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
            generateTeamHTML();
      }
    })
  

// TODO: Manager inquirer prompts

    function addManager() {
      inquirer
        .prompt([

          {
            type: 'input',
            name: 'name',
            message: 'Manager Name:',
          },
          {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID:',
          },
          {
            type: 'input',
            name: 'emailAddress',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number:',
          },
          // Push to new file when generated
        ]).then(response => {
          const manager = new Manager(response.name, response.employeeID, response.emailAddress, response.officeNumber);
          teamArray.push(manager);
        // Loops back to menu
        addTeam();
        })
      }

// TODO: Engineer inquirer prompts
      function addEngineer() {
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Engineer Name:',
          },
          {
            type: 'input',
            name: 'employeeID',
            message: 'Engineer ID:',
          },
          {
            type: 'input',
            name: 'emailAddress',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'githubUsername',
            message: 'GitHub Username:',
          },
        ]).then(response => {
          const engineer = new Engineer(response.name, response.employeeID, response.emailAddress, response.officeNumber);
          teamArray.push(engineer);
        // Loops back to menu
        addTeam();
        })
      }


// TODO: Intern inquirer prompts 
      function addIntern() {
        inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Intern Name:',
          },
          {
            type: 'input',
            name: 'employeeID',
            message: 'Employee ID:',
          },
          {
            type: 'input',
            name: 'emailAddress',
            message: 'Email Address:',
          },
          {
            type: 'input',
            name: 'internSchool',
            message: 'Intern School:',
          },
        ]).then(response => {
          const intern = new Intern(response.name, response.employeeID, response.emailAddress, response.officeNumber);
          teamArray.push(intern);
        // Loops back to menu
        addTeam();
        })
      }

// !
// ! previously team html 
// !

};

// TODO: Generate HTML when "none" option is selected      
const generateTeamHTML = () => {
  console.log('Generating Team . . .');


if(!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdir(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateHTML(teamArray), 'utf-8');
};

addTeam();