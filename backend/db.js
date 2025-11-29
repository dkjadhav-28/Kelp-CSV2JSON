import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config(); 
const Pool = pkg.Pool
 const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const addUser = async(user)=>{
    try{
        // console.log(user)
    const {name,age,address,... additional_info} = user;
    console.log(name,age,address,additional_info)
        const query = `
        insert into users (name,age,address,additional_info)
        values ($1,$2,$3::jsonb,$4::jsonb)
        RETURNING *;
        `
        const values = [name.firstName+" "+name.lastName,age,address,additional_info];
        const result = await pool.query(query,values);
        console.log("Data added successfully!",result)
    } catch(err){
        console.log("DB error:",err);
        
    }
}

export default addUser