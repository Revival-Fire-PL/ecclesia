FROM node:25-alpine

# Create app directory
WORKDIR /app

# Install dependencies (only package.json first to leverage caching)
COPY package*.json ./

# Install build tools required for native module compilation and git (some deps need it)
RUN apk add --no-cache python3 make g++ git 

# Use npm: prefer npm ci if package-lock.json exists; otherwise npm install
# RUN if [ -f package-lock.json ]; then npm ci ; else npm install ; fi

# Copy rest of the project
COPY . .


# Environment: ensure Expo devtools are accessible
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0

# Default command: install dependencies and start Expo using LAN
CMD ["npm", "run", "start", "--", "--host", "lan"]
