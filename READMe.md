## Prerequisites
1. **Node.js**: Download and install Node.js from [here](https://nodejs.org/en/download/).
   
2. **Clone Repository**: Clone the repository from the provided URL:
   ```
   git clone https://github.com/MakGlavocevic/MBPW.git
   ```

## Navigate to Folder and Install npm Packages
Navigate to the cloned repository folder and install the required npm packages by running the following command:

   ```
   npm install
   ```
    
## First Time Installation - Download Required Browsers

For the first time installation, run the following command to download the required browsers:
   ```
   npx playwright install
   ```

This command will download the necessary browsers for your testing environment.

Feel free to adjust the commands according to your needs.

Feel free to integrate this into your Markdown file or documentation.

## Test run command and additional requirements
In order to run these test you will need to create a testConfig.env file and add 3 secrets (USERNAME, PASSWORD and QA_MAIN), after that you can run the test using the following command

   ```
   npx playwright test --grep @tag --headed
   ```