// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is your projects's title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter usage information for your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines for your project",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter test instructions for your project.",
    name: "test",
  },
  {
    type: "list",
    message: "Please choose a license",
    name: "license",
    choices: ["MIT", "Apache_2.0", "BSD", "No License"],
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("READEME.md", generateMarkdown(data), (error, data) =>
    error ? console.error(error) : console.log(data)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile(data);
  });
}

// Function call to initialize app
init();
