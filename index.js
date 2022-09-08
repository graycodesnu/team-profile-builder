const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

// TODO: Generate HTML
  // Link to newly gnerated html
const generateHTML = require('./src/template');
  // Create new directory
const output_dir = path.resolve("./teamResults", "newTeam");
const outputPath = path.join(output_dir, "team.html");  

// TODO: Link to lib path and files
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
// const { type } = require('os');

const teamArray = [];

// TODO: Manager inquirer prompts

const addManager = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'Manager Name:',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office Number:',
    },
    // Push to new file when generated
  ]).then(response => {
    console.log(response);
    const manager = new Manager(response.name, response.employeeId, response.email, response.officeNumber);
    teamArray.push(manager);
  // Loops to menu
  addTeamPrompt();
  })
};





// TODO: Create prompt menu
const addTeamPrompt = () => {
return inquirer.prompt([
  {
  type: 'list',
  name: 'addEmployeePrompt',
  message: 'Which type of employee do you want to add?',
  choices: ['Manager', 'Engineer', 'Intern', 'None - I am done adding team members.'],

  // Switch case for prompts based on user input 
  }]).then(function (userChoice) {
  switch(userChoice.addEmployeePrompt) {
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
        createTeam();
    }
  });
};
  
// TODO: Engineer inquirer prompts
const addEngineer = () => {
  console.log('Add a new engineer!');
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Engineer Name:',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Engineer ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email Address:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'GitHub Username:',
    },
  ]).then(response => {
    const engineer = new Engineer(response.name, response.employeeId, response.email, response.officeNumber);
    teamArray.push(engineer);
  // Loops back to menu
  addTeamPrompt();
  });
};

// TODO: Intern inquirer prompts 
const addIntern = () => {
return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Intern Name:',
  },
  {
    type: 'input',
    name: 'employeeId',
    message: 'Employee ID:',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'Email Address:',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Intern School:',
  },
  ]).then(response => {
    const intern = new Intern(response.name, response.employeeId, response.email, response.school);
    teamArray.push(intern);
// Loops back to menu
  addTeamPrompt();
  })
};

// TODO: Generate HTML when "none" option is selected      
const createTeam = () => {
  console.log('Generating Team . . .');

  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir)
}
fs.writeFile(outputPath, generateHTML(teamArray), "utf-8");
}

addManager();