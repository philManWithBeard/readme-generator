// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);
  return `# ${data.title}

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
${data.github}
${data.email}
`;
}

const badges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "APACHE 2.0":
    "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GPL 3.0":
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3":
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause) ",
};

module.exports = generateMarkdown;
