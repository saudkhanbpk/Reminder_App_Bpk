import React, { useState } from "react";
import "./AddFile.css"
import { GrAddCircle } from 'react-icons/gr';
import { HiOutlineLogout } from 'react-icons/hi'
export default function AddFile() {
    const [files, setFiles] = useState('')
    const fileUpload = (e) => {
        let file = e.target.files[0]
        console.log('data', file)
        setFiles(file)

    }
    return (

        <div>
            <div className="serh"><span className="ty">search</span> <input type="search" /></div>
            <div className="added"><h5 className="Recently">Recently Added bizfile</h5><span className="Logout"><HiOutlineLogout /></span></div>
            <h6 className="Xls">Export XLs</h6>
            <span className="heading"><h4> ADD  A SINGAPORE BIZEFILE</h4></span>
            <input className="hid" id="file_data" type="file" onChange={fileUpload} />
            <div className="icone" ><label className="for" htmlFor="file_data"><GrAddCircle /></label>
                {
                    files ? <h6>File Added Successfully</h6> : null
                }
            </div>
        </div>
    )
}