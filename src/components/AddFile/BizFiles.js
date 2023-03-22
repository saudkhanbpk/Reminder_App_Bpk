import React, { useEffect, useState } from 'react';
import "./BizFiles.css"
import { Table } from "react-bootstrap";
import { getAllFiles } from '../../services/addFile/FilesApi';
export default function BizFiles() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllData()
  }, [])
  const getAllData = () => {
    getAllFiles().then((res) => {
      setData(res.files);
    }).catch((err) => {
      console.error(err);
    })
}
return(
<div className='container'>
    <div className='BizFil'>
      {/* <div className="container"> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
            {
            data?.map((item, index) =>{

           return   <tr key={index}>
            <td>{index+1}</td>
                <td>{item.companyName}</td>

              </tr>
            })
          }


        </tbody>
      </Table>
</div>
</div>
)

}