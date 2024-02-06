Sure, here's a basic README for your project:

```markdown
# Join Us Web Application

## Overview
This is a simple web application that allows users to join a waitlist by entering their email. The application is built using Node.js, Express, and MySQL.

## Features
- Display the total number of users who have joined the waitlist.
- Allow new users to join the waitlist by entering their email.
- Display a random joke.
- Generate a random number.

## Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `node app.js` (make sure your MySQL server is running).

## Dependencies
- Express
- MySQL
- Body-parser
- EJS

## Database Setup
You need to have a MySQL server running on your machine. Update the `connection` variable in `app.js` with your MySQL server details.

## Routes
- `GET /`: Home route. Displays the total number of users who have joined the waitlist.
- `POST /register`: Register route. Accepts a form submission and adds the user's email to the database.
- `GET /joke`: Joke route. Displays a random joke.
- `GET /Random_num`: Random Number route. Generates a random number.

## Note
To stop the server, you can use the command `kill-port --port 8080`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
```
