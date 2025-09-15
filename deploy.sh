#!/bin/bash

# Deployment script for IIT Welders
# This script handles the deployment process

set -e

# Configuration
APP_NAME="iitwelders"
DOCKER_COMPOSE_FILE="docker-compose.yml"
DOCKER_COMPOSE_DEV_FILE="docker-compose.dev.yml"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    print_success "Docker is running"
}

# Function to build and deploy
deploy() {
    local environment=${1:-production}
    
    print_status "Starting deployment for $environment environment..."
    
    # Check Docker
    check_docker
    
    # Stop existing containers
    print_status "Stopping existing containers..."
    if [ "$environment" = "development" ]; then
        docker-compose -f $DOCKER_COMPOSE_DEV_FILE down || true
    else
        docker-compose -f $DOCKER_COMPOSE_FILE down || true
    fi
    
    # Remove old images
    print_status "Cleaning up old images..."
    docker image prune -f
    
    # Build and start containers
    print_status "Building and starting containers..."
    if [ "$environment" = "development" ]; then
        docker-compose -f $DOCKER_COMPOSE_DEV_FILE up --build -d
    else
        docker-compose -f $DOCKER_COMPOSE_FILE up --build -d
    fi
    
    # Wait for application to start
    print_status "Waiting for application to start..."
    sleep 10
    
    # Run health check
    if [ -f "./healthcheck.sh" ]; then
        print_status "Running health check..."
        chmod +x ./healthcheck.sh
        ./healthcheck.sh
    fi
    
    print_success "Deployment completed successfully!"
    
    if [ "$environment" = "development" ]; then
        print_status "Application is available at: http://localhost:8080"
    else
        print_status "Application is available at: http://localhost:3000"
        print_status "With Nginx at: http://localhost"
    fi
}

# Function to show logs
show_logs() {
    local environment=${1:-production}
    
    if [ "$environment" = "development" ]; then
        docker-compose -f $DOCKER_COMPOSE_DEV_FILE logs -f
    else
        docker-compose -f $DOCKER_COMPOSE_FILE logs -f
    fi
}

# Function to stop application
stop() {
    local environment=${1:-production}
    
    print_status "Stopping $environment environment..."
    
    if [ "$environment" = "development" ]; then
        docker-compose -f $DOCKER_COMPOSE_DEV_FILE down
    else
        docker-compose -f $DOCKER_COMPOSE_FILE down
    fi
    
    print_success "Application stopped"
}

# Function to show status
status() {
    print_status "Container status:"
    docker ps --filter "name=$APP_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
}

# Main script logic
case "${1:-deploy}" in
    "deploy")
        deploy "${2:-production}"
        ;;
    "dev")
        deploy "development"
        ;;
    "logs")
        show_logs "${2:-production}"
        ;;
    "stop")
        stop "${2:-production}"
        ;;
    "status")
        status
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command] [environment]"
        echo ""
        echo "Commands:"
        echo "  deploy    Deploy to production (default)"
        echo "  dev       Deploy to development"
        echo "  logs      Show application logs"
        echo "  stop      Stop application"
        echo "  status    Show container status"
        echo "  help      Show this help message"
        echo ""
        echo "Environments:"
        echo "  production  Production environment (default)"
        echo "  development Development environment"
        echo ""
        echo "Examples:"
        echo "  $0 deploy production"
        echo "  $0 dev"
        echo "  $0 logs development"
        echo "  $0 stop"
        ;;
    *)
        print_error "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac
