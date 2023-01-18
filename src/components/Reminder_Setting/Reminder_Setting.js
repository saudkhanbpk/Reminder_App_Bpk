import React from "react";
import "./Reminder_Setting.css";
const ReminderSetting = () => {
  return (
    <div className="main_dev">
      <div className="row_1">
        <h1>Choose Reminder settings</h1>
      </div>
      <div className="row_2">
        <p>Choose service to remind</p>
      </div>
      <div className="row_3">
        <p>First reminder</p>
      </div>
      <div className="row_4">
        <p>2nd reminder</p>
      </div>
      <div className="row_5">
        <p>final reminder</p>
      </div>
      <div className="row_6">
        <button>SUBMIT</button>
      </div>
    </div>
  );
};
export default ReminderSetting;
