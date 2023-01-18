import logo from "./logo.svg";
import "./App.css";
import ReminderSetting from "./components/Reminder_Setting/Reminder_Setting";
import ReminderServices from "./components/Reminder_Services/Reminder_Services";

function App() {
  return (
    <div className="App">
      {/* <ReminderSetting /> */}
      <ReminderServices />
    </div>
  );
}

export default App;
