import {useState} from 'react';
import './media_input.css'
const MediaInput = ()=>{

    const [fileName,setFileName] = useState()
    const handleFileUpload = (e)=>{
        const file = e.target.files[0]
        console.log(file.name)
        if(!file)
            return

        const isCSV = file.name.toLowerCase().endsWith('.csv')

        if(!isCSV)
        {
            alert("Please upload CSV file only")
            e.target.value = ""
            setFileName("")
            return
        }

        setFileName(file.name)
        alert("CSV file upload successfully!")
    }

    return(
        <div className='main-container'>
            <div className="form-container">
                <form method='post' action='http://localhost:8000/addUsers' enctype="multipart/form-data">
                    <input type="file" name='csvFile' accept=".csv" className="input-field" onChange={handleFileUpload}/>
                    <button type='submit' className='submit-btn'>Convert</button>
                </form>
            </div>
        </div>
    );
}

export default MediaInput