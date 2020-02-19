//import the classes
const Employee= require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');

const employeeArray = [];

let EmployeeQuestions = [
   {
      message: "What is your name?",
      name: "name"
   },
   {
      message: "What is your ID number?",
      name: "ID"
   },
   {
      message: "What is your email address?",
      name: "email"
   },
   {
      message: "What is your role on the project?",
      name: "role",
      type: "list",
      choices: ["Engineer", "Manager", "Intern"]
   }
]

let engineerQuestions = [
   {
      message: "What is your GitHub username?",
      name: "github"
   }
]

let managerQuestions = [
   {
      message: "What is your Office Number?",
      name: "officeNumber"
   }
]

let internQuestions = [
   {
      message: "What school are you attending?",
      name: "school"
   }
];
//create interaction with the user
//get manager info first

// function getManagerData(){
//    inquirer
//    .prompt(EmployeeQuestions)
//    .then(function(data){
//      employeeArray.push(new Manager(data.name, data.ID, data.email, data.officeNumber))
//    })
// }

// getManagerData();
function getEmployeeData(){
   inquirer
   .prompt(EmployeeQuestions)
   .then(function(data){
      console.log(data.role);
      employeeArray.push(new Engineer(data.name, data.ID, data.email, data.github));
      if (data.role === "Engineer"){
         inquirer
         .prompt(engineerQuestions)
         .then(function(data){
            employeeArray.push(new Engineer(data.role, data.github));
            console.log(employeeArray)
         });
      } else if(data.role === "Manager"){
            inquirer
            .prompt(managerQuestions)
            .then(function({officeNumber}){
               
               console.log(data.name, data.ID, data.email, data.role, data.officeNumber)
         });
      } else {
            inquirer
            .prompt(internQuestions)
            .then(function({school}){
               console.log(name, ID, email, role, school)
            });
         console.log(role) 
         }
      }
   );
}

getEmployeeData();
//inquiere array object create  y a class

// var manager = new Manager(name,id,email,officeNumber)
//  array.push(manager)



//  for(var i=0; i< array.length; i++){

//     var role = array[i].getRole()

//     //swithch call templates based on the role
//     card = generateinter(data)
//     html = html + card
//  }

 // fs your html