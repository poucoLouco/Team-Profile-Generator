const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/Enginner");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const { ADDRGETNETWORKPARAMS } = require("dns");
// const generateSite = require("ТРЕБА");
// const path = require("path");
// OUTPUT_DIR = path.resolve(__dirname, "output");
// outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMember = [];

const promptManager = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("try to remind your name");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "employeeId",
      message: "What is your ID?",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("try to remind your id");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is your email?",
      validate: (employeeEmail) => {
        if (employeeEmail) {
          return true;
        } else {
          console.log("try to remind youremail");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "employeeOfficeNumber",
        message: "What is your office Number",
        validate: (employeeOfficeNumber) => {
          if (employeeOfficeNumber) {
            return true;
          } else {
            console.log("try to remind your office Number");
            return false;
          }
        },
      },
  ]).then(({name,employeeId,employeeEmail,employeeOfficeNumber}) => {
    const newHireManager = new Manager(name,employeeId,employeeEmail,employeeOfficeNumber)
    teamMember.push(newHireManager)
    addEmployees()
})
};

const addEmployees = () => {
  inquirer.prompt([
    {
        type:"list",
        choices:["Add Engineer","Add Intern","Generate HTML & exit"],
        message:"What would you like to do?",
        name:"menu"
    }
  ]).then(response => {
    switch(response.menu){
        case "Add Engineer":
            addEngineer();
            break;
        case "Add Intern":
            addIntern();
            break;
        default:
            coWorker()
    }
  })
}




promptManager()