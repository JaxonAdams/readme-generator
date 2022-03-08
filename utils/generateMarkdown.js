// TODO: Create a function that returns a license badge based on which license is passed in
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

const tocDescription = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmDescription) {
    return ' - Description';
  } else {
    return '';
  }
};

const tocInstallation = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return ' - Installation';
  } else {
    return '';
  }
};

const tocUsage = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return ' - Usage';
  } else {
    return '';
  }
};

const tocContributions = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return ' - Contributions';
  } else {
    return '';
  }
};

const tocTests = data => {
  const latestInfo = data.projectInfo.length - 1;

  if (data.projectInfo[latestInfo].confirmInstallation) {
    return ' - Tests';
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
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
`;
}

module.exports = generateMarkdown;
