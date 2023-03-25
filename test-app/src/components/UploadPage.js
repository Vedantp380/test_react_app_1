import React from "react";
import { ChangeEvent, useState,useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import XLSX from 'xlsx';

const UploadPage = () => {

const [filename, setFileName] = useState([])
const [filesheet, setFileSheet] = useState({})
const [checkedItems, setCheckedItems] = useState([]);



async function readFiles(files) {
  
  const workbooks = {
    wb:[]
  };
  const sheets = {
    file:{ },
    sheet:[],
  };
  for (const ff of files){
    // console.log(ff)
      for (const file of ff) {
        // console.log("oo", file)
        const value = file.name
        const workbook = await readFile(file);
        workbooks.wb.push(workbook);
        // console.log("workbooks", workbooks)
          for (const workbook of workbooks.wb ) {
            // console.log("wb", workbook)
            for (const sheetName of workbook.SheetNames) {
                sheets.file.push(value)
                sheets.sheet.push(sheetName)
                // console.log("dict", sheets)
          }
        }
        
      }


      return sheets;
}
}



  async function handleFiles(files) {
    let arr = []
    arr.push(files)
    const workbooks = await readFiles(arr);
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


function createFileUrl() {
  let path_l = "C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles" ;
  let path_array = [] 
  for (let i = 0; i < filename.length; i++) {
      let path = ""
      path = path_l + "/" + filename[i];
      path_array.push(path)
}
  // const path = filename.map(item => "C:\Users\pandeyv1581\OneDrive - ARCADIS\Desktop"`/${item}`);
  // console.log("path",path_array)
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
  checkedSheetsandFilename()
  handleFiles(e.target.files)

  

}


function checkedSheetsandFilename (){

    console.log("filesheet",filesheet)
    console.log("checkedItems",checkedItems)

}
function handleCheckboxChange(event) {
  checkedSheetsandFilename()
  const { value } = event.target;
  
  setCheckedItems(prevState => {  if (prevState.includes(value)) {
    return prevState.filter(item => item !== value);
  } else {
    return [...prevState, value];
  }
});
}
// console.log("checkedItems",checkedItems)


return (
  <>
    <h1 className="ui header" style={{ "text-align":"center", "backgroundColor": "white"}}>UPLOAD FILES HERE
    <div id="inputFile">
         <input  type="file" onChange={inputFileOnChange}  multiple/>
     </div>
     <div id="sheet_name" style={{ textAlign:"center"}}>
       <input type = "text" placeholder="Sheet Name"></input>
     </div>
     <div id="submitFile"> <button onClick={() => createFileUrl()}>Upload</button> </div>
     </h1>

     {
      filesheet.sheet!=undefined && filesheet.sheet.map(item => (

        <div key={item}>
          {item}
          <input
            type="checkbox"
            value={item}
            checked={checkedItems.includes(item)}
            onChange={handleCheckboxChange}
            style={{"align":"center"}}
          />
          <label>{item}</label>
        </div>
      ))}
  </>
   );
  
}
export default UploadPage;

