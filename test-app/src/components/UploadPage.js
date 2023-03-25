import React from "react";
import { ChangeEvent, useState,useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import XLSX from 'xlsx';

const UploadPage = () => {

const [filename, setFileName] = useState([])

const [filearray, setFileArray] = useState([])




// async function readFiles(files) {
//   const workbooks = [];

//   for (const file of files) {
//     const workbook = await readFile(file);

//     workbooks.push(workbook);
//   }

//   return workbooks;
// }

// async function readSheets(workbooks) {
//   const sheets = [];

//   for (const workbook of workbooks) {
//     for (const sheetName of workbook.SheetNames) {
//       const sheet = workbook.Sheets[sheetName];

//       sheets.push(sheet);
//     }
//   }

//   return sheets;
// }

// function App() {
//   const [files, setFiles] = useState([]);

//   async function handleFiles(files) {
//     const workbooks = await readFiles(files);
//     const sheets = await readSheets(workbooks);

//     console.log(sheets);
//   }

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFiles(e.target.files)} multiple />
//       <button onClick={() => handleFiles(files)}>Read Files</button>
//     </div>
//   );
// }



function fileUpload(x) {

  const mappedValues = Object.keys(x).map((key) => {
    const value = x[key];
    return value
  });

  const names = mappedValues.map(({ name }) => name);


  setFileName(names)

}
// console.log("names",filename)
function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      resolve(workbook);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsBinaryString(file);
  });
}

function createFileUrl() {
  let path_l = "C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles" ;
  let path_array = [] 
  for (let i = 0; i < filename.length; i++) {
      let path = ""
      path = path_l + "/" + filename[i];
      path_array.push(path)
}
  // const path = filename.map(item => "C:\Users\pandeyv1581\OneDrive - ARCADIS\Desktop"`/${item}`);
  console.log("path",path_array)
  Promise.all(path_array).then((result) => {
    // console.log("result",result);
    fetch("http://127.0.0.1:5000/upload",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(result),
      crossorigin: true,    
      mode: 'no-cors',   
    })
  })
//  console.log(filename)
}

const inputFileOnChange = (e) => {

  fileUpload(e.target.files)
  readFile(e.target.files)

}

return (
  <div style={{"backgroundColor":"white"}}> 
    <h1 className="ui header" style={{ "text-align":"center", "backgroundColor": "white"}}>UPLOAD FILES HERE
    <div id="inputFile">
         <input  type="file" onChange={inputFileOnChange}  multiple/>
     </div>
     <div id="sheet_name" style={{ "text-align":"center"}}>
       <input type = "text" placeholder="Sheet Name"></input>
     </div>
     <div id="submitFile"> <button onClick={() => createFileUrl()}>Upload</button> </div>
     </h1>
    </div> 
   );
}
export default UploadPage;