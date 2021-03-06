const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/writeFile.js');

// Ask user questions
const promptUserQuestions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: validateNameInput => {
                if (validateNameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: validateUsernameInput => {
                if (validateUsernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: validateEmailInput => {
                if (validateEmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                }
            }
        },
    ]);
}

// Ask project questions
const promptProjectQuestions = readmeData => {
    // If there is no array of project info, create one
    if (!readmeData.projectInfo) {
        readmeData.projectInfo = [];
    }

    console.log(`
=====================
 Project Information
=====================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: validateTitleInput => {
                if (validateTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to add a project description?',
            default: false,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project.',
            when: ({ confirmDescription }) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to add information on installation?',
            default: false,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter information on how to install your product.',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add information on usage?',
            default: false,
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter information on how to use your product.',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Would you like to add contribution information?',
            default: false,
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter information on how to contribute to the project.',
            when: ({ confirmContributions }) => {
                if (confirmContributions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add testing information?',
            default: false,
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter information regarding tests concerning this project.',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you would like this project covered under.',
            choices: ['Creative Commons', 'GNU', 'MIT', 'SIL', 'No License']
        }
    ])
    .then(
        projectData => {
            readmeData.projectInfo.push(projectData);

            console.log(readmeData);
            return readmeData;
        }
    );
};

// Function call to initialize app
promptUserQuestions()
    .then(promptProjectQuestions)
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(fileMarkDown => {
        writeFile(fileMarkDown);
    })
    .then(writeFileResponse => {
        console.log('Readme Written!');
    })
    .catch(err => {
        console.log(err);
    });