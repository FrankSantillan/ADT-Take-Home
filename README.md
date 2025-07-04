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
npm install --save-dev allure-commandline
npm install --save-dev @shelex/cucumberjs-allure2-reporter

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
├── features/
│   ├── step_definitions/
│   │   └── steps.ts         # Step definitions
│   └── cucumber.feature     # Gherkin scenarios
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies and scripts
└── README.md                # Project instructions
```

## ▶️ Run the Tests
```
# Run all Cucumber scenarios with TypeScript support
npx cucumber-js --require-module ts-node/register --require features/**/*.ts
```

## 🧑‍💻 Author
Frank Santillan