# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Set the command to serve the static files
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000
