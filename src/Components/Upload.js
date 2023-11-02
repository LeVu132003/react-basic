import React, {useState} from 'react';
import './Upload.scss'
function Upload() {

  const [file, setFile] = useState()
  function formatSizeUnits(bytes){
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }
  function handleChange(event) {
    console.log(event.target.files[0])
    event.preventDefault();
    setFile(event.target.files[0])
  }
  function handleEditName(event){
    alert('Click me')
    event.preventDefault();
  }
  return (
    <div className="Upload">
        <form>
          { !file && <input type='file' onChange={handleChange}/>}
          {file &&
            <>
              <div className='file-edit-wrapper'>
                <h1 className='file-title'>{file.name}</h1>
                <span className='file-size'>{formatSizeUnits(file.size)}</span>
                <button onClick = {(event)=> handleEditName(event)}>EditName</button>
              </div>
            </>
          }
          

        </form>
    </div>
  );
}
export default Upload;