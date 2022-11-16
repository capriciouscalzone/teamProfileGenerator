const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

const team = [];

function main() {
    createManager()
}

function createManager() {
    console.log('Let\'s start building your team');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager name?',

            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the manager\'s id?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the manager\'s email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the manager\'s office?'
            }
        ])
        .then(answers => {
            const { managerName, managerID, managerEmail, managerOfficeNumber } = answers
            const manager = new Manager(
                managerName,
                managerID,
                managerEmail,
                managerOfficeNumber
            )

            team.push(manager)
        })
}

main()