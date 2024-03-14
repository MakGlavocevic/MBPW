## Test Automation Repository for MultiBank Forex Trading Web App

Welcome to the test automation repository for MultiBank's Forex trading web application. This repository contains automated tests to ensure the quality and reliability of the MultiBank Forex trading platform.

### Repository Structure

```
test-automation-repo/
│
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── tests/
    ├── login/
    │   └── ...
    └── smoke-suite/
        └── worked-on-trade-flow/
```

- `.gitignore`: Contains files and directories to be ignored by Git version control.
- `package-lock.json` and `package.json`: NPM package configuration files.
- `playwright.config.ts`: Playwright configuration file.
- `tests/`: Directory containing automated test suites.
    - `login/`: Tests related to the login functionality.
    - `smoke-suite/`: Suite of smoke tests.
        - `worked-on-trade-flow/`: Specific tests for the trade flow.

### Instructions to Install Playwright

To install Playwright and set up the project for test automation, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Node.js and NPM**: Ensure you have Node.js and npm installed on your machine. You can download and install them from [here](https://nodejs.org/).

3. **Install Dependencies**: Navigate to the root directory of the cloned repository in your terminal and run the following command to install the necessary dependencies:

    ```
    npm install
    ```

4. **Configure Playwright**: Customize the Playwright configuration in `playwright.config.ts` file according to your requirements.

5. **Write Tests**: Add or modify tests in the `tests/` directory as needed to cover the desired functionality of the MultiBank Forex trading web application.

6. **Run Tests**: Execute the tests using Playwright by running the following command:

    ```
    npm test
    ```

    This will execute all the tests defined in the repository.

7. **Review Results**: After the test execution completes, review the test results to ensure the proper functioning of the MultiBank Forex trading platform.

### Contributing

If you'd like to contribute to the test automation efforts for MultiBank's Forex trading web app, feel free to fork this repository, make your changes, and submit a pull request.

Thank you for your contributions to ensuring the quality and reliability of the MultiBank Forex trading platform!
