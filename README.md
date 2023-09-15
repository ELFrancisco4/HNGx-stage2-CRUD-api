# HNGx Stage 2 CRUD API

The User API is a RESTful API built using Node.js and Express for managing user data. It allows you to create, read, update, and delete user records in a MongoDB database.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

## Installation
To run the API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ELFrancisco4/HNGx-stage2-CRUD-api/`
2. Navigate to the project directory: `cd HNGx-stage2-CRUD-api`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

Make sure you have MongoDB installed and running on your local machine.

## Usage
The API provides the following endpoints:

### Create a User
- Endpoint: POST `/api`
- Create a new user by providing a JSON request body with user data.
- Example request body:
  ```json
  {
    "name": "James Pauli",
    "age": 26,
    "email": "topballer@spurs.eu",
    "profession": "CYB Analyst",
    "hobbies": ["Football", "Playing FIFA", "Playing Chess", "Ethical Hacking"]
  }
  ```

### Get User by ID
- Endpoint: GET `/api/:user_id`
- Retrieve a user by their ID.
  ```shell
  GET http://localhost:3000/api/1
  ```

### Update User by ID
- Endpoint: PUT `/api/:user_id`
- Update an existing user's information by providing a JSON request body with the updated data.
  ```shell
  PUT http://localhost:3000/api/1
  ```

### Delete User by ID
- Endpoint: DELETE `/api/:user_id`
- Delete a user by their ID.
  ```shell
  DELETE http://localhost:3000/api/1
  ```

Here are some sample requests using cURL:

- Create a User:
  ```shell
  curl -X POST -H "Content-Type: application/json" -d '{
      "name": "James Pauli",
      "age": 26,
      "email": "topballer@spurs.eu",
      "profession": "CYB Analyst",
      "hobbies": ["Football", "Playing FIFA", "Playing Chess", "Ethical Hacking"]
  }' http://localhost:3000/api
  ```

- Get User by ID:
  ```shell
  curl http://localhost:3000/api/1
  ```

- Update User by ID:
  ```shell
  curl -X PUT -H "Content-Type: application/json" -d '{"name":"Bob"}' http://localhost:3000/api/2
  ```

- Delete User by ID:
  ```shell
  curl -X DELETE http://localhost:3000/api/3
  ```

## License
This project is licensed under the MIT License.
