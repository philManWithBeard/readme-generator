const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write to the file asynchronously
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What's the name of your project?",
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      // prompt the user to select from a list of choices
      type: "list",
      name: "license",
      message: "Please select a license for your project.",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
      default: ["MIT"],
      // was there a response, if not then return false
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
      // was there a response, if not then return false
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
      validate: (email) => {
        // Regex mail check (return true if valid mail)
        if (
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          )
        ) {
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

// asynchronous function to initialise the app
const init = async () => {
  try {
    // ask user questions and wait for response
    const answers = await questions();

    // relay answers to user
    console.log(answers);

    // pass answers to a function that will turn them into markdown
    const markdown = generateMarkdown(answers);

    // call the writeFileAsync function and wait for confirmation
    await writeFileAsync("./generated-readme/README.md", markdown);

    // let the user know where their file is
    console.log("Your README is in the generated-readme directory");
  } catch (err) {
    // log errors to the user
    console.log(err);
  }
};

// function call to initialize program
init();
