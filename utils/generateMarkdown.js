// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  switch (data.license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      badge = "";
      break;
  }

  return `# ${data.title}

${badge}

### Description
${data.desc}

### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation
${data.install}

### Usage
${data.usage}

### License
${data.license}

### Contributing
${data.contributor}

### Tests
${data.test}

### Questions
- [See my Github](https://www.github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
