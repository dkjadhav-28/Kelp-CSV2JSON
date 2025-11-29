import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
//json converter 
const setNestedObject = (obj,columnName,value)=>
{
    // console.log(obj, columnName, value)
    const keys = columnName.split(".")
    let currentObj = obj

    for(let i = 0; i<keys.length;i++)
    {
        const key = keys[i];

        if(i === keys.length-1)
        {
            currentObj[key] = value;
            return;
        }
        if(!currentObj[key])
        {
            currentObj[key] = {};
        }

        currentObj = currentObj[key];
    }
    return
}


//csv parser
const parseCSV = (csvString)=>{
    const lines = csvString.trim().split('\n')
    // console.log(lines)
    const rows = lines.map(row=> row.split(',').map(col => col.trim()));
    console.log(rows)
    const headers = rows[0]
    const dataRows = rows.slice(1)

    const result = [];

    for(const row of dataRows)
    {
        const obj = {}

        row.forEach((value,index) => {
            const header = headers[index];
            setNestedObject(obj,header,value);
        });

        result.push(obj);
    }
    return result


}

//file reader

const CSV2JSON = (filePath)=>
{
    try{
        const csvFile = fs.readFileSync(filePath,"utf-8")
        const jsonData = parseCSV(csvFile)

        console.log("Converted JSON:\n",JSON.stringify(jsonData))

        return jsonData;

    }
    catch(err)
    {
        console.log("Error reading CSV: ",err)
    }
}

// const filePath = process.env.FilePath
// CSV2JSON(filePath)

export default CSV2JSON
// console.log(filePath)


//test codes

// const __dirname = 'D:\\Kelp\\Kelp-CSV2JSON\\backend'
// console.log(__dirname)
// const filePath =  path.join(__dirname,"Kelp-Users.csv")
// console.log(filePath)

