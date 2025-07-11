# Use official Playwright image with dependencies
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app

# Copy package files and tsconfig for TypeScript support
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies including devDependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Create folder for cucumber JSON results (to store reports)
RUN mkdir -p test-results/cucumber-results cucumber-report

EXPOSE 8080

# Install Playwright browsers (optional but safe)
RUN npx playwright install --with-deps

# Default command: run regression tests with cucumber-js and generate JSON report
#CMD ["sh", "-c", "npm run serve:regression:report"]
CMD ["npm", "run", "serve:regression:report","npx", "cucumber-js", "--tags", "@Regression", "--format", "json:test-results/cucumber-results/cucumber-report.json"]

# Expose volume for report folder so host can access results
VOLUME ["/app/test-results/cucumber-results"]

VOLUME /app/cucumber-report
