# Step 1: Use the official Node.js image from Docker Hub (Alpine version for smaller image size)
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies (npm install)
RUN npm install

# Step 5: Copy the rest of your application files into the container
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
