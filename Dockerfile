# Use Node.js 20 LTS
FROM node:20.11.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20.11.0-alpine

WORKDIR /app

# Copy built files and dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Install serve globally
RUN npm install -g serve@14.2.5

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "dist", "-l", "3000"]

