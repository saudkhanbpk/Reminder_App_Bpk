import React from "react";
import "./Reminder_Services.css";
import { BsPlusLg } from "react-icons/bs";
const ReminderServices = () => {
  return (
    <div className="ReminderServices_main_dev">
      <div className="row-1">
        <h1>Active Reminder services</h1>
      </div>
      <div className="row-2">
        <p>1. Nextgen Bizfile </p>
        <div className="row-2-col-2">
          <button className="view-btn">View</button>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <div className="row-3">
        <p>ADD A SINGAPORE BIZEFILE</p>
      </div>
      <div className="row-4">
        <BsPlusLg className="bs-icon" />
      </div>
      <div className="row-5">
        <p>For Additinal each Bizfile cost $5</p>
      </div>
    </div>
  );
};
export default ReminderServices;
