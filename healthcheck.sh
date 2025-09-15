#!/bin/bash

# Health check script for IIT Welders application
# This script checks if the application is running and responding

set -e

# Configuration
HEALTH_URL="http://localhost:3000"
TIMEOUT=10
MAX_RETRIES=3

# Function to check health
check_health() {
    local url=$1
    local timeout=$2
    
    if curl -f -s --max-time $timeout "$url" > /dev/null 2>&1; then
        echo "✅ Health check passed: $url"
        return 0
    else
        echo "❌ Health check failed: $url"
        return 1
    fi
}

# Function to check if port is listening
check_port() {
    local port=$1
    
    if netstat -tuln | grep -q ":$port "; then
        echo "✅ Port $port is listening"
        return 0
    else
        echo "❌ Port $port is not listening"
        return 1
    fi
}

# Main health check
echo "🔍 Starting health check for IIT Welders..."

# Check if port is listening
if ! check_port 3000; then
    echo "❌ Application is not running on port 3000"
    exit 1
fi

# Check application health
retry_count=0
while [ $retry_count -lt $MAX_RETRIES ]; do
    if check_health "$HEALTH_URL" $TIMEOUT; then
        echo "✅ Application is healthy and responding"
        exit 0
    fi
    
    retry_count=$((retry_count + 1))
    echo "⏳ Retry $retry_count/$MAX_RETRIES in 5 seconds..."
    sleep 5
done

echo "❌ Health check failed after $MAX_RETRIES retries"
exit 1
