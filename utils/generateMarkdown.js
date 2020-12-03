// function to generate markdown for README
function generateMarkdown(data) {
    return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
# ${data.title}
**Version ${data.version}**
## Description
### ${data.description}
## Table of Contents
- User Story
- Installation
- Usage
- Liscense
- Contributions
- Questions
## User Story
${data.userStory}
## Installation Command
To install necessary dependencies, run the following command:
${data.installation}
## Test Commands
${data.test}
## LICENSE & COPYRIGHT
This project is licensed under the ${data.license} license



Git Hub User Name: ${data.github}

For more information or questions 
Email me @ ${data.email}
--
### Example of what the end result should look like 
  `;
}

module.exports = generateMarkdown;