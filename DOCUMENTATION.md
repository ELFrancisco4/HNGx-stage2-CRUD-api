# Documentation of HNGx stage 2 CRUD API
This code provides a RESTful CRUD API with Node.js, Express, and MongoDB. The API has the following endpoints:

1. POST /api - creates a new user with the provided name, age, email, profession, and hobbies. Returns the saved user object, success message, and status code 201 if successful. Returns an error message and status code 400 if there is an error.

2. GET /api/:user_id - retrieves a user with the provided user_id. Returns the user object and status code 200 if successful. Returns an error message and status code 404 if the user is not found.

3. PUT /api/:user_id - updates a user with the provided user_id. Returns the updated user object, success message, and status code 200 if successful. Returns an error message and status code 404 if the user is not found.

4. DELETE /api/:user_id - deletes a user with the provided user_id. Returns a success message and status code 204 if successful. Returns an error message and status code 404 if the user is not found.



## Sample usage of the API

1. To create a new user, send a POST request to /api with the following JSON payload:
```
{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "profession": "Software Engineer",
    "hobbies": ["reading", "coding"]
}
```
The API will return the saved user object, success message, and status code 201 if successful. `Name` is the only required field. The userschema has default values in case a user only provides a name.

2. To retrieve a user with the user_id 123, send a GET request to /api/123. The API will return the user object and status code 200 if successful.

3. To update a user with the user_id 123, send a PUT request to /api/123 with the following JSON payload:
```
{
    "name": "John Doe",
    "age": 31,
    "email": "johndoe@example.com",
    "profession": "Senior Software Engineer",
    "hobbies": ["reading", "coding", "hiking"]
}
```
The API will return the updated user object, success message, and status code 200 if successful.

4. To delete a user with the user_id 123, send a DELETE request to /api/123. The API will return a success message and status code 204 if successful.

## Known limitations or assumptions made during development:

1. The API assumes that the user_id is a unique integer for each user.

2. The API assumes that the name is a string and is not unique.

3. The API assumes that the age is a number.

## Instructions for setting up and deploying the API locally or on a server:

1. Install Node.js and MongoDB on your machine.

2. Clone the repository and navigate to the project directory with the following command in your terminal:
   ``` git clone <git-repo-url> ```

4. Create a .env file in the project directory with the following contents:
```
MONGO_URI=mongodb://localhost:27017/myapp
```
Replace "myapp" with the name of your MongoDB database.

4. Install the required dependencies by running the following command:
```
npm install
```

5. Start the server by running the following command:
```
npm start
```

The API will be available at ``` http://localhost:3000/api ```.

6. To deploy the API on a server, follow the instructions for your hosting provider to deploy a Node.js application. Make sure to set the MONGO_URI environment variable to the connection string for your MongoDB database.


## Testing
To test whether the API works as expected, run the test script `index.test.js` with the following command:
``` npm run test ```
The results of the test will be printed on the console.
