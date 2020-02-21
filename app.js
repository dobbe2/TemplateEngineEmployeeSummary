//import the classes
const Employee= require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');
const mainHTML = require("./templates/index.js");
const managerHTML = require("./templates/manager.js");
const engineerHTML = require("./templates/engineer.js");
const internHTML = require("./templates/intern.js")
const employeeArray = [];


let addMoreEmployees = [
   {
      message: "Do you want to add more employees to your project?",
      name: "employee",
      choices: ["Engineer", "Intern", "No More"],
      type: "list"
   }
]
let EmployeeQuestions = [
   {
      message: "What is your role on the project?",
      name: "role",
      type: "list",
      choices: ["Engineer", "Manager", "Intern", "No"]
   },
   {
      message: "What is your name?",
      name: "name",
      type: "input",
   },
   {
      message: "What is your ID number?",
      name: "ID",
      type: "input"
   },
   {
      message: "What is your email address?",
      name: "email",
      type: "input"
   },
   {
      message: "What is your GitHub Username?",
      name: "github",
      type: "input",
      when: function(answer){
         return answer.role === "Engineer"
      }
   },
   {
      message: "What school are you attending?",
      name: "school",
      type: "input",
      when: function(answer){
         return answer.role === "Intern"
      }
   },
   {
      message: "What is your Office Number?",
      name: "officenumber",
      type: "input",
      when: function(answer){
         return answer.role === "Manager"
      }
   },
];

function getEmployeeData(){
   inquirer.prompt(EmployeeQuestions)
   .then(function(data){
      console.log(data)
      let emp;
      switch (data.role){

         case 'Manager':
             emp = new Manager(data.name,data.ID, data.email,data.officenumber)
            employeeArray.push(emp)
            getEmployeeData()
            break;

         case 'Engineer':
             emp = new Engineer(data.name,data.ID, data.email,data.github)
            employeeArray.push(emp)
            getEmployeeData()
            break;
         case 'Intern':
            emp = new Intern(data.name,data.ID, data.email,data.school)
            employeeArray.push(emp)
            getEmployeeData()
            break;  

         case 'No':
             buildTeam();
             break;
      }
   })
}
getEmployeeData();

function buildTeam(){
   console.log(employeeArray);
   let teamHTML = mainHTML()
   employeeArray.map(emp=>{
      let role = emp.getRole()

      switch(role){
         case 'Manager':
            teamHTML += managerHTML(emp)
            break;

         case 'Engineer':
            teamHTML += engineerHTML(emp)
            break;

         case 'Intern':
            teamHTML += internHTML(emp)
            break;


      }

   })
   teamHTML+= `
   </div>
   </body>
   </html>`
   console.log(teamHTML)

   fs.writeFile("team.html", teamHTML, function(err, result){
         if (err) {
            return console.log(err);
         }
      
      })
}
