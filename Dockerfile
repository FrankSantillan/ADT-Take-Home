# Use official Node.js image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code
COPY . .

EXPOSE 8080

# Run regression tests and generate report
CMD ["npm", "run", "serve:regression:report"]