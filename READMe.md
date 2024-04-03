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

## Test run command and additional requirements
In order to run these test localy you will need to create a .env file and add 2 secrets (USERNAME, PASSWORD), after that you can run the test using the following command

   ```
   set QA_ENV={url} && npx playwright test --grep @tag --headed
   ```