const newlyGeneratedTeam = (team) => {
  console.log(team);

// TODO: Create array for response data to push to
const htmlTeamArray = [];

// TODO: Create functions for each employees position to append data to HTML
const newManager = manager => {
  console.log(manager);
  let newManager = `
  <div class="card" style="width: 18rem;">
    <div> class="card-header">
    ${manager.name} 
    <br/>
    <i class="fas fa-mug-hot"></i>
    Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: 
      <span id="email">
        <a href="mailto:${manager.email}"> ${manager.email}</a>
      </span>
      </li>
      <lis class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  `;
  htmlTeamArray.push(newManager);
}

const newEngineer = engineer => {
  console.log(engineer);
  let newEngineer = `
  <div class="card" style="width: 18rem;">
    <div> class="card-header">
    ${engineer.name} 
    <br/>
    <i class="fas fa-mug-hot"></i>
    Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: 
      <span id="email">
        <a href="mailto:${engineer.email}"> ${engineer.email}</a>
      </span>
      </li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a>
      </li>
      </ul>
    </div>
  `;
  htmlTeamArray.push(newEngineer);


}

const newIntern = intern => {
  console.log(intern);
  let newIntern = ` 
  <div class="card" style="width: 18rem;">
      <div class="card-header">
     ${intern.name} <br/>
     <i class="fas fa-user-graduate"></i>Intern</div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: 
      <span id="email">
      <a href="mailto:${intern.email}">${intern.email}</a>
      </span></li>
      <li class="list-group-item">School: ${intern.school}</li>
      </ul>
  </div>
  `;
  htmlTeamArray.push(newIntern);
}

// TODO: For loop for all positions
for (let i = 0; i < team.length; i++) {
  if (team[i].getRole() === "Manager") {
      newManager(team[i]);
  }
  if (team[i].getRole() === "Engineer") {
      newEngineer(team[i]);
  }
  if (team[i].getRole() === "Intern") {
      newIntern(team[i]);
  }
 }

 // TODO: Join blocks
 return htmlTeamArray.join('');

}

// TODO: Export 
module.exports = team => {
  return `
// TODO: Scaffolding for team data
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main> 
    <div class="d-flex justify-content-around card-space"> ${newlyGeneratedTeam(team)} </div>
    </main>
     
</body>
</html>

`;
}
