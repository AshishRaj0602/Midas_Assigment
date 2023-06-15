import React from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUploader.css';

const Import = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <div {...getRootProps()} className={`file-uploader ${isDragActive ? 'drag-active' : ''}`}>
      {/* <input {...getInputProps()} /> */}
      {/* <div className="text-container">
        <p>Drag and drop a file here, or</p> */}
        <div className="btn_import">
        <div>
        <button className="choose-button">Import</button>
        </div>
        <div className='import_file'>
        <button className="import-button " id='import'>No file chosen</button>
        </div>
        <div>
        <button className="choose-button">Save</button>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Import;
