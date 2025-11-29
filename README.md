CSV to JSON convertor
1) Set the path of csv file in .env which need to converted to json
2) the addUser() will add the extracted records to postgres DB
3) Do postgres config in .env

HOW TO RUN
# clone repo
--> git clone "https://github.com/dkjadhav-28/Kelp-CSV2JSON.git"
# Go to "/backend"
--> cd /backend
# run npm commands
--> npm i pg, dotenv
--> node server.js
