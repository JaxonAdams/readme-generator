// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'SIL') {
    return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
  }
};

// Confirm sections used for ToC
const tocDescription = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmDescription) {
    return ' - [Description](#description)';
  } else {
    return '';
  }
};

const tocInstallation = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return ' - [Installation](#installation)';
  } else {
    return '';
  }
};

const tocUsage = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmUsage) {
    return ' - [Usage](#usage)';
  } else {
    return '';
  }
};

const tocContributions = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmContributions) {
    return ' - [Contributions](#contributions)';
  } else {
    return '';
  }
};

const tocTests = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmTests) {
    return ' - [Tests](#tests)';
  } else {
    return '';
  }
};

// Write sections based on if they're being used
const descriptionSection = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmDescription) {
    return `
## Description
${data.projectInfo[latestInfo].description}
    `;
  } else {
    return '';
  }
};

const installationSection = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return `
## Installation
${data.projectInfo[latestInfo].installation}
    `;
  } else {
    return '';
  }
};

const usageSection = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmUsage) {
    return `
## Usage
${data.projectInfo[latestInfo].usage}
    `;
  } else {
    return '';
  }
};

const contributionsSection = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmContributions) {
    return `
## Contributions
${data.projectInfo[latestInfo].contributions}
    `;
  } else {
    return '';
  }
};

const testsSection = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmTests) {
    return `
## Tests
${data.projectInfo[latestInfo].tests}
    `;
  } else {
    return '';
  }
};

// Generate README
function generateMarkdown(data) {
  const latestInfo = data.projectInfo.length - 1;

  const licenseBadgeAndLink = renderLicenseBadge(data.projectInfo[latestInfo].license);
  return `
${licenseBadgeAndLink}
# ${data.projectInfo[latestInfo].title}
## Table of Contents
${tocDescription(data)}
${tocInstallation(data)}
${tocUsage(data)}
${tocContributions(data)}
${tocTests(data)}

${descriptionSection(data)}
${installationSection(data)}
${usageSection(data)}
${contributionsSection(data)}
${testsSection(data)}

## Questions?
You can reach me through my github [${data.username}](https://github.com/${data.username}) or email: ${data.email}.
`;
}

module.exports = generateMarkdown;
