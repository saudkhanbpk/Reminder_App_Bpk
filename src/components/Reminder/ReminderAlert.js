import React from "react";
import "./ReminderAlert.css";
import Table from 'react-bootstrap/Table';
import { AiOutlineEye } from "react-icons/ai";
import {FaEdit} from "react-icons/fa";
export default function ReminderAlert (){
    return (

    <div>
   <div className="serch"><span className="typ">search</span> <input type="search" /></div>
   <h5>Recently Added Files</h5> <br></br>
   <Table className="tbl" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nextgen Bizfile</th>
          <th>View</th>
          <th>Edit</th>
          <th>Reminders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td className="der" ><AiOutlineEye /></td>
          <td className="der" ><FaEdit /></td>
          <td>1:00 am</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td className="der" ><AiOutlineEye /></td>
          <td className="der" ><FaEdit /></td>
          <td>3:20 pm</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td className="der" ><AiOutlineEye /></td>
          <td className="der" ><FaEdit /></td>
          <td>3:30 am</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
    )
}