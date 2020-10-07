const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { isNumberTypeAnnotation } = require("@babel/types");
const { choices } = require("yargs");
const { RSA_NO_PADDING } = require("constants");
const { create } = require("domain");

// render(yourArray) will return a string of html ile that you can use to write your html file

// you need an array for employees and every time you create an employee(manager or engineer or intern) push them into that array and when you're done, use that array in the render funcion to create your html
//TODO: inquirer.prompt then wrap it in a function

//TODO: .then function
//TODO: use switch case break


const employeeArray = [];

function newEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your ID",
            name: "id"
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email"
        },
        {
            type: "list",
            message: "What is your role?",
            name: "Employee",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
    ]).then(function ({ choices }) {
        switch ({ choices }) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;

        }

    })

}

function createManager(response) {
    if (response.choices === "Manager") {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
        employeeArray.push(newManager)
    }
    return newManager
}
function createEngineer (response){
    if(response.choices === "Engineer"){
        const newEng = new Engineer(response.name, response.id, response.email, response.github)
        employeeArray.push(newEng)
    }
}
function createIntern (response){
    if(response === "Intern") {
        const newIntern = new Intern(response.name, response.id, response.email, response.school)
        employeeArray.push(newIntern)
    }
}


newEmployee();
render(employeeArray);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
