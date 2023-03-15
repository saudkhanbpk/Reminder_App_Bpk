import React, { useState, useEffect } from "react";
import "./ReminderAlert.css";
import Table from 'react-bootstrap/Table';
import { AiFillDelete, AiOutlineEye, AiOutlinePlusSquare } from "react-icons/ai";
import { MdOutlineAddAlert } from 'react-icons/md'
import { FaEdit } from "react-icons/fa";
import { getFile } from "../../services/addFile/FilesApi";
import { useDispatch } from 'react-redux'
import { addFormData } from "../../store/FormdataSlice";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';

export default function ReminderAlert() {
  let dispatch = useDispatch()
  const [data, setData] = useState([])
  let navigate = useNavigate();
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

  const getAlertReminder = (id) => {
    console.log("id in reminder", id)
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h2>You Need Reminder's Now</h2>
            {/* <p>You want to delete this file?</p> */}
            <button
              style={{
                backgroundColor: "transparent",
                border: "solid white 2px",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                outline: "none",

              }}

              onClick={onClose}>No</button>&nbsp;&nbsp;&nbsp;
            <button
              style={{
                backgroundColor: "transparent",
                border: "solid white 2px",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                outline: "none",

              }}
              onClick={() => {
                navigate(`remindersetting/${id}`)

                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      }
    });
  }
  useEffect(() => {
    // Check if the function has already been called
    const isFunctionCalled = localStorage.getItem('isFunctionCalled');

    if (isFunctionCalled) {
      // Call the function
      getAlertReminder();

      // Set the flag in localStorage to indicate that the function has been called
      localStorage.removeItem('isFunctionCalled');
    }
  }, []);



  const handleNavigate = (id) => {
    const isFunctionCalled = localStorage.getItem('isFunctionCalled');
    if (isFunctionCalled) {
      // Call the function
      getAlertReminder(id);
      // navigate(`remindersetting/${id}`)
    }
    else {
      navigate(`remindersetting/${id}`)
    }
  }


  return (

    <div>
      {/* <div className="serch"><span className="typ">search</span> <input type="search" /></div>
   <h5>Recently Added Files</h5> <br></br> */}
      <Table className="tbl mt-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nextgen Bizfile</th>
            <th>Reminders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  <td className="der" ><AiOutlineEye onClick={() => navigate(`reminders/${item._id}`)} />&nbsp;&nbsp;
                    <span className="settingIcon" onClick={() => handleNavigate(item._id)}> <AiOutlinePlusSquare /></span>

                    {/* <MdOutlineAddAlert /> */}
                  </td>
                  <td className="der" ><FaEdit />
                    <AiFillDelete />
                  </td>
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