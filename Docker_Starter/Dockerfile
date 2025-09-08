# Base Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# COPY Over Files
COPY . .

# Run commands to build the codes
RUN npm install

# Expose Ports
EXPOSE 3000

# Final Command that runs when running the container
CMD ["node", "index.js"]
