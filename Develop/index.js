// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

const questions = [
  "What is your projects's title?",
  "Please enter a description of your project.",
  "Please enter installation instructions for your project.",
  "Please enter usage information for your project.",
  "Please enter contribution guidelines for your project",
  "Please enter test instructions for your project.",
  "Please choose a license",
  "Please enter your GitHub username",
  "Please enter your email address.",
];
inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "installation",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
      type: "input",
      message: questions[4],
      name: "contribution",
    },
    {
      type: "input",
      message: questions[5],
      name: "test",
    },
    {
      type: "list",
      message: questions[6],
      name: "license",
      choices: ["MIT", "Apache 2.0", "BSD"],
    },
    {
      type: "input",
      message: questions[7],
      name: "github",
    },
    {
      type: "input",
      message: questions[8],
      name: "email",
    },
  ])
  .then(function (data) {
    console.log(data);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
