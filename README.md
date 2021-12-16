# Tech-bo
Fitness tracker

## Description
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

I was tasked to use several technologies to accomplish this task, but this was the first time I ever had to use Mongodb Atlas for storing the data. This was interesting to use, but at the same time it was a challenging task to work through to get everything to work smoothly. 

## Installation / Tech used 

### Technology   
    Node.js  - https://nodejs.org/en/download/
    MongoDB - https://docs.mongodb.com/guides/server/install/
    Mongoose
    NPM - https://www.npmjs.com/
    Express 
    Heroku - https://heroku.com

### Install : 
    1. Be sure to install node if you don't already have the software. 
    2. Install npm package in the terminal. [npm i]
    3. Run the express package installation. [npm install express]
    4. Now activate the Mongo database in a seperate terminal. [mongod]
    5. Run mongo [mongo] - the port should be listening now.
    6. Run the seeds file so the data will populate [npm run seed] or [node seeders/seed.js]
    7. Now run [npm start] or [node server.js] to initialize. 
    8. You can open the heroku app by entering [heroku open] in the terminal.

## Usage 
Once you have the app open you can now add the workouts you want. When you've added all the ones you want, look at the dashboard (top left corner) and see the chart animation.

https://github.com/VbProglobyte/Tech-bo/blob/main/public/src/screencapture-boiling-tor-83580-herokuapp-exercise-2021-12-15-13_17_52.png

# Check out the App
https://boiling-tor-83580.herokuapp.com/