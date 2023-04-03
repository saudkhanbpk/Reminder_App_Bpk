import React, { useState, useEffect } from "react";
import { postReminder } from "../../services/addFile/Reminder.js/Reminder";
import "./Reminder_Setting.css";
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
const ReminderSetting = () => {
  let navigate = useNavigate();
  const id = useParams()
  const [data, setData] = useState([])
  const [email, setEmail] = useState([])
  const [phone, setPhone] = useState([])
  const [officerEmail, setOfficerEmail] = useState([])
  const [officerPhone, setOfficerPhone] = useState([])
  const [shareholderName, setShareholderName] = useState([])
  const [officerNames, setOfficerNames] = useState([])


  const reminder = useSelector((state) => state.data)
  let filteredData = reminder.formData.filter((item) => item._id === id._id)
  useEffect(() => {
    setData(reminder)
  }, [reminder])
  console.log("date:", filteredData[0]?.FYEAsAtDateOfLastAR
  )
  // get the month from the above date
  let month = filteredData[0]?.FYEAsAtDateOfLastAR?.split("/")[1]
  console.log("month:", month)
  //add 3 months to the month
  let result = (parseInt(month) + 3) % 12

  console.log("result:", result)

  const annualDate = (parseInt(month) + 7) % 12
  console.log("annualDate:", annualDate)

  //before
  let beforeMonth = filteredData[0]?.FYEAsAtDateOfLastAR?.split("/")[1]
  let before = (parseInt(beforeMonth) - 3) % 12
  let ninetyDaysReminder = (parseInt(before) + 3) % 12
  //get current year
  let currentYear = new Date().getFullYear()
  console.log("ninetyDaysReminder:", `${currentYear}-${ninetyDaysReminder}-30T09:00`)
  let sixtyDaysReminder = (parseInt(before) + 4) % 12
  console.log("sixtyDaysReminder:", `${currentYear}-${sixtyDaysReminder}-30T09:00`)
  let thirtyDaysReminder = (parseInt(before) + 5) % 12
  console.log("thirtyDaysReminder:", `${currentYear}-${thirtyDaysReminder}-30T09:00`)

  // CIT reminder
  let CITNinetyDaysReminder = `${currentYear}-8-30T09:00`
  let CITSixtyDaysReminder = `${currentYear}-9-30T09:00`
  let CITThirtyDaysReminder = `${currentYear}-10-31T09:00`

  //annual reminder
  let annualbefore = (parseInt(annualDate) - 3) % 12
  let annualNinetyDaysReminder1 = (parseInt(annualbefore) + 3) % 12
  let annualSixtyDaysReminder2 = (parseInt(annualbefore) + 4) % 12
  let annualThirtyDaysReminder3 = (parseInt(annualbefore) + 5) % 12
  let annualNinetyDaysReminder = `${currentYear}-${annualNinetyDaysReminder1}-30T09:00`
  let annualSixtyDaysReminder = `${currentYear}-${annualSixtyDaysReminder2}-30T09:00`
  let annualThirtyDaysReminder = `${currentYear + 1}-${annualThirtyDaysReminder3}-31T09:00`





  let id1 = localStorage.getItem("fileId")
  const [steps, setSteps] = useState('1');
  const [counter, setCounter] = useState(0)
  const [allData, setAllData] = useState({
    shareHoldersArray: [{ email: email }, { phone: phone }, { shareholderName: shareholderName }],
    officersArray: [{ officersEmail: officerEmail }, { officerPhone: officerPhone }, { officerNames: officerNames }],
    ECIFirstReminder: '',
    ECIsecondReminder: '',
    ECIfinalReminder: '',
    CITfirstReminder: '',
    CITsecondReminder: '',
    CITfinalReminder: '',
    annualFirstReminder: '',
    annualSecondReminder: '',
    annualFinalReminder: '',
    ECI: false,
    CIT: false,
    annual: false,
    ECIfillingDate: `31-${result}-${currentYear}`,
    CITfillingDate: `31th-11-${currentYear}`,
    annualFillingDate: `31/${annualDate}-${currentYear}`,
    addedPeople: [],
    fileId: id1
  })


  const handleAddInput = (e) => {
    e.preventDefault();
    setCounter(counter + 1)
  }

  const handleRemoveInput = (e) => {
    e.preventDefault();
    if (counter !== 0)
      setCounter(counter - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postReminder(allData).then((res) => {
      toast.success("Reminder Set Successfully", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
      })
      navigate("/")
    })
      .catch((e) => console.log(e))

  }

  const handleChangeEmail = (event, index) => {
    const { value } = event.target;
    const list = [...email];
    list[index] = value;
    setEmail(list);
    setAllData({
      ...allData,
      shareHoldersArray: [{ email: list }, { phone: phone }]
    })

  }

  const handleChangePhone = (event, index) => {
    let { value } = event.target;
    const list = [...phone];
    list[index] = value;
    setPhone(list);
    setAllData({
      ...allData,
      shareHoldersArray: [{ email: email }, { phone: list }]
    })
  }

  const handleChangeOfficerEmail = (event, index) => {
    const { value } = event.target;
    const list = [...officerEmail];
    list[index] = value;
    setOfficerEmail(list);
    setAllData(
      {
        ...allData,
        officersArray: [{ officersEmail: list }, { officerPhone: officerPhone }]
      }
    )
  }

  const handleChangeOfficerPhone = (event, index) => {
    let { value } = event.target;
    const list = [...officerPhone];
    list[index] = value;
    setOfficerPhone(list);
    setAllData(
      {
        ...allData,
        officersArray: [{ officersEmail: officerEmail }, { officerPhone: list }]
      }
    )
  }

  const handleChangeShareholderName = (event, index) => {
    let { value } = event.target;
    const list = [...shareholderName];
    list[index] = value;
    setShareholderName(list);
    setAllData(
      {
        ...allData,
        shareHoldersArray: [{ shareholderName: list }, { officerPhone: officerPhone }, { officersEmail: officerEmail }
        ]
      }
    )
  }

  const handleChangeOfficerNames = (event, index) => {
    let { value } = event.target;
    const list = [...officerNames];
    list[index] = value;
    setOfficerNames(list);
    setAllData(
      {
        ...allData,
        officersArray: [{ officerNames: list }, { officersEmail: officerEmail }, { officerPhone: officerPhone }]
      }
    )
  }





  return (
    <div className="main_dev">
      {
        steps === '1' ? (
          <form className="card card-1" id="first__form">
            <h4 className="text-center">Choose service to remind</h4>

            <div className="form-group d-flex justify-content-between mt-4">
              <label htmlFor="exampleInputEmail1">1. ECI Filings</label>
              <input type="checkbox" className="form-check-input" id="exampleCheck1"
                checked={
                  allData.ECI
                }
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    ECI: e.target.checked
                  })

                }} />

            </div>
            <div className="form-group d-flex justify-content-between mt-4">
              <label htmlFor="exampleInputEmail1">2. CIT filings</label>
              <input type="checkbox" className="form-check-input" id="exampleCheck1"
                checked={
                  allData.CIT
                }
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    CIT: e.target.checked
                  })

                }} />

            </div>
            <div className="form-group d-flex justify-content-between mt-4">
              <label htmlFor="exampleInputPassword1">3. Annual Filling</label>
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
            {
              allData.ECI ? (
                <div>
                  <div className="form-group  mt-4">
                    <label htmlFor="exampleInputEmail1">Your ECI Filling Date Is:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={allData.ECIfillingDate}

                      onChange={(e) => {
                        setAllData({
                          ...allData,
                          ECIfillingDate: e.target.value
                        })
                      }}


                    />
                  </div>
                </div>
              ) : null

            }
            {
              allData.CIT ? (
                <div>
                  <div className="form-group  mt-4">
                    <label htmlFor="exampleInputEmail1">Your CIT Filling Date Is:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={allData.CITfillingDate}
                      onChange={(e) => {
                        setAllData({
                          ...allData,
                          CITfillingDate: e.target.value
                        })
                      }}
                    />
                  </div>
                </div>
              ) : null

            }
            {
              allData.annual ? (
                <div>
                  <div className="form-group  mt-4">
                    <label htmlFor="exampleInputEmail1">Your Annual Filling Date Is:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={allData.annualFillingDate}
                      onChange={(e) => {
                        setAllData({
                          ...allData,
                          annualFillingDate: e.target.value
                        })
                      }}
                    />
                  </div>
                </div>
              ) : null

            }
            <div className="text-center mt-5">
              <button disabled={
                !allData.ECI && !allData.annual && !allData.CIT
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
              {
                data?.formData.filter((item, index) => item._id === id._id).map((item, index) => {
                  let shareHoldersArray = [];

                  shareHoldersArray.push(
                    item.ShareholderName !== "" || undefined ? item.ShareholderName : '',
                    item.ShareholderName1 !== "" || undefined ? item.ShareholderName1 : '',
                    item.ShareholderName2 !== "" || undefined ? item.ShareholderName2 : '',
                    item.ShareholderName3 !== "" || undefined ? item.ShareholderName3 : '',
                    item.ShareholderName4 !== "" || undefined ? item.ShareholderName4 : '',

                  )
                  return (
                    shareHoldersArray.map((item, index) => {
                      //if item value is undeifned then stop the excetuin
                      if (item === undefined) {
                        return null
                      } else {

                        return (
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="exampleInputEmail1">Name (Shareholder)</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter Name"
                                  value={item}
                                  onChange={(e) => {
                                    handleChangeShareholderName(e, index)

                                  }}
                                />

                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="emailInput">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  value={
                                    email[index]
                                  }
                                  onChange={(e) => {
                                    handleChangeEmail(e, index)
                                    // setAllData({
                                    //   ...allData,
                                    //   email: e.target.value
                                    // })
                                  }}
                                />
                                <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

                              </div>

                            </div>
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="phoneInput">Phone Number</label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phoneInput"
                                  placeholder="Enter Number With country code"
                                  value={phone[index]}
                                  onChange={(e) => {
                                    handleChangePhone(e, index)
                                  }}
                                />
                                <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

                              </div>
                            </div>
                          </div>
                        )
                      }
                    })
                  )
                })
              }

              {
                data?.formData.filter((item, index) => item._id === id._id).map((item, index) => {
                  let officersArray = [];
                  officersArray.push(
                    item.officersName1 !== "" || undefined ? item.officersName1 : '',
                    item.officersName2 !== "" || undefined ? item.officersName2 : '',
                    item.officersName3 !== "" || undefined ? item.officersName3 : '',
                    item.officersName4 !== "" || undefined ? item.officersName4 : '',
                    item.officersName5 !== "" || undefined ? item.officersName5 : '',

                  )
                  return (
                    officersArray.map((item, index) => {
                      if (item === undefined) {
                        return null
                      } else {

                        return (
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="exampleInputEmail1">Name (Officers)</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Enter Name"
                                  value={item}
                                  onChange={(e) => {
                                    handleChangeOfficerNames(e, index)
                                  }}
                                />

                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="emailInput">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  value={officerEmail[index]}
                                  onChange={(e) => {
                                    handleChangeOfficerEmail(e, index)
                                  }}
                                />
                                <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

                              </div>

                            </div>
                            <div className="col-md-4">
                              <div className="form-group mt-3">
                                <label htmlFor="phoneInput">Phone Number</label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phoneInput"
                                  placeholder="Enter Number With country code"
                                  value={officerPhone[index]}
                                  onChange={(e) => {
                                    handleChangeOfficerPhone(e, index)
                                  }}
                                />
                                <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

                              </div>
                            </div>
                          </div>
                        )
                      }
                    })
                  )
                })
              }
              {
                Array.from({ length: counter }, (_, index) => {
                  return (
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group mt-3">
                          <label htmlFor="exampleInputEmail1">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Name"
                          // value={item}
                          // onChange={(e) => {
                          //   handleChangeShareholderName(e, index)

                          // }}
                          />

                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mt-3">
                          <label htmlFor="emailInput">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="Enter your email"
                          // value={
                          //   email[index]
                          // }
                          // onChange={(e) => {
                          //   handleChangeEmail(e, index)
                          //   // setAllData({
                          //   //   ...allData,
                          //   //   email: e.target.value
                          //   // })
                          // }}
                          />
                          <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

                        </div>

                      </div>
                      <div className="col-md-4">
                        <div className="form-group mt-3">
                          <label htmlFor="phoneInput">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phoneInput"
                            placeholder="Enter Number With country code"
                          // value={phone[index]}
                          // onChange={(e) => {
                          //   handleChangePhone(e, index)
                          // }}
                          />
                          <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

                        </div>
                      </div>
                    </div>
                  )
                }
                )
              }

              {
                counter > 0 && (
                  <button className="btn btn-info btn-sm" onClick={handleRemoveInput}>Remove</button>
                )

              }

              <div className="d-flex flex-row-reverse
 mt-5" style={{ gap: "4rem" }}>

                <button className="btn btn-primary" onClick={() => {
                  setSteps(
                    allData.ECI && "3" || allData.CIT && "4" || allData.annual && "5"
                  )
                }}>Next</button>
                <button className="btn btn-danger ml-3" onClick={() => {
                  setSteps('1')
                }}>Back</button>
                <button
                  className="btn btn-success ml-3"
                  onClick={handleAddInput}
                >
                  Add More People
                </button>
              </div>
            </form>
          </div>

        ) : null
      }
      {
        steps === '3' ? (
          <div>
            {
              allData.ECI &&
              <form className="card card-1" id="second__form" onSubmit={handleSubmit}>
                <h5 className="text-center">Choose Reminder settings
                </h5>
                {
                  allData.ECI && <h3>ECI Filing</h3>
                }

                <div className="form-group mt-3">
                  <label htmlFor="firstReminder">First Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIFirstReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        ECIFirstReminder: e.target.value

                      })

                    }}>
                    <option selected >Open this select Reminder</option>
                    <option value={`${currentYear}-${ninetyDaysReminder}-30T09:00`}>90 Days</option>
                    <option value={`${currentYear}-${sixtyDaysReminder}-30T09:00`}>60 Days</option>
                    <option value={`${currentYear}-${thirtyDaysReminder}-30T09:00`}>30 Days</option>
                  </select>
                  {
                    allData.ECIFirstReminder && <p>{allData.ECIFirstReminder}</p>
                  }
                </div>
                <div className="form-group  mt-3">
                  <label htmlFor="secondReminder">Second Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIsecondReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        ECIsecondReminder: e.target.value
                      })
                    }}
                  >
                    <option selected disabled>Open this select Reminder</option>
                    <option value={`${currentYear}-${ninetyDaysReminder}-30T09:00`}>90 Days</option>
                    <option value={`${currentYear}-${sixtyDaysReminder}-30T09:00`}>60 Days</option>
                    <option value={`${currentYear}-${thirtyDaysReminder}-30T09:00`}>30 Days</option>
                  </select>
                  {
                    allData.ECIsecondReminder && <p>{allData.ECIsecondReminder}</p>
                  }
                  {/* <input
                    type="datetime-local"
                    className="form-control"
                    id="secondReminder"
                    placeholder="Enter Name"
                    value={
                      allData.ECIsecondReminder
                    }
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        ECIsecondReminder: e.target.value
                      })
                    }}
                  /> */}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="finalReminder">Final Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIfinalReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        ECIfinalReminder: e.target.value
                      })
                    }}
                  >
                    <option selected disabled>Open this select Reminder</option>
                    <option value={`${currentYear}-${ninetyDaysReminder}-30T09:00`}>90 Days</option>
                    <option value={`${currentYear}-${sixtyDaysReminder}-30T09:00`}>60 Days</option>
                    <option value={`${currentYear}-${thirtyDaysReminder}-30T09:00`}>30 Days</option>
                  </select>
                  {
                    allData.ECIfinalReminder && <p>{allData.ECIfinalReminder}</p>
                  }
                </div>
                {
                  allData.annual || allData.CIT ? (
                    <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
                      <button className="btn btn-primary" onClick={() => {
                        setSteps(
                          allData.CIT ? '4' : '5'
                        )
                      }} >Next</button>
                      <button className="btn btn-danger ml-3" onClick={() => {
                        setSteps('2')
                      }}>Back</button>
                    </div>
                  ) : (
                    <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
                      <button className="btn btn-primary" >Submit</button>
                      <button className="btn btn-danger ml-3" onClick={() => {
                        setSteps('2')
                      }}>Back</button>
                    </div>
                  )
                }
              </form>
            }

          </div>
        ) : null
      }
      {
        steps === '4' ? (
          <div>
            {
              allData.CIT &&
              <form className="card card-1" id="second__form" onSubmit={handleSubmit}>
                <h5 className="text-center">Choose Reminder settings
                </h5>
                {
                  allData.CIT && <h3>CIT Filing</h3>
                }

                <div className="form-group mt-3">
                  <label htmlFor="firstReminder">First Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITfirstReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        CITfirstReminder: e.target.value
                      })
                    }}
                  >
                    <option selected disabled>Open this select Reminder</option>
                    <option value={CITNinetyDaysReminder}>90 Days</option>
                    <option value={CITSixtyDaysReminder}>60 Days</option>
                    <option value={CITThirtyDaysReminder}>30 Days</option>
                  </select>
                  {
                    allData.CITfirstReminder && <p>{allData.CITfirstReminder}</p>
                  }
                </div>
                <div className="form-group  mt-3">
                  <label htmlFor="secondReminder">Second Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITsecondReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        CITsecondReminder: e.target.value
                      })
                    }}
                  >
                    <option selected disabled>Open this select Reminder</option>
                    <option value={CITNinetyDaysReminder}>90 Days</option>
                    <option value={CITSixtyDaysReminder}>60 Days</option>
                    <option value={CITThirtyDaysReminder}>30 Days</option>
                  </select>
                  {
                    allData.CITsecondReminder && <p>{allData.CITsecondReminder}</p>
                  }
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="finalReminder">Final Reminder</label>
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITfinalReminder}
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        CITfinalReminder: e.target.value
                      })
                    }}
                  >
                    <option selected disabled>Open this select Reminder</option>
                    <option value={CITNinetyDaysReminder}>90 Days</option>
                    <option value={CITSixtyDaysReminder}>60 Days</option>
                    <option value={CITThirtyDaysReminder}>30 Days</option>
                  </select>
                  {
                    allData.CITfinalReminder && <p>{allData.CITfinalReminder}</p>
                  }
                </div>
                {
                  allData.annual ? (
                    <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
                      <button className="btn btn-primary" onClick={() => {
                        setSteps('5')
                      }} >Next</button>
                      <button className="btn btn-danger ml-3" onClick={() => {
                        setSteps('3')
                      }}>Back</button>
                    </div>
                  ) : (
                    <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
                      <button className="btn btn-primary" >Submit</button>
                      <button className="btn btn-danger ml-3" onClick={() => {
                        setSteps('3')
                      }}>Back</button>
                    </div>
                  )
                }
              </form>
            }

          </div>
        ) : null
      }
      {
        steps === '5' && allData.annual ? (
          <form className="card card-1" id="second__form" onSubmit={handleSubmit}>
            <h5 className="text-center">Choose Reminder settings
            </h5>
            {
              allData.annual && <h3>Annual Filling</h3>
            }
            <div className="form-group mt-3">
              <label htmlFor="firstReminder">First Reminder</label>
              <select class="form-select" aria-label="Default select example"
                value={allData.annualFirstReminder}
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    annualFirstReminder: e.target.value
                  })
                }}
              >
                <option selected disabled>Open this select Reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
              </select>
              {
                allData.annualFirstReminder && <p>{allData.annualFirstReminder}</p>
              }
            </div>
            <div className="form-group  mt-3">
              <label htmlFor="secondReminder">Second Reminder</label>
              <select class="form-select" aria-label="Default select example"
                value={allData.annualSecondReminder}
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    annualSecondReminder: e.target.value
                  })
                }}
              >
                <option selected disabled>Open this select Reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
              </select>
              {
                allData.annualSecondReminder && <p>{allData.annualSecondReminder}</p>
              }
            </div>
            <div className="form-group mt-3">
              <label htmlFor="finalReminder">Final Reminder</label>
              <select class="form-select" aria-label="Default select example"
                value={allData.annualFinalReminder}
                onChange={(e) => {
                  setAllData({
                    ...allData,
                    annualFinalReminder: e.target.value
                  })
                }}
              >
                <option selected disabled>Open this select Reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
              </select>
              {
                allData.annualFinalReminder && <p>{allData.annualFinalReminder}</p>
              }
            </div>
            <div className="d-flex flex-row-reverse mt-5" style={{ gap: "4rem" }}>
              <button className="btn btn-primary" >Submit</button>
              <button className="btn btn-danger ml-3" onClick={() => {
                setSteps('2')
              }}>Back</button>
            </div>
          </form>
        ) : null
      }


      <ToastContainer />

    </div >
  );
};
export default ReminderSetting;
