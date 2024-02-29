# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN yarn

# Copy the entire project to the working directory
COPY . .

RUN yarn build

# Expose the port your app will run on
EXPOSE 3000

# Command to run your application
CMD ["yarn", "start"]