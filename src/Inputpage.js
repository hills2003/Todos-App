import React,{useState} from 'react';
import "./index.css";
function Inputpage(props) {
    const [value,setValue]=useState('')
    return (
        <div className="side-input">
            <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)} />
            <input type="submit" value='+' />
        </div>
    );
}

export default Inputpage;