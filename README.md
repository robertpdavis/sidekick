# sidekick

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Social network api application where users can express thoughts and others can react to them. Built using node.js, express.js with a mongo database backend managed by mongoose and moment.js to format date/time.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Node.js must be installed. Required npm packages:
* Express
* mongoose
* moment

Firstly initialise the npm in the directory for the application by typing npm init in the console. The dependencies can be installed by typing npm install. Ensure the package.json and package-lock.json files are included in the directory. For localhost use, you will need to ensure the mongo database is installed.

File structure of the application:
```md
.
├── config/                // contains the mongo databased connection.js file
├── controllers/           // contains the user and thought controller functions for the routes
├── models/                // mongoose schema and model initialisation for the mongo database
├── routes/                 // express route mapping to the controller functions
├── .gitignore             // indicates which folders and files Git should ignore
├── LICENCE                // licence file
├── index.js               // entry script to run application
├── package-lock.json      
└── package.json           
```

## Usage
Run the server application by typing npm start in the console. The following api routes are then available:<br>
<ins>User Routes<ins>
- GET api/users > returns all user objects including user thought and friend ids.
- GET api/users/:id > returns the user matching :id and the user's thought and friend objects.
- POST api/users/ > creates new user - username and email json keys required.
- PUT api/users/:id > updates email for user with matching :id.
- DELETE api/users/:id > deletes a user with the matching id and removes from any other user friends list.
- POST api/users/:userId/friends/:friendId > Adds user with friendId to user with userId.
- DELETE api/users/:userId/friends/:friendId > Removes user with friendId from user with userId.

<ins>Thought Routes<ins>
- GET api/thoughts > returns all thought objects including the thought's reaction objects.
- GET api/thoughts/:id > returns the thought matching :id and the thought's reaction objects.
- POST api/thoughts/ > creates new thought - thoughtText, username and userId json keys required.
- PUT api/thoughts/:id > updates thoughtText for thought with matching :id.
- DELETE api/thoughts/:id > deletes a thought with the matching id and removes from the users thoughts list.
- POST api/thoughts/:id > Adds a reaction to a thought with matching id - reactionBody, username json keys required.
- DELETE api/thoughts/:thoughtId/reactions/:reactionId > Removes reaction with reactionId from thought with thoughtId.

Refer to the below demonstation video links:
* User routes (except user update and delete) - https://drive.google.com/file/d/18EXJhwBEhot5AnaFBkyaTFooYY15pkjE/view
* All other routes: https://drive.google.com/file/d/1aZA9NQ9gmj_jyKGi7drhg0um-ChXVppD/view


## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
No tests are included.

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au
