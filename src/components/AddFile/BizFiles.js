import React, { useEffect, useState } from 'react';
import "./BizFiles.css"
import { Table } from "react-bootstrap";
import { getAllFiles, deleteFile } from '../../services/addFile/FilesApi';
import { AiFillDelete, AiOutlineEye, AiOutlinePlusSquare } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const deleteData = (_id) => {
    console.log("id", _id)
    deleteFile({ _id: _id }).then((res) => {
      toast.success("File Deleted Successfully", {
        theme: "colored"
      })
      getAllData();
    }).catch((err) => {
      toast.error("Something Went Wrong", { theme: "colored" })
    })
  }
  return (
    <div className='container'>
      <div className='BizFil'>
        {/* <div className="container"> */}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index) => {
                console.log("item", item._id)
                return <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  <td
                    className='pe-auto'
                    onClick={() => deleteData(item._id)}
                  ><AiFillDelete /></td>

                </tr>
              })
            }


          </tbody>
        </Table>
      </div>
      <ToastContainer />

    </div>
  )

}