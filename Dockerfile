# Use official Playwright base image with all browsers installed
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g allure-commandline

# Copy all source code
COPY . .

# Make sure the test-results folder exists
RUN mkdir -p test-results/allure-results

# Install allure CLI globally
RUN npm install -g allure-commandline

# Set the command to run tests (can be overridden)
CMD ["npm", "run", "test:allure"]

FROM ubuntu:latest
LABEL authors="franksantillan"

ENTRYPOINT ["top", "-b"]