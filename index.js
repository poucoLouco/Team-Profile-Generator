const inquirer = require("inquirer");
const fs = require("fs"); 
const Engineer = require("./Enginner");
const Intern = require("./Intern");
const Manager = require("./Manager");
const generateSite = require("ТРЕБА");
const path = require("path");
OUTPUT_DIR = path.resolve(__dirname, "output");
outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMember = [];


const promptManager = () =>{
    return inquirer.prompt([
    {
        
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else{
                    console.log('try to remind your name');
                    return false;
                }
            }
}

{
        
    type: 'input',
    name: 'employeeId',
    message: 'What is your ID?',
    validate: employeeId => {
        if (employeeId) {
            return true;
        }else{
            console.log('try to remind your name');
            return false;

        }
    }

    {
        
        type: 'input',
        name: 'employeeId',
        message: 'What is your ID?',
        validate: employeeId => {
            if (employeeId) {
                return true;
            }else{
                console.log('try to remind your name');
                return false;
}
    ])}
