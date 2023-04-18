import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { deleteReminder, getReminders, updateReminder } from '../../services/addFile/Reminder.js/Reminder'
import { Button, Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
function RemindersPage() {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateData, setUpdateData] = useState({
    CITfirstReminder: "", CITsecondReminder: "",
    CITfinalReminder: "", ECIFirstReminder: "",
    ECIsecondReminder: "", ECIFinalReminder: "",
    annualFirstReminder: "", annualSecondReminder: "",
    annualFinalReminder: "",
  }
  )
  let id = useParams();

  const getRemindersData = () => {
    getReminders(id._id).then((res) => {
      setData(res)
    }).catch((error) => {
      console.log("🚀 ~ file: RemindersPage.js:13 ~ useEffect ~ error:", error)
    })
  }
  useEffect(() => {
    getRemindersData()

  }, [])

  const deleteReminders = (id) => {
    deleteReminder(id).then((res) => {
      getRemindersData()
    }).catch((error) => {
      console.log("🚀 ~ file: RemindersPage.js:13 ~ useEffect ~ error:", error)
    })
  }

  const handleUpdate = () => {
    updateReminder(id._id, updateData).then((res) => {
      handleClose()
      getRemindersData()
    }
    ).catch((error) => {
      console.log(error)
    })
  }


  return (
    <React.Fragment>
      {
        data.message === "No reminder found" ? (
          <h1 style={{ color: "black" }}>{data.message}</h1>
        ) : (
          <Table className="tbl mt-3" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>CIT First Reminder</th>
                <th> CIT Second Reminder</th>
                <th>CIT Final Reminder</th>
                <th>ECI First Reminder</th>
                <th> ECI Second Reminder</th>
                <th>ECI Final Reminder</th>
                <th>Annual First Reminder</th>
                <th> Annual Second Reminder</th>
                <th>Annual Final Reminder</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                data?.map((item, index) => {
                  console.log("item", item.reminder[0])
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.reminder[0].CITfirstReminder}</td>
                      <td>{item.reminder[0].CITsecondReminder}</td>
                      <td>{item.reminder[0].CITfinalReminder}</td>
                      <td>{item.reminder[0].ECIFirstReminder
                      }</td>
                      <td>{item.reminder[0].ECIsecondReminder}</td>
                      <td>{item.reminder[0].ECIfinalReminder}</td>
                      <td>{item.reminder[0].annualFirstReminder}</td>
                      <td>{item.reminder[0].annualSecondReminder}</td>
                      <td>{item.reminder[0].annualFinalReminder}</td>
                      <td className="der"  ><FaEdit onClick={
                        () => {
                          setUpdateData({
                            CITfirstReminder: item.reminder[0].CITfirstReminder, CITsecondReminder: item.reminder[0].CITsecondReminder,
                            CITfinalReminder: item.reminder[0].CITfinalReminder, ECIFirstReminder: item.reminder[0].ECIFirstReminder,
                            ECIsecondReminder: item.reminder[0].ECIsecondReminder, ECIFinalReminder: item.reminder[0].ECIfinalReminder,
                            annualFirstReminder: item.reminder[0].annualFirstReminder, annualSecondReminder: item.reminder[0].annualSecondReminder,
                            annualFinalReminder: item.reminder[0].annualFinalReminder,
                          })
                          handleShow()
                        }
                      } />
                        <AiFillDelete onClick={() => deleteReminders(
                          item.reminder[0]._id
                        )} />
                      </td>
                    </tr>
                  )
                })}

            </tbody>
          </Table>
        )
      }
      <Modal show={show} onHide={handleClose} size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="CITfirstReminder">CIT First Reminder</label>
            <input type="text" className="form-control" id="CITfirstReminder" value={updateData.CITfirstReminder} onChange={(e) => setUpdateData({ ...updateData, CITfirstReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="CITsecondReminder">CIT Second Reminder</label>
            <input type="text" className="form-control" id="CITsecondReminder" value={updateData.CITsecondReminder} onChange={(e) => setUpdateData({ ...updateData, CITsecondReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="CITfinalReminder">CIT Final Reminder</label>
            <input type="text" className="form-control" id="CITfinalReminder" value={updateData.CITfinalReminder} onChange={(e) => setUpdateData({ ...updateData, CITfinalReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="ECIfirstReminder">ECI First Reminder</label>
            <input type="text" className="form-control" id="ECIfirstReminder" value={updateData.ECIFirstReminder} onChange={(e) => setUpdateData({ ...updateData, ECIFirstReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="ECIsecondReminder">ECI Second Reminder</label>
            <input type="text" className="form-control" id="ECIsecondReminder" value={updateData.ECIsecondReminder} onChange={(e) => setUpdateData({ ...updateData, ECIsecondReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="ECIFinalReminder">ECI Final Reminder</label>
            <input type="text" className="form-control" id="ECIFinalReminder" value={updateData.ECIFinalReminder} onChange={(e) => setUpdateData({ ...updateData, ECIFinalReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="annualFirstReminder">Annual First Reminder</label>
            <input type="text" className="form-control" id="annualFirstReminder" value={updateData.annualFirstReminder} onChange={(e) => setUpdateData({ ...updateData, annualFirstReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="annualSecondReminder">Annual Second Reminder</label>
            <input type="text" className="form-control" id="annualSecondReminder" value={updateData.annualSecondReminder} onChange={(e) => setUpdateData({ ...updateData, annualSecondReminder: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="annualFinalReminder">Annual Final Reminder</label>
            <input type="text" className="form-control" id="annualFinalReminder" value={updateData.annualFinalReminder} onChange={(e) => setUpdateData({ ...updateData, annualFinalReminder: e.target.value })} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default RemindersPage