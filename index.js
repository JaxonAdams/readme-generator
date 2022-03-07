// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input


const projectQuestions = [];

// Ask user questions
const promptUserQuestions = () => {
    return inquirer.prompt([
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
    ]);
}

// Ask project questions
const promptProjectQuestions = () => {
    console.log(`
=====================
 Project Information
=====================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'repoLocation',
            message: 'Please enter your repository location. For example: OneDrive/Desktop/repos/<project-folder>'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. Leave blank to exclude from README.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter information on how to install your product. Leave blank to exclude from README.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter information on how to use your product. Leave blank to exclude from README.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter information on how to contribute to the project. Leave blank to exclude from README.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter information regarding tests concerning this project. Leave blank to exclude from README.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you would like this project covered under.',
            choices: ['Creative Commons', 'GNU', 'MIT', 'SIL', 'No License']
        }
    ]);
};

// Function call to initialize app
promptUserQuestions()
    .then(promptProjectQuestions);