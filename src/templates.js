

const engineerTemplate = engineer => {
    const name = engineer.name;
    const id = engineer.employee_id;
    const email = engineer.email;
    const role = engineer.getRole();
    const gitHub = engineer.getGitHub();
    
    return `
    <div class="card text-bg-danger mb-3 mx-auto shadow-lg p-3 mb-5 rounded" style="max-width: 18rem;">
  <div class="card-header">${role.toUpperCase()} <br> Employee ID: ${id}</div>
  <div class="card-body">
    <h5 class="card-title">Engineer: ${name}</h5>
    <p class="card-text">Email:${email}<br> GitHub: ${gitHub}</p>
  </div>
</div>
    `
}

const managerTemplate = manager => {
    const name = manager.name;
    const id = manager.employee_id;
    const email = manager.email
    const officeNumber = manager.getOfficeNumber();
    const role = manager.getRole()
    
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
</head>
<body>
    
</body>
</html>
    
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<div class="text-bg-secondary sticky-top p-3"></div>


<div class="card text-bg-danger mb-3 mx-auto shadow-lg p-3 mb-5 rounded" style="max-width: 18rem;">
  <div class="card-header">${role.toUpperCase()} <br> Manager ID: ${id}</div>
  <div class="card-body">
    <h5 class="card-title">Manager: ${name}</h5>
    <p class="card-text">Email:${email}<br>
    Office number: ${officeNumber}</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    `
}


const internTemplate = intern => {
    const name = intern.name;
    const id = intern.employee_id;
    const email = intern.email;
    const role = intern.getRole();
    const school = intern.getSchool();
    
    return `
    <div class="card text-bg-danger mb-3 mx-auto shadow-lg p-3 mb-5 rounded" style="max-width: 18rem;">
  <div class="card-header">${role.toUpperCase()} <br> Employee ID: ${id}</div>
  <div class="card-body">
    <h5 class="card-title">Intern: ${name}</h5>
    <p class="card-text">Email:${email}<br> School: ${school}</p>
  </div>
</div>
    `
}



module.exports = {engineerTemplate, managerTemplate, internTemplate}