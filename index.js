const inquirer = require("inquirer");
const util = require('util');
const fs = require('fs')

const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

const userPrompt = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",

        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",

        },
        {
            type: "input",
            name: "title",
            message: "What is your project's name'?",

        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project?",

        },
        {
            type: "list",
            name: "license",
            message: "What is type of license are you using?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],

        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",

        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",

        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",

        },
        {
            type: "input",
            name: "contributor",
            message: "What does the user need to know about contributing to the repo?",

        },
        {
            type: "input",
            name: "UserStory",
            message: "What is the user story for this application?",

        },
        {
            type: "input",
            name: "version",
            message: "What version is the application?",

        },

    ]);

userPrompt()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README file'))
    .catch((err) => console.error(err));

