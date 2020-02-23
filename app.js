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

//Initial question, if answered no, HTML is generated
let addEmployees = [
   {
      message: "Do you want to add employees to your project?",
      name: "newEmp",
      choices: ["Yes", "No"],
      type: "list"
   }
]

//Questions to get the data for each Employee type
let EmployeeQuestions = [
   {
      message: "What is their role on the project?",
      name: "role",
      type: "list",
      choices: ["Engineer", "Manager", "Intern"]
   },
   {
      message: "What is their name?",
      name: "name",
      type: "input",
   },
   {
      message: "What is their ID number?",
      name: "ID",
      type: "input"
   },
   {
      message: "What is their email address?",
      name: "email",
      type: "input"
   },
   {
      message: "What is their GitHub Username?",
      name: "github",
      type: "input",
      when: function(answer){
         return answer.role === "Engineer"
      }
   },
   {
      message: "What school are they attending?",
      name: "school",
      type: "input",
      when: function(answer){
         return answer.role === "Intern"
      }
   },
   {
      message: "What is their Office Number?",
      name: "officenumber",
      type: "input",
      when: function(answer){
         return answer.role === "Manager"
      }
   },
];

//user response either gets more employees, or generates HTML
function addMoreEmployees(){
   inquirer.prompt(addEmployees)
   .then(function(data){
      if (data.newEmp === "Yes"){
         getEmployeeData();
      }
      else{
         buildTeam();
      }
   })
}

//this function gets all data about employee and saves into employee array
function getEmployeeData(){
   inquirer.prompt(EmployeeQuestions)
   .then(function(data){
      let emp;
      switch (data.role){

         case 'Manager':
             emp = new Manager(data.name,data.ID, data.email,data.officenumber)
            employeeArray.push(emp)
            addMoreEmployees()
            break;

         case 'Engineer':
             emp = new Engineer(data.name,data.ID, data.email,data.github)
            employeeArray.push(emp)
            addMoreEmployees()
            break;

         case 'Intern':
            emp = new Intern(data.name,data.ID, data.email,data.school)
            employeeArray.push(emp)
            addMoreEmployees()
            break;  
      }
   })
}

//the call to start the app
addMoreEmployees();

//here is where the employee array is turned into html dynamically
function buildTeam(){
   let teamHTML = mainHTML()
   employeeArray.map(emp => {
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
   //adding the closing tags for the htnml document
   teamHTML+= `
         </div>
      </body>
   </html>`

   //here we write the file into the output directory
   fs.writeFile("./output/team.html", teamHTML, function(err, result){
         if (err) {
            return console.log(err);
         }
      
      })
}
