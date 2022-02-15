# Automated Testing using Cypress 

* Create a working directory
  - run `npm init` to initialize npm packages

* Installing Cypress follow this [Link](https://docs.cypress.io) for easy steps Else
  - `cd /your/project/path`
  - Run `npm install cypress --save-dev`

* To open Test Runner
  - `node_modules\.bin\cypress open`

* To Run All the tests under directory
  - `node_modules\.bin\cypress run`
  - `node_modules\.bin\cypress run --headed`

* To Run Single Test under directory
  - `node_modules\.bin\cypress run --spec "cypress\integration\examples\**.js"`
  
* To Run All the tests under the directory using Chrome
  - `node_modules\.bin\cypress run --browser chrome`
