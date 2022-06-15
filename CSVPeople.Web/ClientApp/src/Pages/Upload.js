import axios from 'axios';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Upload = () => {
    const history = useHistory();
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const fileInputRef = useRef(null);

    const onButtonClick = async () => {
        console.log("button clicked")
        const file = fileInputRef.current.files[0];
        const base64CSV = await toBase64(file);
        await axios.post('/api/csv/upload', { base64CSV })
        history.push('/');
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <input type='file' ref={fileInputRef} className='form-control' />
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-primary btn-block' onClick={onButtonClick}>Upload</button>
                </div>
            </div>
        </div>);
}

export default Upload;