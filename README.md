# Backend - Country Information API

This is the backend service of a full-stack project that provides detailed information about countries, including population history, flags, and border data, using data sourced from external APIs. The project is built using Express.js, Sequelize, and PostgreSQL for handling database operations.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Configuration](#database-configuration)
- [API Routes](#api-routes)
- [Controllers](#controllers)
- [Models](#models)
- [Error Handling](#error-handling)
- [Running the Project](#running-the-project)

---

## Project Structure

The project is structured as follows:


- `bin/cli.js`: Command-line interface for initializing the application.
- `src/server.js`: Entry point for the Express server.
- `controllers/`: Contains the logic to handle requests and responses for each route.
- `models/`: Defines the Sequelize models.
- `routes/`: Defines the API routes.
- `utils/`: Utility files for database connection and error handling.

---

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone (https://github.com/YerkoAs/countries_BE.git)
cd backend
npm install
npm install axios
```

## Environment Variables

Create a `.env` file in the root of your project with the following environment variables:

```bash
DATABASE_URL=postgres://<username>:<password>@localhost:5432/country_db in your PostgreSQL instance.
# API Routes

**Base URL:** `/countries`
```

## Routes

- `GET /countries/:data1/:data2?`

  Fetches country data from external APIs based on the provided parameters.

  - **`:data1:`** Specifies the type of data to retrieve (e.g., all, population, flag).
  - **`:data2:`** (Optional) Further specifies the data (e.g., specific country code).

## Examples

```bash
GET /countries/population
GET /countries/all
GET /countries/flag
```

# Controllers

## `country.controllers.js`

This file contains two main controller functions:

### `getAll`

Handles fetching country data from external APIs based on the provided parameters:

- If `data1` is not `population` or `flag`, the data is fetched from the Nager.Date API.
- If `data1` is `population` or `flag`, the data is fetched from the CountriesNow API.

### `getInfo`

Retrieves detailed information such as population history or flags based on the input parameters.

# Models

## `Country.js`

Defines the `Country` model using Sequelize:

```js
const Country = sequelize.define('Country', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    populationHistory: {
        type: DataTypes.JSON,
        allowNull: true
    },
    flagUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    borders: {
        type: DataTypes.JSON,
        allowNull: true
    }
});
```

# Error Handling

Errors are caught and handled using the custom `catchError` utility located in the `utils/catchError.js` file. 

- If an API request fails or there's an issue with the database connection, a `500` error response is returned to the client with a helpful message.
# Running the Project

To start the server:

1. Start the PostgreSQL database on your local machine.

2. Run the following command to start the backend service:

    ```bash
    npm run dev

    ```

   This will launch the server in development mode using `nodemon`.
Dependencies
Key dependencies used in this project:

- express: Web framework for Node.js.
- sequelize: ORM for interacting with the PostgreSQL database.
- pg: PostgreSQL client.
- axios: HTTP client for making requests to external APIs.
- cors: Middleware for enabling CORS.
- helmet: Middleware for securing HTTP headers.
- nodemon: Development tool for automatically restarting the server.

This concludes the backend documentation for the Country Information API. The project is set up to fetch and store data from multiple APIs and allows for future extension by adding more endpoints or data sources.
