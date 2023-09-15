

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license == "No License" ? "" : `![${data.license}](https://img.shields.io/badge/License-${data.license}-blue)`}

## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions you can contact me at the options below:
- [github](https://github.com/${data.github})
- [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
