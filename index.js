const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const generateTeamHtml = require("./template/index")
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

  ]).then((answers) => {
    const newHireManager = new Manager(answers.name,answers.employeeId,answers.employeeEmail,answers.employeeOfficeNumber)
    console.log(newHireManager);
    teamMember.push(newHireManager)
    addEmployees()
})
};


const addEngineer = () => {
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
        name: "engineerId",
        message: "What is your ID?",
        validate: (engineerId) => {
          if (engineerId) {
            return true;
          } else {
            console.log("try to remind your id");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email?",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("try to remind youremail");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "engineerGitHub",
          message: "What is your office Number",
          validate: (engineerGitHub) => {
            if (engineerGitHub) {
              return true;
            } else {
              console.log("try to remind your office Number");
              return false;
            }
          },
        },
    ]).then(({name,engineerId,engineerEmail,engineerGitHub}) => {
      const newHireEngineer = new Engineer(name,engineerId,engineerEmail,engineerGitHub)
      teamMember.push(newHireEngineer)
      addEmployees()
  })
  };

const addIntern = () => {
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
        name: "internId",
        message: "What is your ID?",
        validate: (internId) => {
          if (internId) {
            return true;
          } else {
            console.log("try to remind your id");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your email?",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("try to remind youremail");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "internSchoolName",
          message: "What is your school name",
          validate: (internSchoolName) => {
            if (internSchoolName) {
              return true;
            } else {
              console.log("try to remind your school name");
              return false;
            }
          },
        },
    ]).then(({name,internId,internEmail,internSchoolName}) => {
      const newHireIntern = new Intern(name,internId,internEmail,internSchoolName)
      teamMember.push(newHireIntern)
      addEmployees()

  })
  };

const addEmployees = () => {
  inquirer.prompt([
    {
        type:"list",
        choices:["Add Engineer","Add Intern","Finish building my team"],
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


const coWorker=()=>{
   fs.writeFileSync("./OUTPUT/index.html",generateTeamHtml(teamMember),function(err,data){
    if(err) throw err;
   })
}

promptManager()