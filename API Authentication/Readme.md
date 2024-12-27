# API Authentication Demo

This project demonstrates different types of API authentication methods using Express.js and Axios to interact with the Secrets API.

## Table of Contents
- [Setup](#setup)
- [Authentication Methods](#authentication-methods)
  - [No Authentication](#no-authentication)
  - [Basic Authentication](#basic-authentication)
  - [API Key Authentication](#api-key-authentication)
  - [Bearer Token Authentication](#bearer-token-authentication)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

## Setup

1. Install dependencies:
```bash
npm install express axios ejs
```

2. Configure your credentials in the application (preferably using environment variables)

## Authentication Methods

### No Authentication
- Endpoint: `/noAuth`
- Description: Access public endpoints that don't require authentication
- Example endpoint: `GET /random`
- Usage: `http://localhost:3000/noAuth`

### Basic Authentication
- Endpoint: `/basicAuth`
- Description: Uses username and password for authentication
- Example endpoint: `GET /all?page=2`
- Required credentials:
  - Username
  - Password
- Usage: `http://localhost:3000/basicAuth`

### API Key Authentication
- Endpoint: `/apiKey`
- Description: Uses an API key as a query parameter
- Example endpoint: `GET /filter?score=5`
- Required credentials:
  - API Key
- Usage: `http://localhost:3000/apiKey`

### Bearer Token Authentication
- Endpoint: `/bearerToken`
- Description: Uses a Bearer token in the Authorization header
- Example endpoint: `GET /secrets/42`
- Required credentials:
  - Bearer Token
- Usage: `http://localhost:3000/bearerToken`

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables (recommended) or update the credentials in index.js:
```javascript
const yourUsername = "your_username";
const yourPassword = "your_password";
const yourAPIKey = "your_api_key";
const yourBearerToken = "your_bearer_token";
```

## Usage

1. Start the server:
```bash
node index.js
```

2. Access the endpoints through your browser or API client:
- Homepage: `http://localhost:3000/`
- No Auth: `http://localhost:3000/noAuth`
- Basic Auth: `http://localhost:3000/basicAuth`
- API Key: `http://localhost:3000/apiKey`
- Bearer Token: `http://localhost:3000/bearerToken`

