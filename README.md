# Tech-bo
Fitness tracker

## Description
As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

I was tasked to use several technologies to accomplish this task, but this was the first time I ever had to use Mongodb Atlas for storing the data. This was interesting to use, but at the same time it was a challenging task to work through to get everything to work smoothly. 

To show that it did work :
![image](https://user-images.githubusercontent.com/83515305/146403601-f5513817-28de-442b-98c4-88c9b64c8669.png)

![screencapture-cloud-mongodb-v2-61b8f42742cbfc212f53aaaf-2021-12-16-09_17_46](https://user-images.githubusercontent.com/83515305/146399252-f74b282e-bdd6-4744-8e25-1b973044a8ff.png)

### NOTE : Case sensitivity is no joke. Double check if you rename a file (with a different case) that GitHub registered this change. It won't always recognize the change of case on a letter(s).

## Installation / Tech used 

### Technology : 
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
![screencapture-boiling-tor-83580-herokuapp-2021-12-16-00_53_20](https://user-images.githubusercontent.com/83515305/146399157-250d5764-b87b-4211-9a79-4bcd4358d3c0.png)
![screencapture-boiling-tor-83580-herokuapp-exercise-2021-12-15-13_17_52](https://user-images.githubusercontent.com/83515305/146399189-8d71c668-9522-4666-95ee-25c50b5809ce.png)
![screencapture-localhost-3000-stats-2021-12-16-09_16_46](https://user-images.githubusercontent.com/83515305/146399213-c1c9ddcd-6cd3-44d7-b6b4-d1fc71dfa3d3.png)



# Check out the App
https://boiling-tor-83580.herokuapp.com/?id=61bb664864a4490004c45311

# Credits 
MrTofuuu, Corbin, AndrewT
{ Thank you guys for all the help with troubleshooting } 
