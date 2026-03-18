FROM node:18

# Create app directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port (match your app)
EXPOSE 3001

# Start app
CMD ["npm", "start"]