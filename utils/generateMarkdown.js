// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  }

  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const latestInfo = data.projectInfo.length - 1;

  console.log(renderLicenseBadge(data.projectInfo[latestInfo].license));

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
