import addUser from './db.js';
import CSV2JSON from './CSV2JSON_logic.js';
import dotevn from 'dotenv'

dotevn.config()

const file = process.env.FilePath
const jsonData = CSV2JSON(file)

//adding user to DB
for(let data of jsonData )
addUser(data) 



