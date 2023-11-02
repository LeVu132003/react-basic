import React, {useState} from 'react';
import './Upload.scss'
import {toast } from 'react-toastify';
function Upload() {
  const [state, setFile] = useState({ fileName: '' , fileSize: '' , fileType: '', onEdit: false })
  let altText = '';
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
    console.log(event.target.files[0].type)
    event.preventDefault();
    setFile({...state, fileName: (event.target.files[0].name).split('.').slice(0, -1).join('.'), fileSize: event.target.files[0].size, fileType: event.target.files[0].type})
    toast.success('Upload successfully')
  }
  function handleEditName(event){
    event.preventDefault();
    setFile({...state,onEdit : true})
  }
  function handleChangeName(event) {
    console.log(event.target.value)
    setFile({...state,fileName: event.target.value})    
  }
  function handleSaveName(event) {
    event.preventDefault();
    setFile({...state,onEdit : false})
  }
  return (
    <div className="Upload">
        <form>
          { state.fileName === '' && state.fileSize === '' && <input type='file' onChange={handleChange}/>}
          { state.fileSize !== '' &&
            <>
              <div className='file-edit-wrapper'>
                {
                  state.onEdit === false && state.fileSize != '' && <h1 className='file-title'>{state.fileName}</h1>
                }
                {
                  state.onEdit === true && state.fileSize != '' && <input className='edit-name' type='text' value={state.fileName} onChange={(event)=>handleChangeName(event)}/>
                }
                { state.fileSize != '' && <span className='file-size'>{formatSizeUnits(state.fileSize)}</span>}
                { state.fileSize != '' && <span className='file-type'>{state.fileType}</span>}
                { state.fileSize != '' && state.onEdit === false && <button onClick = {(event)=> handleEditName(event)}>Edit Name</button>}
                { state.fileSize != '' && state.onEdit === true && <button onClick = {(event)=> handleSaveName(event)}>Save Name</button>}
              </div>
            </>
          }
          

        </form>
    </div>
  );
}
export default Upload;