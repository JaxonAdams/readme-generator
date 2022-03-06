// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const userQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)'
    },
];

const projectQuestions = [];

// Ask user questions
const promptUserQuestions = userQuestions => {
    return inquirer.prompt(userQuestions);
}

// Ask project questions
const promptProjectQuestions = projectQuestions => {
    console.log(
        `
=====================
 Project Information
=====================
        `
    );
    return inquirer.prompt(projectQuestions);
};

// Function call to initialize app
promptUserQuestions(userQuestions)
    .then(promptProjectQuestions(projectQuestions));