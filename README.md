CSV to JSON convertor
1) Set the path of csv file in .env which need to converted to json
2) the addUser() will add the extracted records to postgres DB
3) Do postgres config in .env

#### Project Info
we can run csv to json file convert in two ways
1) by taking file from .env, for this run server.js
2) By web application (frontend) for this run frontend server and expressServer.js  in backend
   

HOW TO RUN
# clone repo
--> git clone "https://github.com/dkjadhav-28/Kelp-CSV2JSON.git"
# Go to "/backend"
--> cd /backend
#### To run just CSV to JSON file convertor function
# run npm commands
--> npm i pg, dotenv;
--> node server.js
## To run Full application (Frontend and backend)
1) Go to frontend folder
   --> cd frontend
2) Run react project
   --> npm start
3) Run backend
   open new tab and use command
   --> cd backend
   --> node expressServer
   
