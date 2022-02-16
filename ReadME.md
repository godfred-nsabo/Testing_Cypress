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

# Folder Structure

* fixtures - Contains Test Data Files to read the test data
* integration - containts the main Tests cases
* plugins - These are the Event Listeners
* screenshots - Screenshots taken when test cases fails
* support - Reusabel scripts
* videos - videos for the test cases
* node_modules  - Modules for Cypress
* cypress.json - Cypress Configurations
* package.json - Dependencies for Cypress


# get()

* `.get` - Get one or more DOM elements by selector.
  - `cy.get(selector)` - i.e. the selector locate the element

# CSS Selector
* `.class` using the class name for the selector/locator
* `#id` using the id together with hash symbol for the selector/locator
* `[attribute=value]` using the type in a square bracket for locating the element
* `.class[attribute=value]`

# Capturing CSS Selectors

* Right CLick on the Element -> Inspect -> Copy -> Copy Selector
* ChroPath Extension for Chrome
* Selector Playground from Test Runner
