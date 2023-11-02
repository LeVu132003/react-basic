import React, {useState} from 'react';
import {toast } from 'react-toastify';
function Request() {
  const [state, setFile] = useState({ fileName: '' , fileSize: '' , fileType: '', onEdit: false })
  function handleOnchange(event) {
    console.log(event.target.value)
  }
  return (
    <div className="Request">
        <form>
            <input type='text' placeholder="Enter file's name" onChange={(event) => handleOnchange(event)}></input>
            <button type='submit'></button>
        </form>
    </div>
  );
}
export default Request;