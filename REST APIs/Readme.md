# REST API Learning Project

This project demonstrates the implementation of a REST API client using Express.js and Axios to interact with the Secrets API. It covers all basic CRUD (Create, Read, Update, Delete) operations and serves as a learning exercise for understanding REST API interactions.

## Features

- GET request to retrieve specific secrets by ID
- POST request to create new secrets
- PUT request to completely update existing secrets
- PATCH request to partially update existing secrets
- DELETE request to remove secrets
- Error handling for all API operations
- Environment variable configuration for secure token storage

## Prerequisites

- Node.js installed on your system
- Basic understanding of Express.js and REST APIs
- API Bearer token from Secrets API (https://secrets-api.appbrewery.com)

## Installation

1. Clone this repository or download the source code
2. Install the required dependencies:
```bash
npm install express axios body-parser dotenv ejs
```
3. Create a `.env` file in the root directory and add your bearer token:
```
yourBearerToken=your_actual_token_here
```

## Project Structure

- `index.js`: Main application file containing all route handlers
- `views/index.ejs`: Template file for rendering responses
- `.env`: Configuration file for environment variables

## API Endpoints

### 1. Get Secret
- **Route**: POST `/get-secret`
- **Purpose**: Retrieves a specific secret by ID
- **Required Fields**: `id`

### 2. Create Secret
- **Route**: POST `/post-secret`
- **Purpose**: Creates a new secret
- **Required Fields**: `secret`, `score`

### 3. Update Secret (Complete)
- **Route**: POST `/put-secret`
- **Purpose**: Completely updates an existing secret
- **Required Fields**: `id`, `secret`, `score`

### 4. Update Secret (Partial)
- **Route**: POST `/patch-secret`
- **Purpose**: Partially updates an existing secret
- **Required Fields**: `id`, and either `secret` or `score`

### 5. Delete Secret
- **Route**: POST `/delete-secret`
- **Purpose**: Deletes an existing secret
- **Required Fields**: `id`

## Key Learning Points

1. **REST API Methods**:
   - Understanding different HTTP methods (GET, POST, PUT, PATCH, DELETE)
   - When to use each method appropriately

2. **Authentication**:
   - Using Bearer tokens for API authentication
   - Securing API tokens using environment variables

3. **Error Handling**:
   - Implementing try-catch blocks for async operations
   - Proper error message display to users

4. **Axios Usage**:
   - Making HTTP requests with Axios
   - Handling responses and errors
   - Different ways to structure API calls (async/await vs. promises)

## Running the Application

1. Start the server:
```bash
node index.js
```
2. Access the application at `http://localhost:3000`
3. Use the web interface to test different API operations

## Best Practices Demonstrated

- Environment variable usage for sensitive data
- Consistent error handling
- Proper async/await and Promise handling
- Organized route structure
- Clean code with proper spacing and formatting

## Additional Resources

- [Axios Documentation](https://axios-http.com/docs/post_example)
- [Secrets API Documentation](https://secrets-api.appbrewery.com/)
- [Express.js Documentation](https://expressjs.com/)

## Notes

- This is a learning project focused on understanding REST API interactions
- All API operations are performed against the Secrets API test server
- Make sure to keep your Bearer token secure and never commit it to version control
