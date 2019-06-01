# message-feed-project

## Message Feed Test Project

# Server

Used express.js for fast and simple server creation.
There are two main routes:
1) /api/submitMessage - to submit the message. In response server returns all the messages
2) /api/getMessages - returns all the messages

All the other routes bring us to the built client html file

Data on server is stored in mongoDB database and objects are modeled by mongoose library.

# Client

Used create-react-app script to start basic react project. 
Application state is stored in redux.

There are two main components:
1) MessageForm - to create and sumbit new messages
2) Feed - to filter and display existing messages

Api requests are handled in one place - api.middleware

Made use of additional libraries:

1) semantic-ui-react - basic ui components
2) lodash/fp - functional programming logic functions
3) moment.js - date/time handling
4) formik, yup - form handling and validation
5) axios - api calls

Things to improve:
 - Create websocket to fetch other users' messages without refreshing the page or submitting own message
 
 Application hosted on: https://message-feed-project.herokuapp.com/
 LinkedIn Profile: https://www.linkedin.com/in/mark-khotin-231a26b9/
