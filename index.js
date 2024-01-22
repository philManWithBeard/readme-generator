const fs = require("fs");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What's the name of your project?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your project title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "desc",
      message: "Describe your project",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter your project description.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "How do you install your project?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log(
            "That didn't work. Re-enter the steps to install your project."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use the application?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-enter the usage description.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributor",
      message: "How do you contribute?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Enter details for contributors.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "How do you run tests?",
      default: "npm test",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. How do you run tests?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "license",
      message: "Please select a license for your project.",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
      default: ["MIT"],
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Re-select a license.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What's your GitHub username?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Enter a valid GitHub username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What's your email address?",
      validate: (response) => {
        if (response) {
          return true;
        } else {
          console.log("That didn't work. Enter a valid email address.");
          return false;
        }
      },
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
const init = async () => {
  try {
    const answers = await questions();
    console.log(answers);

    const markdown = generateMarkdown(answers);

    await writeFileAsync("README.md", markdown);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
