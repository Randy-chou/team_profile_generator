const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const writeHTML = require("./src/htmlGenerator");
const { write } = require("fs");

let members = []

let questions = [
    {
        type: 'input',
        message: 'Enter manager name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter employee ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter office number:',
        name: 'office',
    },
    {
        type: 'list',
        message: 'Add another member?:',
        name: 'choice',
        choices: ["add engineer", "add intern", "finish building team"]
    }
]

function buildteam(data){
    if(data == "finish building team"){
        //create html file here
        writeHTML(members);
    }else if(data == "add intern"){
        questions[0].message = 'Enter intern name:';
        questions[3] = {
            type: 'input',
            message: 'Enter school:',
            name: 'school',
        }
        inquirer.prompt(questions).then((data) =>{
            members.push(new Intern(data.name, data.id, data.email, data.school));
            return data.choice
        }).then(buildteam);
    }else if(data == "add engineer"){
        questions[0].message = 'Enter engineer name:';
        questions[3] = {
            type: 'input',
            message: 'Enter github username:',
            name: 'username',
        }
        inquirer.prompt(questions).then((data) =>{
            members.push(new Engineer(data.name, data.id, data.email, data.username));
            return data.choice
        }).then(buildteam);
    }

}

function init(){
    inquirer.prompt(questions).then((data) =>{
        members.push(new Manager(data.name, data.id, data.email, data.office));
        return data.choice
    }).then(buildteam);
}

init();