import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getReminders } from '../../services/addFile/Reminder.js/Reminder'
import { Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
function RemindersPage() {
  const [data, setData] = useState([])
  let id = useParams();

  useEffect(() => {
    getReminders(id._id).then((res) => {
      console.log(res.message)
      setData(res)
    }).catch((error) => {
      console.log("🚀 ~ file: RemindersPage.js:13 ~ useEffect ~ error:", error)
    })
  }, [])

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
                <th>First Reminder</th>
                <th>Second Reminder</th>
                <th>Final Reminder</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.reminder[0].firstReminder}</td>
                      <td>{item.reminder[0].secondReminder}</td>
                      <td>{item.reminder[0].finalReminder}</td>

                      {/* <td className="der" ><FaEdit />
                    <AiFillDelete />
                  </td> */}
                    </tr>
                  )
                })}

            </tbody>
          </Table>
        )
      }
    </React.Fragment>
  )
}

export default RemindersPage