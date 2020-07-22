import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    };
  
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const res = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          });
    
          const { fileName, filePath } = res.data;
    
          setUploadedFile({ fileName, filePath });
    
        } catch (err) {
          if (err.response.status === 500) {
            console.log("theres a problem with the server brou")
          }
        }
      };

    return (
        <Fragment>
        <div className="vistaUpload">
            <h1>You can help on this too.</h1>
            <form method="POST" action="/upload" ectype="multipart/form-data" onSubmit={onSubmit}>
                <input type="file" name="file" onChange={onChange}/>
                <label className='custom-file-label' htmlFor='customFile'>
                    {filename}
                </label>
                <input type="submit" value="Upload" name="file" />
            </form>
            
            {uploadedFile ? (
                <div>
                    <h3 className='text-center'>{uploadedFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                </div>
                  
            ) : null}
        </div>
        </Fragment>
    )
}

export default Upload;
