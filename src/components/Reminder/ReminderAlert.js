import React, { useState, useEffect } from "react";
import "./ReminderAlert.css";
import Table from 'react-bootstrap/Table';
import { AiFillDelete, AiOutlineEye, AiOutlinePlusSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { getFile } from "../../services/addFile/FilesApi";
import { deleteFile } from "../../services/addFile/FilesApi";
import { useDispatch } from 'react-redux'
import { addFormData } from "../../store/FormdataSlice";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReminderAlert() {
  let dispatch = useDispatch()
  const [data, setData] = useState([])
  const [fileId, setFileId] = useState('')
  const [fetchData, setFetchData] = useState(false);
  let navigate = useNavigate();
  let userId = localStorage.getItem("userId")
  const getFiles = () => {
    let payload = { userId: userId }
    getFile(payload).then((res) => {
      setData(res.data)
      dispatch(
        addFormData(res.data))
    }).catch((e) => {
      console.log("e", e)
    })

  }

  useEffect(() => {
    let Id = localStorage.getItem('fileId');
    setFileId(Id)

  }, [])

  let id = localStorage.getItem("fileId")

  useEffect(() => {
    getFiles()
  }, [fetchData])

  const deleteDataFile = (_id) => {
    deleteFile({ _id: _id }).then((res) => {
      toast.success("File Deleted Successfully", {
        theme: "colored"
      })
      getFiles();
      setFetchData(!fetchData)
    }).catch((error) => {
      toast.error("Something Went Wrong", { theme: "colored" })
    })
  }

  const getAlertReminder = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h2>You Need Reminder's Now</h2>
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
    const isFunctionCalled = localStorage.getItem('isFunctionCalled');
    if (isFunctionCalled) {
      getAlertReminder();
      localStorage.removeItem('isFunctionCalled');
    }
  }, []);

  const handleNavigate = (id) => {
    const isFunctionCalled = localStorage.getItem('isFunctionCalled');
    if (isFunctionCalled) {
    }
    else {
      navigate(`remindersetting/${id}`)
    }
  }


  return (
    <div>
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
                <tr key={item}>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  <td className="der" >
                    {
                      item.reminder === 1 ? (
                        <AiOutlineEye onClick={() => navigate(`reminders/${item._id}`)} />
                      ) : (
                        <AiOutlinePlusSquare onClick={() => handleNavigate(item._id)} />
                      )}
                  </td>
                  <td className="der"  ><FaEdit onClick={() => navigate(`/update/${item._id}`)} />
                    &nbsp; <span className="settingIcon" ><AiFillDelete onClick={() => deleteDataFile(item._id)} /></span>
                  </td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </Table>
      <ToastContainer />
    </div>

  )
}
