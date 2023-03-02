import React, { useState, useEffect } from "react";
import "./ReminderAlert.css";
import Table from 'react-bootstrap/Table';
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { getFile } from "../../services/addFile/FilesApi";
import { useDispatch } from 'react-redux'
import { addFormData } from "../../store/FormdataSlice";
export default function ReminderAlert() {
  let dispatch = useDispatch()
  const [data, setData] = useState([])
  let userId = localStorage.getItem("userId")

  const getFiles = () => {
    let payload = { userId: userId }
    getFile(payload).then((res) => {
      console.log("res", res)
      setData(res.data)
      dispatch(
        addFormData(res.data)
      )
    }).catch((e) => {
      console.log("e", e)
    })

  }


  useEffect(() => {
    getFiles()
  }, [])


  return (

    <div>
      {/* <div className="serch"><span className="typ">search</span> <input type="search" /></div>
   <h5>Recently Added Files</h5> <br></br> */}
      <Table className="tbl mt-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nextgen Bizfile</th>
            {/* <th>View</th>
            <th>Edit</th>
            <th>Reminders</th> */}
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  {/* <td className="der" ><AiOutlineEye /></td>
                  <td className="der" ><FaEdit /></td>
                  <td>{item.reminder}</td> */}
                </tr>
              )
            }
            )
          }
        </tbody>
      </Table>
    </div>

  )
}