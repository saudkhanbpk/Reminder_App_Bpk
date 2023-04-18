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
  const [disableReminder, setDisableReminder] = useState(false)
  const [disableReminder1, setDisableReminder1] = useState(false)
  const reminder = useSelector((state) => state.data)
  let filteredData = reminder.formData.filter((item) => item._id === id._id)
  useEffect(() => {
    setData(reminder)
  }, [reminder])
  // get the month from the above date
  let month = filteredData[0]?.FYEAsAtDateOfLastAR?.split("/")[1]
  //add 3 months to the month
  let result = (parseInt(month) + 3) % 12
  const annualDate = (parseInt(month) + 7) % 12
  //before
  let beforeMonth = filteredData[0]?.FYEAsAtDateOfLastAR?.split("/")[1]
  let before = (parseInt(beforeMonth) - 3) % 12
  let ninetyDaysReminder = (before) + 3 % 12

  //get current year
  let currentYear = new Date().getFullYear()
  let sixtyDaysReminder = (parseInt(before) + 4) % 12
  let thirtyDaysReminder = (parseInt(before) + 5) % 12
  let CITNinetyDaysReminder = `${currentYear}-08-30T01:00`
  let CITSixtyDaysReminder = `${currentYear}-09-30T01:00`
  let CITThirtyDaysReminder = `${currentYear}-10-30T01:00`
  let id1 = localStorage.getItem("fileId")
  //annual reminder
  let annualbefore = (parseInt(annualDate) - 3) % 12
  let annualNinetyDaysReminder1 = (parseInt(annualbefore) + 3) % 12
  let annualSixtyDaysReminder2 = (parseInt(annualbefore) + 4) % 12
  let annualThirtyDaysReminder3 = (parseInt(annualbefore) + 5) % 12
  let annualNinetyDaysReminder = `${currentYear}-0${annualNinetyDaysReminder1}-30T01:00`
  let annualSixtyDaysReminder = `${currentYear}-0${annualSixtyDaysReminder2}-30T01:00`
  let annualThirtyDaysReminder = `${currentYear}-0${annualThirtyDaysReminder3}-30T01:00`
  const [steps, setSteps] = useState('1');
  const [counter, setCounter] = useState(0)
  const [showInput, setShowInput] = useState(false);
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);
  const [showInput5, setShowInput5] = useState(false);
  const [showInput6, setShowInput6] = useState(false);
  const [showInput7, setShowInput7] = useState(false);
  const [showInput8, setShowInput8] = useState(false);
  const [disabledInputs, setDisabledInputs] = useState([]);
  const [disabledInputs1, setDisabledInputs1] = useState([]);
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
    ECIfillingDate: `31-${result}`,
    CITfillingDate: `31-11`,
    annualFillingDate: `31-${annualDate}`,
    addedPeople: [],
    fileId: id1
  })

  const handleAddInput = (e) => {
    e.preventDefault();
    setCounter(counter + 1)
  }

  console.log(disabledInputs)
  const handleRemoveInput = (e) => {
    e.preventDefault();
    if (counter !== 0)
      setCounter(counter - 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const shareHoldersArray = allData.shareHoldersArray.map((shareHolders) => {
      const filteredEmail = shareHolders.email?.filter((email) => {
        return !disabledInputs.includes(email);
      });
      const filteredPhone = shareHolders.phone?.filter((phone) => {
        return !disabledInputs.includes(phone);
      });
      return {
        ...shareHolders,
        email: filteredEmail,
        phone: filteredPhone,
      };
    }).filter((shareHolders) => {
      // Remove shareHolders objects that have no emails or phones left
      return shareHolders.email?.length || shareHolders.phone?.length;
    });
    const officersArray = allData.officersArray.map((officers) => {
      const filteredEmail = officers.officersEmail?.filter((email) => {
        return !disabledInputs1.includes(email);
      });
      const filteredPhone = officers.officerPhone?.filter((phone) => {
        return !disabledInputs1.includes(phone)
      });
      return {
        ...officers,
        officersEmail: filteredEmail,
        officerPhone: filteredPhone,
      };
    }).filter((officers) => {
      // Remove officers objects that have no emails or phones left
      return officers.officersEmail?.length || officers.officerPhone?.length;
    })
    let itemEmail = shareHoldersArray.map((item) => item.email)
    let itemPhone = shareHoldersArray.map((item) => item.phone)
    let itemEmail1 = officersArray.map((item) => item.officersEmail)
    let itemPhone1 = officersArray.map((item) => item.officerPhone)
    let shareHolderEmail = itemEmail.flat()
    let shareHolderPhone = itemPhone.flat()
    let officersEmail = itemEmail1.flat()
    let officersPhone = itemPhone1.flat()
    let newAlldata = {
      ...allData,
      shareHoldersArray: [{ email: shareHolderEmail[0] }, { phone: shareHolderPhone[1] }],
      officersArray: [{ officersEmail: officersEmail[0] }, { officerPhone: officersPhone[1] }]
    }
    postReminder(newAlldata).then((res) => {
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


  const handleChangeECI = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput(true);
    } else {
      setShowInput(false);
      setAllData({
        ...allData,
        ECIFirstReminder: value
      })
    }
  }

  const handleChangeECI1 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput1(true);
    } else {
      setShowInput1(false);
      setAllData({
        ...allData,
        ECIsecondReminder: value
      })
    }
  }

  const handleChangeECI2 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput2(true);
    } else {
      setShowInput2(false);
      setAllData({
        ...allData,
        ECIfinalReminder: value
      })
    }
  }

  const handleChangeCIT = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput3(true);
    } else {
      setShowInput3(false);
      setAllData({
        ...allData,
        CITfirstReminder: value
      })
    }
  }

  const handleChangeCIT1 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput4(true);
    } else {
      setShowInput4(false);
      setAllData({
        ...allData,
        CITsecondReminder: value
      })
    }
  }

  const handleChangeCIT2 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput5(true);
    } else {
      setShowInput5(false);
      setAllData({
        ...allData,
        CITfinalReminder: value
      })
    }
  }

  const handleChangeAnnual = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput6(true);
    } else {
      setShowInput6(false);
      setAllData({
        ...allData,
        annualFirstReminder: value
      })
    }
  }

  const handleChangeAnnual1 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput7(true);
    } else {
      setShowInput7(false);
      setAllData({
        ...allData,
        annualSecondReminder: value
      })
    }
  }

  const handleChangeAnnual2 = (event) => {
    const value = event.target.value;
    if (value === "other") {
      setShowInput8(true);
    } else {
      setShowInput8(false);
      setAllData({
        ...allData,
        annualFinalReminder: value
      })
    }
  }

  const handleDisable = (e, index, email, phone) => {
    let newDisabledInputs = [...disabledInputs];
    if (e === true) {
      newDisabledInputs.push(email, phone);
    } else if (e === false) {
      newDisabledInputs = newDisabledInputs.filter((i) => i !== email, phone);
    }
    setDisabledInputs(newDisabledInputs);
  }

  const handleOfficersDisable = (e, index, email, phone) => {
    let newDisabledInputs = [...disabledInputs1];
    if (e === true) {
      newDisabledInputs.push(email, phone);
    } else if (e === false) {
      newDisabledInputs = newDisabledInputs.filter((i) => i !== email, phone);
    }
    setDisabledInputs1(newDisabledInputs);
  }
  console.log("disabledInputs1:", disabledInputs1)

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
              <label htmlFor="exampleInputEmail1">2. CIT Filings</label>
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
                      const isDisabled = disabledInputs.includes(
                        email[index],
                        phone[index],
                        item

                      );
                      if (item === undefined) {
                        return null
                      } else {

                        return (
                          <div className="row">
                            <div className="col-md-3">
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
                                  disabled={
                                    // disableReminder === true ? true : false
                                    isDisabled
                                  }
                                />

                              </div>
                            </div>
                            <div className="col-md-3">
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
                                  }}
                                  disabled={
                                    // disableReminder === true ? true : false
                                    isDisabled
                                  }
                                />
                                <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

                              </div>

                            </div>
                            <div className="col-md-3">
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
                                  disabled={
                                    isDisabled
                                  }

                                />
                                <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-check mt-5">
                                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1"
                                  value={
                                    disableReminder
                                  }
                                  onChange={(e) => {
                                    handleDisable(e.target.checked, index, email[index], phone[index])
                                  }}

                                />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                  No Reminder
                                </label>
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
                      const isDisabled = disabledInputs1.includes(officerEmail[index], officerPhone[index],
                        item);
                      if (item === undefined) {
                        return null
                      } else {

                        return (
                          <div className="row">
                            <div className="col-md-3">
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
                                  disabled={isDisabled}
                                />

                              </div>
                            </div>
                            <div className="col-md-3">
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
                                  disabled={isDisabled}

                                />
                                <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small>

                              </div>

                            </div>
                            <div className="col-md-3">
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
                                  disabled={isDisabled}

                                />
                                <small id="phoneInput" className="form-text text-muted">Enter Your Phone Number With Country Code.</small>

                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-check mt-5">
                                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck" value={disableReminder1} onChange={(e) => handleOfficersDisable(e.target.checked, index,
                                  officerEmail[index], officerPhone[index]
                                )} />
                                <label className="form-check-label" htmlFor="defaultCheck">
                                  No Reminder
                                </label>
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
                  <br />
                  {showInput ? (
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      value={allData.ECIFirstReminder}
                      onChange={(e) => {
                        const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                        const date = new Date(inputDate);
                        const month = date.getMonth() + 1 // get the month abbreviation
                        const day = date.getDate();
                        const year = date.getFullYear();
                        setAllData({
                          ...allData,
                          ECIFirstReminder: `${year}-0${month}-${day}T01:00`
                        })
                        setShowInput(false)
                      }}
                    />
                  ) : (
                    allData.ECIFirstReminder && <p>{allData.ECIFirstReminder.split('T')[0].split('-').slice(1).join('-')}</p>
                  )}
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIFirstReminder}
                    onChange={(e) => {
                      handleChangeECI(e)
                    }}>
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${currentYear}-0${ninetyDaysReminder}-30T01:00`
                    }>90 Days</option>
                    <option value={`${currentYear}-0${sixtyDaysReminder}-30T01:00`}>60 Days</option>
                    <option value={`${currentYear}-0${thirtyDaysReminder}-30T01:00`}>30 Days</option>
                    <option value="other">select date and time manually</option>
                  </select>

                </div>
                <div className="form-group  mt-3">
                  <label htmlFor="secondReminder">Second Reminder</label>
                  <br />

                  {
                    showInput1 ? (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        value={allData.ECIsecondReminder}
                        onChange={(e) => {
                          const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                          const date = new Date(inputDate);
                          const month = date.getMonth() + 1 // get the month abbreviation
                          const day = date.getDate();
                          const year = date.getFullYear();
                          setAllData({
                            ...allData,
                            ECIsecondReminder: `${year}-0${month}-${day}T01:00`
                          })
                          setShowInput1(false)
                        }
                        }
                      />
                    ) : (
                      allData.ECIsecondReminder && <p>{allData.ECIsecondReminder.split('T')[0].split('-').slice(1).join('-')}</p>

                    )
                  }
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIsecondReminder}
                    onChange={(e) => {
                      handleChangeECI1(e)
                    }}
                  >
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${currentYear}-0${ninetyDaysReminder}-30T01:00`
                    }>90 Days</option>
                    <option value={`${currentYear}-0${sixtyDaysReminder}-30T01:00`}>60 Days</option>
                    <option value={`${currentYear}-0${thirtyDaysReminder}-30T01:00`}>30 Days</option>
                    <option value="other">select date and time manually</option>
                  </select>

                </div>
                <div className="form-group mt-3">
                  <label htmlFor="finalReminder">Final Reminder</label>
                  <br />

                  {
                    showInput2 ? (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        value={allData.ECIfinalReminder}
                        onChange={(e) => {
                          const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                          const date = new Date(inputDate);
                          const month = date.getMonth() + 1 // get the month abbreviation
                          const day = date.getDate();
                          const year = date.getFullYear();
                          setAllData({
                            ...allData,
                            ECIfinalReminder: `${year}-0${month}-${day}T01:00`
                          })
                          setShowInput2(false)
                        }
                        }
                      />
                    ) : (
                      allData.ECIfinalReminder && <p>{allData.ECIfinalReminder.split('T')[0].split('-').slice(1).join('-')}</p>

                    )
                  }
                  <select class="form-select" aria-label="Default select example"
                    value={allData.ECIfinalReminder}
                    onChange={(e) => {
                      handleChangeECI2(e)
                    }}
                  >
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${currentYear}-0${ninetyDaysReminder}-30T01:00`
                    }>90 Days</option>
                    <option value={`${currentYear}-0${sixtyDaysReminder}-30T01:00`}>60 Days</option>
                    <option value={`${currentYear}-0${thirtyDaysReminder}-30T01:00`}>30 Days</option>
                    <option value="other">select date and time manually</option>

                  </select>


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
                  <br />

                  {
                    showInput3 ? (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="finalReminder"
                        placeholder="Enter date and time"
                        value={allData.CITfirstReminder}
                        onChange={(e) => {
                          const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                          const date = new Date(inputDate);
                          const month = date.getMonth() + 1 // get the month abbreviation
                          const day = date.getDate();
                          const year = date.getFullYear();
                          setAllData({
                            ...allData,
                            CITfirstReminder: `${year}-0${month}-${day}T01:00`
                          })
                          setShowInput3(false)
                        }
                        }
                      />
                    ) : (
                      allData.CITfirstReminder && <p>{allData.CITfirstReminder.split('T')[0].split('-').slice(1).join('-')}</p>

                    )
                  }
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITfirstReminder}
                    onChange={(e) => {
                      handleChangeCIT(e)
                    }}
                  >
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${CITNinetyDaysReminder}
                    `}>90 Days</option>
                    <option value={`${CITSixtyDaysReminder}`}>60 Days</option>
                    <option value={`${CITThirtyDaysReminder}`}>30 Days</option>
                    <option value="other">select date and time manually</option>
                  </select>


                </div>
                <div className="form-group  mt-3">
                  <label htmlFor="secondReminder">Second Reminder</label>
                  <br />
                  {
                    showInput4 ? (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="finalReminder"
                        placeholder="Enter date and time"
                        value={allData.CITsecondReminder}
                        onChange={(e) => {
                          const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                          const date = new Date(inputDate);
                          const month = date.getMonth() + 1 // get the month abbreviation
                          const day = date.getDate();
                          const year = date.getFullYear();
                          setAllData({
                            ...allData,
                            CITsecondReminder: `${year}-${month}-${day}T01:00`
                          })
                          setShowInput4(false)
                        }
                        }
                      />
                    ) : (
                      allData.CITsecondReminder && <p>{allData.CITsecondReminder.split('T')[0].split('-').slice(1).join('-')}</p>
                    )
                  }
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITsecondReminder}
                    onChange={(e) => {
                      handleChangeCIT1(e)
                    }}
                  >
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${CITNinetyDaysReminder}
                    `}>90 Days</option>
                    <option value={`${CITSixtyDaysReminder}`}>60 Days</option>
                    <option value={`${CITThirtyDaysReminder}`}>30 Days</option>
                    <option value="other">select date and time manually</option>
                  </select>


                </div>
                <div className="form-group mt-3">
                  <label htmlFor="finalReminder">Final Reminder</label>
                  <br />

                  {
                    showInput5 ? (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="finalReminder"
                        placeholder="Enter date and time"
                        value={allData.CITfinalReminder}
                        onChange={(e) => {
                          const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                          const date = new Date(inputDate);
                          const month = date.getMonth() + 1 // get the month abbreviation
                          const day = date.getDate();
                          const year = date.getFullYear();
                          setAllData({
                            ...allData,
                            CITfinalReminder: `${year}-${month}-${day}T01:00`
                          })
                          setShowInput5(false)
                        }
                        }
                      />
                    ) : (
                      allData.CITfinalReminder && <p>{allData.CITfinalReminder.split('T')[0].split('-').slice(1).join('-')}</p>

                    )
                  }
                  <select class="form-select" aria-label="Default select example"
                    value={allData.CITfinalReminder}
                    onChange={(e) => {
                      handleChangeCIT2(e)
                    }}
                  >
                    <option selected >Choose below options to receive reminder</option>
                    <option value={`${CITNinetyDaysReminder}
                    `}>90 Days</option>
                    <option value={`${CITSixtyDaysReminder}`}>60 Days</option>
                    <option value={`${CITThirtyDaysReminder}`}>30 Days</option>
                    <option value="other">select date and time manually</option>
                  </select>

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
              <br />

              {
                showInput6 ? (
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="annaulFirstReminder"
                    placeholder="Enter date and time"
                    value={allData.annualFirstReminder}
                    onChange={(e) => {
                      const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                      const date = new Date(inputDate);
                      const month = date.getMonth() + 1 // get the month abbreviation
                      const day = date.getDate();
                      const year = date.getFullYear();
                      setAllData({
                        ...allData,
                        annualFirstReminder: `${year}-${month}-${day}T01:00`
                      })
                      setShowInput6(false)
                    }
                    }
                  />
                ) : (
                  allData.annualFirstReminder && <p>{allData.annualFirstReminder.split('T')[0].split('-').slice(1).join('-')}</p>
                )
              }
              <select class="form-select" aria-label="Default select example"
                value={allData.annualFirstReminder}
                onChange={(e) => {
                  handleChangeAnnual(e)
                }}
              >
                <option selected >Choose below options to receive reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
                <option value="other">select date and time manually</option>
              </select>
            </div>
            <div className="form-group  mt-3">
              <label htmlFor="secondReminder">Second Reminder</label>
              <br />
              {
                showInput7 ? (
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="finalReminder"
                    placeholder="Enter date and time"
                    value={allData.annualSecondReminder}
                    onChange={(e) => {
                      const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                      const date = new Date(inputDate);
                      const month = date.getMonth() + 1 // get the month abbreviation
                      const day = date.getDate();
                      const year = date.getFullYear();
                      setAllData({
                        ...allData,
                        annualSecondReminder: `${year}-${month}-${day}T01:00`
                      })
                      setShowInput7(false)
                    }
                    }
                  />
                ) : (
                  allData.annualSecondReminder && <p>{allData.annualSecondReminder.split('T')[0].split('-').slice(1).join('-')}</p>

                )
              }
              <select class="form-select" aria-label="Default select example"
                value={allData.annualSecondReminder}
                onChange={(e) => {
                  handleChangeAnnual1(e)
                }}
              >
                <option selected >Choose below options to receive reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
                <option value="other">select date and time manually</option>
              </select>

            </div>
            <div className="form-group mt-3">
              <label htmlFor="finalReminder">Final Reminder</label>
              <br />

              {
                showInput8 ? (
                  <input
                    type="date"
                    className="form-control"
                    id="finalReminder"
                    placeholder="Enter date and time"
                    value={allData.annualFinalReminder}
                    onChange={(e) => {
                      const inputDate = e.target.value; // assuming the input value is in the format "yyyy-MM-dd"
                      const date = new Date(inputDate);
                      const month = date.getMonth() + 1 // get the month abbreviation
                      const day = date.getDate();
                      const year = date.getFullYear();
                      setAllData({
                        ...allData,
                        annualFinalReminder: `${year}-${month}-${day}T01:00`
                      })
                      setShowInput8(false)
                    }
                    }
                  />
                ) : (
                  allData.annualFinalReminder && <p>{allData.annualFinalReminder.split('T')[0].split('-').slice(1).join('-')}</p>
                )
              }
              <select class="form-select" aria-label="Default select example"
                value={allData.annualFinalReminder}
                onChange={(e) => {
                  handleChangeAnnual2(e)
                }}
              >
                <option selected >Choose below options to receive reminder</option>
                <option value={annualNinetyDaysReminder}>90 Days</option>
                <option value={annualSixtyDaysReminder}>60 Days</option>
                <option value={annualThirtyDaysReminder}>30 Days</option>
                <option value="other">select date and time manually</option>
              </select>


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
