# BMI Calculator App

This BMI Calculator application calculates Body Mass Index (BMI) based on user input.
You should input your age, gender, weight and height. In case if you need input numbers with a specified number of digits after the decimal point, please, use a dot (.) for correct calculation


# Installation
git clone
npm init
npm install
npm run

or

npm install express
npm install body-parser
npm install -g nodemon



# Packages and dependencies:
Express: This is a minimalist web framework for Node.js used for building web applications and APIs. It simplifies the process of creating robust web servers in Node.js.

Body-parser: This package helps in parsing incoming request bodies in a middleware before the handlers, making it easier to handle data from requests, especially POST requests.

{
  "dependencies": {
    "express": "^version_number",
    "body-parser": "^version_number"
  }
}
These dependencies are crucial for the functionality of the application.

# Server
The server runs on port 3000. In my code:

const port = 3000
app.listen(port, ()=>{
    console.log("App is running on port 3000")
})

So, to use my application, first type node bmicalculator.js on terminal and use http://localhost:3000/








