import React, { useState, useEffect } from "react";
import "./AddFile.css"
import { GrAddCircle } from 'react-icons/gr';
import { Document, Page, pdfjs } from 'react-pdf';
import { postFile } from "../../services/addFile/FilesApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddFile() {
    const [numPages, setNumPages] = useState(null);
    const [files, setFiles] = useState('');
    const [formData, setFormData] = useState({})
    const [formData1, setFormData1] = useState({})
    const [formData2, setFormData2] = useState({})
    const [mainForm, setMainForm] = useState({})
    const [step, setStep] = useState(1);

    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)
    const [newDataArray, setNewDataArray] = useState([
        {
            name2: "",
            id2: "",
            nationality1: "",
            addressChanged2: "",
            sourceOfAddress2: "",
            address2: "",
            ordinaryNumber1: "",
            currency1: "",
        }
    ])


    const handleAddInput = () => {
        setCounter(counter + 1)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleRemoveInput = () => {
        setCounter(counter - 1)
    }

    const fileUpload = (e) => {
        let file = e.target.files[0]
        // console.log('data', file)
        setFiles(file)
    }
    const handleRenderSuccess = async (page) => {
        // console.log("parameter", page)
        const text = await page.getTextContent();
        const getAllDetails = text.items.map((item) => item.str);
        // console.log("getAllDetails", getAllDetails)
        const textData = getAllDetails.filter((item) => item.trim().length > 0 && item.trim() !== ":" && item.trim() !== "SAMPLE"
            && item.trim() !== "Principal Activities"
        )
        // console.log("textData", textData);
        switch (page._pageIndex) {
            case 0:
                setTimeout
                    (() => {
                        setFormData({
                            ...formData, UEN: textData[
                                [textData.indexOf("UEN") + 1]
                            ], companyName: textData[
                                [textData.indexOf("Company Name.") + 1]
                            ], formerName: textData[
                                [textData.indexOf("Former Name if any")]
                            ],
                            incorporationDate: textData[
                                [textData.indexOf("Incorporation Date.") + 1]
                            ], companyType: textData[
                                [textData.indexOf("Company Type") + 1]
                            ], status: textData[
                                [textData.indexOf("Status") + 1]
                            ],
                            statusDate: textData[
                                [textData.indexOf("Status Date") + 1]
                            ],
                            // principal activities
                            activities1: textData[
                                [textData.indexOf("Activities (I)") + 1]
                            ],
                            Description1: textData[23 - 1],
                            activities2: textData[
                                [textData.indexOf("Description") + 1]
                            ],
                            Description2: textData[
                                [textData.indexOf("Activities (II)") + 1]
                            ],
                            // capital
                            issuedCapital: textData[
                                [textData.indexOf("(AMOUNT)") + 1]
                            ],
                            numberOfShares1: textData[
                                [textData.indexOf("ORDINARY") + 1]
                            ],
                            currency1: textData[

                                [textData.indexOf("Capital" + 7)]

                            ],
                            shareType1: textData[37],
                            // number of shares includes number of treasury shares
                            paidUpAmount: textData[
                                [textData.indexOf("Paid-Up Capital") + 4]
                            ],
                            numberOfShares2: getAllDetails[75],
                            currency2: getAllDetails[77],
                            shareType2: getAllDetails[94],
                        })
                    }, 1000)

                break;
            case 1:

                setTimeout
                    (() => {

                        setFormData1({
                            ...formData1,
                            // pages 2
                            RegisteredOfficeAddress: textData[
                                [textData.indexOf("Registered Office Address") + 1]
                            ],
                            DateOfAddress: textData[
                                [textData.indexOf("Date of Address") + 1]
                            ],
                            DateOfLastAGM: textData[
                                [textData.indexOf("Date of Last AGM") + 1]
                            ],
                            DateOfLastAR: textData[
                                [textData.indexOf("Date of Last AR") + 1]
                            ],
                            FYEAsAtDateOfLastAR: textData[
                                [textData.indexOf("FYE As At Date of Last AR") + 1]
                            ],
                            // auditFirms
                            Name: textData[
                                [textData.indexOf("Audit Firms") + 2]
                            ],
                            // charges
                            officersName1: textData[
                                [textData.indexOf("Date of Appointment") + 1]
                            ],
                            officersId1: textData[38],
                            officersNationalityCitizenship1: textData[39],
                            officersDateOfAppointment1: textData[40],
                            officersSourceOfAddress1: textData[41],
                            officersPositionHeld1: textData[42],
                            officersAddress1: textData[43],
                            officersName2: textData[[textData.indexOf("Date of Appointment") + 11]],
                            officersId2: textData[
                                [textData.indexOf("Date of Appointment") + 12]
                            ],
                            officersNationalityCitizenship2: textData[
                                [textData.indexOf("Date of Appointment") + 13]
                            ],
                            officersDateOfAppointment2: textData[
                                [textData.indexOf("Date of Appointment") + 14]
                            ],
                            officersSourceOfAddress2: textData[
                                [textData.indexOf("Date of Appointment") + 15]
                            ],
                            officersPositionHeld2: textData[
                                [textData.indexOf("Date of Appointment") + 16]
                            ],
                            officersAddress2: textData[
                                [textData.indexOf("Date of Appointment") + 17]
                            ],
                            officersName3: textData[[textData.indexOf("Date of Appointment") + 19]],
                            officersId3: textData[
                                [textData.indexOf("Date of Appointment") + 20]
                            ],
                            officersNationalityCitizenship3: textData[
                                [textData.indexOf("Date of Appointment") + 21]
                            ],
                            officersDateOfAppointment3: textData[
                                [textData.indexOf("Date of Appointment") + 22]
                            ],
                            officersSourceOfAddress3: textData[
                                [textData.indexOf("Date of Appointment") + 23]
                            ],

                            officersPositionHeld3: textData[
                                [textData.indexOf("Date of Appointment") + 24]
                            ],
                            officersAddress3: textData[
                                [textData.indexOf("Date of Appointment") + 25]
                            ],
                            // officersName4: textData[6756],
                            // officersId4: textData[23432],
                            // officersNationalityCitizenship4: textData[23432],
                            // officersDateOfAppointment4: textData[32423],
                            // officersSourceOfAddress4: textData[3423],
                            // officersPositionHeld4: textData[345],
                            // officersAddress4: textData[436546],
                            // officersName5: textData[43543],
                            // officersId5: textData[43543],
                            // officersNationalityCitizenship5: textData[43534],
                            // officersDateOfAppointment5: textData[34543],
                            // officersSourceOfAddress5: textData[43543],
                            // officersPositionHeld5: textData[43534],
                            // officersAddress5: textData[43543],
                        })
                    }, 3000)

                break;
            case 2:

                setTimeout
                    (() => {

                        setFormData2({
                            ...formData2,
                            // Shareholder(s)
                            ShareholderName: textData[
                                [textData.indexOf("Address Changed") + 1]
                            ],
                            shareholderId: textData[
                                [textData.indexOf("Address Changed") + 3]
                            ],
                            shareholderNationality: textData[
                                [textData.indexOf("Address Changed") + 4]
                            ],
                            shareholderSourceOfAddress: textData[
                                [textData.indexOf("Address Changed") + 5]
                            ],
                            shareholderAddressChanged: textData[
                                [textData.indexOf("Address Changed") + 6]
                            ],
                            shareholderAddress: textData[22],
                            shareholderOrdinaryNumber: textData[
                                [textData.indexOf("Currency") + 1]
                            ],
                            shareholderCurrency: textData[
                                [textData.indexOf("Currency") + 2]
                            ],
                            ShareholderName1: textData[
                                [textData.indexOf("Address Changed") + 9]
                            ],
                            shareholderId1: textData[
                                [textData.indexOf("Address Changed") + 10]
                            ],
                            shareholderNationality1: textData[
                                [textData.indexOf("Address Changed") + 11]
                            ],
                            shareholderSourceOfAddress1: textData[
                                [textData.indexOf("Address Changed") + 12]
                            ],
                            shareholderAddressChanged1: textData[
                                [textData.indexOf("Address Changed") + 13]
                            ],
                            shareholderAddress1: textData[15],
                            shareholderOrdinaryNumber1: textData[
                                [textData.indexOf("Currency") + 21]
                            ],
                            shareholderCurrency1: textData[
                                [textData.indexOf("Currency") + 22]
                            ],
                            ShareholderName2: textData[
                                [textData.indexOf("Address Changed")]
                            ],
                            shareholderId2: textData[
                                [textData.indexOf("Address Changed")]
                            ],
                            shareholderNationality2: textData[
                                [textData.indexOf("Address Changed")]
                            ],
                            shareholderSourceOfAddress2: textData[
                                [textData.indexOf("Address Changed")]
                            ],
                            shareholderAddressChanged2: textData[
                                [textData.indexOf("Address Changed")]
                            ],
                            shareholderAddress2: textData[15],
                            shareholderOrdinaryNumber2: textData[
                                [textData.indexOf("Currency")]
                            ],
                            shareholderCurrency2: textData[
                                [textData.indexOf("Currency")]
                            ],

                        })
                    }, 5000)

                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (formData && formData1 && formData2) {
            setMainForm({ ...formData, ...formData1, ...formData2 })
        }

    }, [formData, formData1, formData2])


    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = { mainForm, newDataArray }
        postFile(
            payload
        ).then((res) => {
            console.log(res)
            toast.success("File Added Successfully", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"

            })
        }).catch((error) => {
            console.log(error)
            toast.error("Error Occured", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            })
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            ...formData1,
            ...formData2,
            [e.target.name]: e.target.value

        })
    }
    useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; });
    return (

        <div>
            <span className="heading"><h4> ADD  A SINGAPORE BIZEFILE</h4></span>
            <input className="hid" id="file_data" type="file" onChange={fileUpload} />
            <div className="icone" ><label className="for" htmlFor="file_data"><GrAddCircle /></label>
                {
                    files ? <h6>File Added Successfully</h6> : null
                }
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div>
                        <Document file={files}
                            onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    onRenderSuccess={handleRenderSuccess}
                                />
                            ),
                            )

                            }
                        </Document>
                    </div>
                </div>
                {
                    files ? (
                        <div className="col-md-5">
                            {
                                step === 1 && (
                                    <div className="row g-3 mt-5" id="add__form">
                                        {Object.keys(formData).map((item) => (
                                            <div className="col-md-6" key={item.id}>
                                                <label htmlFor="inputZip" className="form-label">{item}</label>
                                                <input type="text" className="form-control" id="inputZip"
                                                    name={item} value={formData[item]} onChange={handleChange}
                                                />


                                            </div>
                                        ))}
                                        <button
                                            className="btn__next"
                                            onClick={() => setStep(2)}
                                        >Next</button>
                                    </div>

                                )
                            }
                            {
                                step === 2 && (
                                    <div className="row g-3 mt-5" id="add__form">
                                        {Object.keys(formData1).map((item) => (
                                            <div className="col-md-6" key={item.id}>
                                                <label htmlFor="inputZip" className="form-label">{item}</label>
                                                <input type="text" className="form-control" id="inputZip"
                                                    name={item} value={formData1[item]} onChange={handleChange}
                                                />


                                            </div>
                                        ))}
                                        <div className="d-flex">

                                            <button
                                                className="btn btn-primary"
                                                onClick={() => setStep(1)}
                                            >Back</button>
                                            <button
                                                className="btn__next"
                                                onClick={() => setStep(3)}
                                            >Next</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step === 3 && (
                                    <div className="row g-3 mt-5" id="add__form">
                                        {Object.keys(formData2).map((item) => (
                                            <div className="col-md-6" key={item.id}>
                                                <label htmlFor="inputZip" className="form-label">{item}</label>
                                                <input type="text" className="form-control" id="inputZip"
                                                    name={item} value={formData2[item]} onChange={handleChange}
                                                />
                                            </div>
                                        ))}
                                        <div className="d-flex">

                                            <button
                                                className="btn btn-primary"
                                                onClick={() => setStep(2)}
                                            >Back</button>&nbsp;
                                            <button
                                                className="btn__next"
                                                onClick={handleSubmit}
                                            >Submit</button>
                                        </div>
                                    </div>
                                )

                            }

                            {/* {
                        files ? (<div className="row g-3 mt-5" id="add__form">
                            {Object.keys(mainForm).map((item) => (
                                <div className="col-md-6" key={item.id}>
                                    <label htmlFor="inputZip" className="form-label">{item}</label>
                                    <input type="text" className="form-control" id="inputZip"
                                        name={item} value={mainForm[item]} onChange={handleChange}
                                    />
                                </div>
                            ))}
                            {Array.from(Array(counter)).map((c, index) => {
                                return (
                                    <>
                                        <p style={{
                                            fontWeight: "bold"
                                        }}>Shareholder(s)</p>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="Name"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        name: e.target.value
                                                    })

                                                }}
                                                value={newDataArray.name2}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">Id</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="Id"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        id: e.target.value
                                                    })
                                                }}
                                                value={newDataArray.id2}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">NationalityCitizenship</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="NationalityCitizenshipPlaceOfIncorporationOriginRegistration"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        nationality: e.target.value
                                                    })

                                                }}
                                                value={newDataArray.nationality1}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">SourceOfAddress</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="SourceOfAddress"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        sourceOfAddress: e.target.value
                                                    })
                                                }}
                                                value={newDataArray.sourceOfAddress2}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">AddressChanged</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="AddressChanged"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        addressChanged: e.target.value
                                                    })
                                                }}
                                                value={newDataArray.addressChanged2}

                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="Address"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        address: e.target.value
                                                    })

                                                }}
                                                value={newDataArray.address2}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">Ordinary Number</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="OrdinaryNumber"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        ordinaryNumber: e.target.value
                                                    })
                                                }}
                                                value={
                                                    newDataArray.ordinaryNumber1
                                                }
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputZip" className="form-label">Currency</label>
                                            <input type="text" className="form-control" id="inputZip"
                                                name="Currency"
                                                onChange={(e) => {
                                                    setNewDataArray({
                                                        ...newDataArray,
                                                        currency: e.target.value
                                                    })
                                                }}
                                                value={newDataArray.currency1}
                                            />
                                        </div>

                                    </>)
                            })}
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            </div>

                            <div className="col-6">
                                <button type="submit" className="btn btn-primary" onClick={handleAddInput}>Add ShareHolder's</button>
                            </div>
                        </div>) : null
                    } */}

                        </div>
                    ) : (
                        null
                    )
                }

                <div className="col-md-1"></div>
            </div>
            <ToastContainer />

        </div>
    )
}