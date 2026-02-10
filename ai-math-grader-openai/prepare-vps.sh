#!/bin/bash

# Build the Next.js application
echo "Building the application..."
npm run build

# Create necessary directories in standalone
echo "Preparing standalone build..."
mkdir -p .next/standalone/public
mkdir -p .next/standalone/.next/static

# Copy static assets
cp -r public/* .next/standalone/public/
cp -r .next/static/* .next/standalone/.next/static/

echo "Build complete! To run the server on your VPS:"
echo "1. Upload the '.next/standalone' folder to your VPS"
echo "2. Set your environment variables (OPENAI_API_KEY, etc.)"
echo "3. Run: node .next/standalone/server.js"
echo ""
echo "Note: You can use PM2 to keep it running: 'pm2 start .next/standalone/server.js --name math-grader'"
