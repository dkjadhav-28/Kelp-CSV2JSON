import express from 'express'
import dotenv  from 'dotenv'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
import CSV2JSON from './CSV2JSON_logic.js'
import addUser from './db.js'

dotenv.config()
const app = express()
app.use(cors({
    origin:"http://localhost:3000"
}))
const upload = multer({dest:process.env.FOLDERPATH})
const port = process.env.BACKEND_PORT


app.post('/addUsers',upload.single('csvFile'),async(req,resp)=>{
    console.log(req.file)
    const file = req.file
    const old_path = file.path
    const newPath =file.destination+"\\"+file.originalname
    console.log(newPath)
    fs.rename(old_path,newPath,(err)=>{
        if(err)
        {
            console.log("file rename failed!",err);
        }

    })

    //convert csv to json
    const jsonData = CSV2JSON(newPath)
    // add to Postgrs DB
    for(let data of jsonData )
    addUser(data) 

    resp.send({success:"file uploaded on server successfully",data:jsonData})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})