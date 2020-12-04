// function to generate markdown for README
function generateMarkdown(data) {
    return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
# ${data.title}
**Version ${data.version}**

## Description
### ${data.description}

### Table of Contents
- [UserStory](#UserStory)
- [Installation](#Installation)
- [Test](#Test)
- [Demonstration](#Demonstration)
- [License](#License)
- [Contributions](#contributions)
- [Questions](#Questions)


<a name="userstory"></a>
## UserStory
${data.UserStory}
---
<a name="Installation"></a>
## Installation
To install necessary dependencies, run the following command:
> ${data.installation}
---
<a name="Test"></a>
## Test
> ${data.test}
---
<a name="Demonstration"></a>
## Demonstration
[Demonstration Video](https://drive.google.com/file/d/1vblLFAp_VbRcDz8JiJf15FMDH1tnDelf/view?usp=sharing).
---
<a name="License"></a>
## License
This project is licensed under the ${data.license} license
---
<a name="contributions"></a>
## Contributions
${data.contributor}

---
<a name="Questions"></a>
## Questions
For more information or questions 

Email me @ ${data.email}

Git Hub User Name: ${data.github}
---
  `;
}

module.exports = generateMarkdown;