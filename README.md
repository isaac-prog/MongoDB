## About PC parts

PcParts is a website that allows user to view, upload and edit pc parts information to the database. 


## UI/UX
* User stories:
A website to collect all of the pc parts out there to enable pc enthusiast to search for pc parts. 

* link to the wireframe: https://app.moqups.com/mLztc8RnHf/view

* Acceptance criteria:
 Users can edit, create and view pc parts

* 5 planes of the UX
1. Surface: The visual design was set to a dark theme, in line with the dark side of young gaming entuhsiast as they are usually the ones that will build custom PCs.

2. Skeleton design: The interface was set to a simple yet modern feel to the webpage. As youth has a shorter attention span, the use of less words and more pictorial form will keep them engaged for a longer time. As for the navigation design, all materials can be achieved within 3 clicks, so that the targeted audience will spend a longer time interacting with the website.

3. Structure: Website is structured to cater to faster reach for entry, viewing and editing of database

4. scope: The functional specs of being to manipulate with the data enables faster updates of information to meet the user's need of getting all resources within a website.

5.Strategy: The purpose of the website is to reduce the need for users to search various websites for individual parts, when pc parts are consolidated to a website.

## Features
The website is targeted to youths who wishes to search for the rigs of their dream build to search for their information within three clicks.

## Technologies used
1. [Font awesome](https://www.mongodb.com/ "MongoDB")
   MongoDB is used as a database to store pc parts and its information

## Testing
Use the nav bar to navigate around the webpage: "Home"/"logo" brings you back to the mainpage, "add content" brings the user to the add content section, where the user can add a new content to the website database and click on the add button to submit his content

click on any of the desired pc part category you wish to view, followed by clicking on the 'view' button to view a more      comprehensive page of that specific part. 

Alternatively, the delete button will delete the specific item from the database.
The edit button will enable user to edit the content of that particular item. Click on the update button once the user is done updating and return to the home page using the nav bar.

## limitations
Currently, the filter function is not working due to bug issues. 

## Deployment
Using heroku for Express, follow the steps:

Step 1| Log into Heroku
At the terminal, log in to heroku with:

heroku login -i

Enter your username and password.

Step 2| Create the Heroku App
Once you have logged in, create a new Heroku app with the following commands at the terminal:

heroku create <app-name>

Step 3| Define Procfile
The Procfile executes a command when Heroku needs to run our server. Create one in the same directory as index.js and name it as Procfile (the first alphabet must be capitalized, and there is no extension).

Add the following line to the Procfile:

web: node index.js


Make sure to save the Procfile

Step 4| Add a start script to package.json


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"


Step 5| Change the port that we are using

Change the 3000 in app.listen to process.env.PORT

Step 6| Push to Heroku

Make sure you have a .gitignore file, and it must have node_modules, sessions/ and .env included,

git add .
git commit -m "Deployment to Heroku"
git push heroku master

Step 7| Setup the config variables
We need to duplicate the content of the .env file inside the config variables section of Heroku.

Go to Heroku and look for the app you just deployed. Then click on Settings:

Next, click on Reveal Config Vars:

After which, add in MONGO_URL, and the connection URL from your .env file:

Step 7| Run the app
From your Heroku project panel, click on the button that says Open App. Test if your app is working.


For React, do the following to deploy it:

Deploy by uploading the build files

Step 1 | Check your terminal's working directory
In your terminal, make sure the current working directory can list the package.json file for your React application.

Step 2 | Build your react application
In the terminal, type in:

yarn build

You should see some messages from React indicating that the build has finished

Step 3 | Download the build folder
You should see a build folder. Download it by right clicking on the folder and select "Download…". 

Note: There will be a number of pop-ups asking you to grant permissions. Click "Yes" each time.

Step 4 | Upload to Netlify
Back at Netlify, click on the "Sites", then scroll to the bottom of the page. There will be a box for you to upload the folder. Drag the entire folder from your computer to the box. Netlify will inform you when the process is complete.

Deploy by linking to Github
Back at the "Sites" page for Netlify, click on "New Site from Github", and select the Github repository. 
