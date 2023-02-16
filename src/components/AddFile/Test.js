import { GrAddCircle } from 'react-icons/gr';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

function Test() {
  const [files, setFiles] = useState(null)
  const [pdfData, setPdfData] = useState([]);

  const fileUpload = (e) => {
    let file = e.target.files[0]
    console.log('data', file)
    setFiles(file)
  }
  useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; });
  console.log('pdfData', pdfData)

  return (
    <>
      <span className="heading"><h4> ADD  A SINGAPORE BIZEFILE</h4></span>
      <input className="hid" id="file_data" type="file" onChange={fileUpload} />
      <div className="icone" ><label className="for" htmlFor="file_data"><GrAddCircle /></label>
      </div>
      <Document
        file={files}
        onRenderSuccess={(pdf) => {
          const data = [];
          for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then((page) => {
              page.getTextContent().then((textContent) => {
                let pdfText = [];
                textContent.items.forEach((item) => {
                  pdfText += item.str;
                });
                data.push(pdfText);
                setPdfData(data);
              });
            });
          }
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </>
  )
}

export default Test