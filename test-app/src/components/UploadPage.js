import React from "react";
import { ChangeEvent, useState,useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import XLSX from 'xlsx';
import Checkbx from "../components/checkbox";
import '../style.css'; 

const UploadPage = () => {

const [filename, setFileName] = useState([])
const [filesheet, setFileSheet] = useState({})
const [parameterswithfileurl, setParametersWithUrl] = useState([]);


const [selectedValues, setSelectedValues] = useState({});

 
async function readFiles(files) {
  
  const workbooks = [];

    for (const key of files) {
     
      const workbook = await readFile(key);
      const sheetNames = getSheetNames(workbook);
      workbooks.push({
        fileName: key.name,
        sheetNames: sheetNames
      });
      }
      console.log("All files read successfully!", workbooks);
      return workbooks;
    }

    function getSheetNames(workbook) {
      const sheetNames = [];
      const sheets = workbook.Sheets;
    
      for (const sheetName in sheets) {
        sheetNames.push(sheetName);
      }
    
      return sheetNames;
    }
    



  async function handleFiles(files) {
    let arr = []
    arr.push(files)
    // console.log("arr",arr[0])
    const workbooks = await readFiles(arr[0]);
    setFileSheet(workbooks)
  
  }
// console.log("ss",filesheet)


function fileUpload(x) {

  const mappedValues = Object.keys(x).map((key) => {
    const value = x[key];
    // console.log("value",value)
    return value
  });

  const names = mappedValues.map(({ name }) => name);
  // console.log("names",names)

  setFileName(names)

}
// console.log("names",filename)
function readFile(x) {

  
  // console.log(x)
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      // console.log("inner", data)
      resolve(workbook);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsBinaryString(x);
  });
  
}

function createFileUrl(datatobackend) {
  const baseUrl = "C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles/";
  const urls = {};

  for (const fileName in datatobackend) {
    const sheetNames = datatobackend[fileName];
    const url = `${baseUrl}${fileName}`;

    urls[url] = sheetNames;
  }
  setParametersWithUrl(urls)
  console.log("urlsssss",urls)
  Promise.all(urls).then((result) => {
    // console.log("result",result);
    fetch("http://127.0.0.1:5000/upload",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(result),
      crossorigin: true,    
      mode: 'no-cors',   
    })
  })
}



const inputFileOnChange = (e) => {
  fileUpload(e.target.files)
  handleFiles(e.target.files)

}


const handleCheckboxChange = (newValues) => {
  setSelectedValues(newValues);
};



console.log("urlspara",parameterswithfileurl)

return (
  <>
    <h1 className="ui header" style={{ "text-align":"center", "backgroundColor": "white"}}>UPLOAD FILES HERE
    <div id="inputFile">
         <input  type="file" onChange={inputFileOnChange}  multiple/>
     </div>
     </h1>
     <div className="ui container" style={{display: "flex", justifyContent: "center", textAlign:"center", height:"auto"}}>
     <div id="check-box-container" style={{  display: "grid",gridTemplateColumns: "auto",gridGap: "10px"}}>
      <Checkbx 
          filesheet={filesheet}
          onCheckboxChange={handleCheckboxChange}
          
          />
    {/* <container /> */}
    </div>
   </div>
    <div id="submitFile" style={{display: "flex", justifyContent:"center"}}>
       <button onClick={() => createFileUrl(selectedValues)}>Upload
       </button> 
    </div>
  </>
   );
  
}
export default UploadPage;

