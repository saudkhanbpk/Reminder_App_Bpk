import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFileById, updateFile } from '../../services/addFile/FilesApi';
const UpdateFIle = () => {
  const [step, setStep] = useState(4);
  const [formData, setFormData] = useState({})

  let { _id } = useParams();
  let navigate = useNavigate();
  const getData = () => {
    getFileById(_id).then((res) => {
      setFormData(res.data)
    }).catch((e) => {
      console.log("e", e)
    })
  }
  useEffect(() => {
    getData()

  }, [])

  const handleUpdate = () => {
    let payload = { _id, formData: formData }
    updateFile(_id, formData).then((res) => {
      if (res.msg === "Update file Success") {
        alert(res.msg)
        navigate('/')
      }
    }).catch((e) => {
      console.log("e", e)
    })
  }


  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8  col-lg-8 col-md-8 col-xl-8">
          {/* {
            step === 1 && (
              <div className="row g-3 mt-5" id="add__form">
                <p >The Following Are The Brief Particulars of: </p>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">UEN</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Company Name</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Former Name if any</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Incorporation Date</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label"> Company Type</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Status</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Status Date</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <p>
                  Principal Activities
                </p>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Activities (1)</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Description</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Activities (2)</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Description</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"


                  />
                </div>
                <p>Capital</p>

                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Issued Share Capital</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label label__tag">Number of Shares </label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Share Type</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Paid-Up Capital</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label label__tag">Number of Shares </label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Share Type</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                </div>
                <button
                  className="btn__next mt-3"
                  onClick={() => setStep(2)}
                >Next</button>
              </div>

            )
          } */}
          {/* {
            step === 2 && (
              <div className="row g-3 mt-5" id="add__form">
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Registered Office Address</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Date Of Address</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div
                  className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Date Of Last AGM</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Date Of Last AR</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">FYE As At Date Of Last AR</label>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <p>Audit Firms</p>
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <label htmlFor="inputCity" className="form-label label__tag">Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"

                    />

                  </div>
                </div>
                <p>Officers/Authorized Representative(s)</p>
                <div className="row mt-4">
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Source  Address</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag"> Appointment</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                    <input type="text" className="form-control" id="inputCity"

                    />

                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Source  Address</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Appointment</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                    <input type="text" className="form-control" id="inputCity"
                    />

                  </div>
                </div>
                <>
                  <div className="row mt-4">
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Source Address</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag"> Appointment</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                      <input type="text" className="form-control" id="inputCity"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                      <input type="text" className="form-control" id="inputCity"
                      />

                    </div>
                  </div>
                </>
                <div className="d-flex">
                  <button className="btn btn-primary mt-5" onClick={() => setStep(step - 1)}>Back</button>
                  <button className="btn btn-primary mt-5 ms-auto" onClick={() => setStep(step + 1)}>Next</button>
                </div>
              </div>
            )
          } */}
          {/* {
            step === 3 && (
              <div className="row g-3 mt-5" id="add__form">
                <p>
                  Shareholder(s)
                </p>
                <div className="col-md-4">
                  <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputCity" className="form-label label__tag">Natio/Citizenship</label>
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputCity" className="form-label label__tag">Source Of Addr</label>
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputCity" className="form-label label__tag">A Changed</label>
                  <input type="text" className="form-control" id="inputCity"

                  />
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-6"></div>

                </div>

                <div className="row mt-4">
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Ordinary(Number)</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                    <input type="text" className="form-control" id="inputCity"

                    />

                  </div>

                </div>
                <>
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Natio/Citizenship</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Source Of Addr</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">A Changed</label>
                    <input type="text" className="form-control" id="inputCity"

                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                      <input type="text" className="form-control" id="inputCity"

                      />
                    </div>
                    <div className="col-md-6"></div>

                  </div>

                  <div className="row mt-4">
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Ordinary(Number)</label>
                      <input type="text" className="form-control" id="inputCity"

                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                      <input type="text" className="form-control" id="inputCity"

                      />

                    </div>

                  </div>
                </>
                <div className="d-flex">
                  <button className="btn btn-primary mt-5" onClick={() => setStep(step - 1)}>Back</button>
                  <button className="btn btn-primary mt-5 ms-auto" onClick={() => setStep(step + 1)}>Next</button>
                </div>


              </div>
            )
          } */}
          {
            step === 4 && (
              <>
                <div className="row g-3 mt-5" id="add__form">
                  <p >The Following Are The Brief Particulars of: </p>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">UEN</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.uen}
                      onChange={(e) => setFormData({ ...formData, uen: e.target.value })}


                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Company Name</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Former Name if any</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.formerName}
                      onChange={(e) => setFormData({ ...formData, formerName: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Incorporation Date</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.incorporationDate}
                      onChange={(e) => setFormData({ ...formData, incorporationDate: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label"> Company Type</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Status</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Status Date</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.statusDate}
                      onChange={(e) => setFormData({ ...formData, statusDate: e.target.value })}

                    />
                  </div>
                  <p>
                    Principal Activities
                  </p>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Activities (1)</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.activities1}
                      onChange={(e) => setFormData({ ...formData, activities1: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Description</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.Description1
                      }
                      onChange={(e) => setFormData({
                        ...formData, Description1
                          : e.target.value
                      })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Activities (2)</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.activities2}
                      onChange={(e) => setFormData({ ...formData, activities2: e.target.value })}


                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Description</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.Description2}
                      onChange={(e) => setFormData({ ...formData, Description2: e.target.value })}


                    />
                  </div>
                  <p>Capital</p>

                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Issued Share Capital</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.issuedCapital
                        }
                        onChange={(e) => setFormData({
                          ...formData, issuedCapital
                            : e.target.value
                        })}

                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label label__tag">Number of Shares </label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.numberOfShares1
                        }
                        onChange={(e) => setFormData({
                          ...formData, numberOfShares1
                            : e.target.value
                        })}

                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.currency1}
                        onChange={(e) => setFormData({ ...formData, currency1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Share Type</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareType1}
                        onChange={(e) => setFormData({ ...formData, shareType1: e.target.value })}

                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Paid-Up Capital</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.paidUpAmount}
                        onChange={(e) => setFormData({ ...formData, paidUpAmount: e.target.value })}

                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label label__tag">Number of Shares </label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.numberOfShares2}
                        onChange={(e) => setFormData({ ...formData, numberOfShares2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.currency2}
                        onChange={(e) => setFormData({ ...formData, currency2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Share Type</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareType2}
                        onChange={(e) => setFormData({ ...formData, shareType2: e.target.value })}

                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Registered Office Address</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.RegisteredOfficeAddress
                      }
                      onChange={(e) => setFormData({
                        ...formData, RegisteredOfficeAddress
                          : e.target.value
                      })}

                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Date Of Address</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.DateOfAddress}
                      onChange={(e) => setFormData({ ...formData, DateOfAddress: e.target.value })}

                    />
                  </div>
                  <div
                    className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Date Of Last AGM</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.DateOfLastAGM}
                      onChange={(e) => setFormData({ ...formData, DateOfLastAGM: e.target.value })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Date Of Last AR</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.DateOfLastAR
                      }
                      onChange={(e) => setFormData({
                        ...formData, DateOfLastAR
                          : e.target.value
                      })}

                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">FYE As At Date Of Last AR</label>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.FYEAsAtDateOfLastAR}
                      onChange={(e) => setFormData({ ...formData, FYEAsAtDateOfLastAR: e.target.value })}

                    />
                  </div>
                  <p>Audit Firms</p>
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
                      <label htmlFor="inputCity" className="form-label label__tag">Name </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        value={formData.Name}
                        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}

                      />

                    </div>
                  </div>
                  <p>Officers/Authorized Representative(s)</p>
                  <div className="row mt-4">
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersName1}
                        onChange={(e) => setFormData({ ...formData, officersName1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersId1}
                        onChange={(e) => setFormData({ ...formData, officersId1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersNationalityCitizenship1}
                        onChange={(e) => setFormData({ ...formData, officersNationalityCitizenship1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Source  Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersSourceOfAddress1}
                        onChange={(e) => setFormData({ ...formData, officersSourceOfAddress1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag"> Appointment</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersDateOfAppointment1
                        }
                        onChange={(e) => setFormData({
                          ...formData, officersDateOfAppointment1
                            : e.target.value
                        })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersPositionHeld1}
                        onChange={(e) => setFormData({ ...formData, officersPositionHeld1: e.target.value })}

                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersAddress1}
                        onChange={(e) => setFormData({ ...formData, officersAddress1: e.target.value })}


                      />

                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersName2}
                        onChange={(e) => setFormData({ ...formData, officersName2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersId2}
                        onChange={(e) => setFormData({ ...formData, officersId2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersNationalityCitizenship2}
                        onChange={(e) => setFormData({ ...formData, officersNationalityCitizenship2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Source  Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersSourceOfAddress2}
                        onChange={(e) => setFormData({ ...formData, officersSourceOfAddress2: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Appointment</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersDateOfAppointment2
                        }
                        onChange={(e) => setFormData({
                          ...formData, officersDateOfAppointment2
                            : e.target.value
                        })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersPositionHeld2}
                        onChange={(e) => setFormData({ ...formData, officersPositionHeld2: e.target.value })}


                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.officersAddress2}
                        onChange={(e) => setFormData({ ...formData, officersAddress2: e.target.value })}


                      />

                    </div>
                  </div>

                  <>
                    <div className="row mt-4">
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersName3}
                          onChange={(e) => setFormData({ ...formData, officersName3: e.target.value })}

                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersId3}
                          onChange={(e) => setFormData({ ...formData, officersId3: e.target.value })}

                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag">Citizenship</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersNationalityCitizenship3}
                          onChange={(e) => setFormData({ ...formData, officersNationalityCitizenship3: e.target.value })}

                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag">Source Address</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersSourceOfAddress3}
                          onChange={(e) => setFormData({ ...formData, officersSourceOfAddress3: e.target.value })}

                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag"> Appointment</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersDateOfAppointment3}
                          onChange={(e) => setFormData({ ...formData, officersDateOfAppointment3: e.target.value })}

                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputCity" className="form-label label__tag">Position Held</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersPositionHeld3}
                          onChange={(e) => setFormData({ ...formData, officersPositionHeld3: e.target.value })}

                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.officersAddress3}
                          onChange={(e) => setFormData({ ...formData, officersAddress3: e.target.value })}

                        />

                      </div>
                    </div>
                  </>
                  <p>
                    Shareholder(s)
                  </p>
                  <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.ShareholderName}
                      onChange={(e) => setFormData({ ...formData, ShareholderName: e.target.value })}

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.shareholderId}
                      onChange={(e) => setFormData({ ...formData, shareholderId: e.target.value })}

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Natio/Citizenship</label>
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.shareholderNationality
                      }
                      onChange={(e) => setFormData({
                        ...formData, shareholderNationality
                          : e.target.value
                      })}


                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">Source Of Addr</label>
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.shareholderSourceOfAddress}
                      onChange={(e) => setFormData({ ...formData, shareholderSourceOfAddress: e.target.value })}

                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCity" className="form-label label__tag">A Changed</label>
                    <input type="text" className="form-control" id="inputCity"
                      value={formData.shareholderAddressChanged}
                      onChange={(e) => setFormData({ ...formData, shareholderAddressChanged: e.target.value })}


                    />
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareholderAddress}
                        onChange={(e) => setFormData({ ...formData, shareholderAddress: e.target.value })}

                      />
                    </div>
                    <div className="col-md-6"></div>

                  </div>

                  <div className="row mt-4">
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Ordinary(Number)</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.ordinaryNumber}
                        onChange={(e) => setFormData({ ...formData, ordinaryNumber: e.target.value })}

                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.currency1}
                        onChange={(e) => setFormData({ ...formData, currency1: e.target.value })}


                      />

                    </div>

                  </div>

                  <>
                    <div className="col-md-4">
                      <label htmlFor="inputCity" className="form-label label__tag">Name</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.ShareholderName1}
                        onChange={(e) => setFormData({ ...formData, ShareholderName1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">ID</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareholderId1}
                        onChange={(e) => setFormData({ ...formData, shareholderId1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Natio/Citizenship</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareholderNationality1}
                        onChange={(e) => setFormData({ ...formData, shareholderNationality1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">Source Of Addr</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareholderSourceOfAddress1}
                        onChange={(e) => setFormData({ ...formData, shareholderSourceOfAddress1: e.target.value })}

                      />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputCity" className="form-label label__tag">A Changed</label>
                      <input type="text" className="form-control" id="inputCity"
                        value={formData.shareholderAddressChanged1}
                        onChange={(e) => setFormData({ ...formData, shareholderAddressChanged1: e.target.value })}

                      />
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label label__tag">Address</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.shareholderAddress1}
                          onChange={(e) => setFormData({ ...formData, shareholderAddress1: e.target.value })}


                        />
                      </div>
                      <div className="col-md-6"></div>

                    </div>

                    <div className="row mt-4">
                      <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label label__tag">Ordinary(Number)</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.ordinaryNumber1}
                          onChange={(e) => setFormData({ ...formData, ordinaryNumber1: e.target.value })}

                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label label__tag">Currency</label>
                        <input type="text" className="form-control" id="inputCity"
                          value={formData.currency2}
                          onChange={(e) => setFormData({ ...formData, currency1: e.target.value })}


                        />

                      </div>

                    </div>
                  </>
                  <div className="mt-2">
                    <button
                      className="btn__next"
                      onClick={handleUpdate}
                    >Update</button>
                  </div>
                </div>
              </>
            )
          }
        </div>

        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default UpdateFIle
