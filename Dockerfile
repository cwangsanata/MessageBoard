# Use a base image
FROM node:18

# Set the working directory
WORKDIR /bin/www

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the application
CMD ["npm", "start"]
