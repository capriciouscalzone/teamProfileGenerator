const engineerTemplate = engineer => {
    return ``
}

const managerTemplate = manager => {
    const name = manager.name;
    const id = manager.employee_id;
    
    return `
<div>Manager: ${name}<div>
<div>Manager ID ${id}<div>
    `
}



module.exports = {engineerTemplate, managerTemplate}