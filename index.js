const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');

const templates = require('./src/templates')

const DIST = path.resolve(__dirname, 'dist');
const PATH = path.join(DIST, 'team.html');

const team = [];

function main() {
    createManager().then(answers => {
        const { managerName, managerID, managerEmail, managerOfficeNumber } = answers;
        const manager = new Manager(
            managerName,
            managerID,
            managerEmail,
            managerOfficeNumber,

        )
        team.push(manager)
    });
};

function createManager() {
    console.log('Let\'s start building your team');
    return inquirer
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
        
}

function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberChoice',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I\'ve finished my team']
        }
    ]).then(answer => {
        switch (answer.teamMemberChoice) {
            case 'Engineer':
                break;
            case 'Intern':
                break;
            default: 
                buildTeam();
        }
    })
}

function createHTML(teamArr) {
    const htmlMain = ``;

    teamArr.foreach(teamMember => {
        if(teamMember.getRole() === "manager") {
            htmlMain = htmlMain + templates.managerTemplate(teamMember)
        }
    })
}


function buildTeam() {
    fs.writeFileSync(PATH, createHTML(team), 'utf-8')
}

main()