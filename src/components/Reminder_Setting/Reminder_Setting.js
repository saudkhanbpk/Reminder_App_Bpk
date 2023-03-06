import React, { useState, useEffect } from "react";
import { postReminder } from "../../services/addFile/Reminder.js/Reminder";
import "./Reminder_Setting.css";
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
const ReminderSetting = () => {
  const [data, setData] = useState([])

  const reminder = useSelector((state) => state.data)
  useEffect(() => {
    setData(reminder)
  }, [reminder])

  console.log("reminder", reminder)
  const [steps, setSteps] = useState('1');
  const [allData, setAllData] = useState({
    shareHolderName: { name: '', },
    officersName: { name: '' },
    email: '',
    phone: `+${""}`,
    firstReminder: '',
    secondReminder: '',
    finalReminder: '',
    income: false,
    annual: false,
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    postReminder(allData).then((res) => {
      console.log("res", res)
      toast.success("Reminder Set Successfully", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"

      })
    })
      .catch((e) => console.log(e))

  }


  return (
    <div className="main_dev">
      {
        steps === '1' ? (
          <form className="card card-1" id="first__form">
            <h4 className="text-center">Choose service to remind</h4>

            <div className="form-group d-flex justify-content-between mt-4">
              <label htmlFor="exampleInputEmail1">1. ECI and CIT filings</label>
              <input type="checkbox" className="form-check-input" id="exampleCheck1"
                checked={
                  allData.income
                }
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    income: e.target.checked
                  })

                }} />

            </div>
            <div className="form-group d-flex justify-content-between mt-4">
              <label htmlFor="exampleInputPassword1">2. Annual Filling</label>
              <input type="checkbox" className="form-check-input" id="exampleInputPassword1"
                checked={
                  allData.annual
                }
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    annual: e.target.checked
                  })
                }} />
            </div>
            <div className="text-center mt-5">
              <button disabled={
                !allData.income && !allData.annual
              } className="btn btn-primary" onClick={() => {
                setSteps('2')
              }}>Next</button>

            </div>
          </form>

        ) : null
      }
      {
        steps === '2' ? (
          <div>
            <form className="card card-1" id="second__form">
              <h5 className="text-center">Choose Director/Shareholders</h5>

              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Name (Shareholder)</label>
                {/* {
                  data.formData.map((item, index) => {
                    let namesArr = []
                    namesArr.push(item.ShareholderName,
                      item.ShareholderName1,
                      // item.ShareholderName2,
                      // item.ShareholderName3,
                      // item.ShareholderName4,
                      item.officersName1,
                      item.officersName2,
                      item.officersName3,
                      // item.officersName4,
                      // item.officersName5,
                    )
                    return (
                      namesArr.map((item, index) => {
                        return (
                          <div key={index}>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Name"
                              value={item}
                              onChange={(e) => {
                                setAllData({
                                  ...allData,
                                  shareHolderName: { name: e.target.value }
                                })
                              }}
                            />
                          </div>
                        )
                      }
                      )
                    )
                  })
                } */}
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      shareHolderName: { name: e.target.value }
                    })
                  }}
                />

              </div>
              <div className="form-group  mt-3">
                <label htmlFor="exampleInputPassword1">Name (Officers)</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      officersName: {
                        name: e.target.value
                      }
                    })
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="emailInput">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter your email"
                  value={
                    allData.email
                  }
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      email: e.target.value
                    })
                  }}
                />
                <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

              </div>
              <div className="form-group mt-3">
                <label htmlFor="phoneInput">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneInput"
                  placeholder="Enter Number With country code"
                  value={allData.phone}
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      phone: e.target.value
                    })
                  }}
                />
                <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

              </div>
              <div className="d-flex flex-row-reverse
 mt-5" style={{ gap: "4rem" }}>
                <button disabled={
                  !allData.email || !allData.phone
                } className="btn btn-primary" onClick={() => {
                  setSteps('3')
                }}>Next</button>
                <button className="btn btn-danger ml-3" onClick={() => {
                  setSteps('1')
                }}>Back</button>
              </div>
            </form>
          </div>

        ) : null
      }
      {
        steps === '3' ? (
          <div>
            <form className="card card-1" id="second__form" onSubmit={handleSubmit}>
              <h5 className="text-center">Choose Reminder settings
              </h5>

              <div className="form-group mt-3">
                <label htmlFor="firstReminder">First Reminder</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="firstReminder"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  value={
                    allData.firstReminder
                  }
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      firstReminder: e.target.value
                    })
                  }}
                />

              </div>
              <div className="form-group  mt-3">
                <label htmlFor="secondReminder">Second Reminder</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="secondReminder"
                  placeholder="Enter Name"
                  value={
                    allData.secondReminder
                  }
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      secondReminder: e.target.value
                    })
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="finalReminder">Final Reminder</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="finalReminder"
                  placeholder="Enter your email"
                  value={
                    allData.finalReminder
                  }
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      finalReminder: e.target.value
                    })
                  }}
                />
              </div>
              <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
                <button className="btn btn-primary" >Submit</button>
                <button className="btn btn-danger ml-3" onClick={() => {
                  setSteps('2')
                }}>Back</button>
              </div>
            </form>
          </div>
        ) : null
      }
      <ToastContainer />

    </div >
  );
};
export default ReminderSetting;
