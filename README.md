# ADT-Take-Home

# 🥒 Cucumber & TypeScript BDD Test Project

This project demonstrates automated testing using **Node.js**, **Cucumber.js**, and **TypeScript**, following Behavior-Driven Development (BDD) principles.

---

## 📌 Objective

Automate the following scenarios using Cucumber with TypeScript:

```gherkin
Feature: Cucumber Mathematics

  Scenario: Let’s eat cucumbers!
    Given I have 5 cucumbers
    When I eat 4 cucumbers
    Then I have 1 cucumber

  Scenario: Let’s eat carrots!
    Given I have 10 carrots
    When I eat 12 carrots
    Then I have 0 carrots

  Scenario: Let’s make a salad!
    Given I have 8 cucumbers
    And I have 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then I have 5 cucumbers
    And I have 3 carrots
    And I have 1 salad
```

## ✅ Prerequisites
 - Node.js 
 - v18+ installed
 - npm or yarn

## 🛠️ Installation

```
1. Clone the repo
https://github.com/FrankSantillan/ADT-Take-Home.git
cd AquaProjects

# 2. Initialize project (if needed)
npm init -y

# 3. Install required dependencies
npm install --save-dev typescript ts-node @types/node
npm install --save-dev @cucumber/cucumber
npm install --save-dev multiple-cucumber-html-reporter
npm install --save-dev @types/lodash

# 4. Optional: Install ESLint/Prettier if you want code linting
# npm install --save-dev eslint prettier

# 5. Initialize TypeScript configuration
npx tsc --init

# 6 Install Playwright with its core library and browser binaries
npm install --save-dev playwright
npx playwright install

# 7 Install dayjs and plugins:
npm install dayjs
npm install --save dayjs-plugin-utc dayjs-plugin-timezone

```

## 📁 Project Structure
```
.
├──.github/
│   ├── workflows/
│   │   └──run-tests-on-merge.yml       # Your test workflow CI/CD
├── src/
│   ├── features/
│   │   ├── step_definitions/           # Step Definitions Folder
│   │   │   └── steps.ts                # Step definitions
│   └── cucumber.feature                # Gherkin scenarios
│   ├── utils/                          # Utils Folder
│   │   │   ├── multiple-cucumber       # multiple-cucumber folder
│   │   │   │     └──icons/             # icons Folder
│   │   │   │     └──reporter.ts        # reporter
│   │   │   └── constants.ts            # constants
│   │   │   └── reportUtils.ts          # reportUtils
│   │   │   └── testUtils.ts            # testUtils
├── env.d.ts                            # Environment config file
├── type.d.ts                           # type file
├── tsconfig.json                       # TypeScript config
├── package.json                        # Dependencies and scripts
└── README.md                           # Project instructions
└── cucumber.js                         # cucumber.js file
```

## ▶️ Run the Tests
```
# Run all Cucumber scenarios with TypeScript support
# Go to Package.jsin file

 "scripts": {
    "test": "npx cucumber-js",
    "test:scenario1": "npx cucumber-js --tags '@Scenario1'",
    "test:regression": "npx cucumber-js --tags '@Regression'",
    "genrate-cucumber-report": "npx cucumber-js --format json:test-results/cucumber-report.json",
    "multiple-cucumber-report": "cucumber-js --require-module ts-node/register --require src/step_definitions/**/*.ts --format json:./test-results/cucumber-results/cucumber-report.json",
    "show-multiple-cucumber-report": "npx ts-node src/utils/multiple-cucumber/reporter.ts",
    "build-docker-container": "docker build -t adt-test-runner .",
    "test-docker-scenarios": "docker run --rm -v $(pwd)/test-results/cucumber-results:/app/test-results/cucumber-results adt-test-runner"
```

## 🐳 Run Docker Container
```
# Build the image
docker build -t adt-take-home-tests .

# This mounts your local test-results folder so reports persist outside the container.
ddocker run --rm -v $(pwd)/test-results/cucumber-results:/app/test-results/cucumber-results adt-test-runner

```

## GitHUb Actions
![Automated Tests](https://github.com/FrankSantillan/ADT-Take-Home/actions/workflows/automated-tests.yml/badge.svg?branch=dev)


## 🧑‍💻 Author
Frank Santillan