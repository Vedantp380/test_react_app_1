import React from "react";
import { ChangeEvent, useState,useEffect } from 'react';
import { Header } from 'semantic-ui-react';

const UploadPage = () => {

const [filename, setFileName] = useState([])

function fileUpload(x) {

  const mappedValues = Object.keys(x).map((key) => {
    const value = x[key];
    return value
  });

  const names = mappedValues.map(({ name }) => name);


  setFileName(names)
  
  
  // Promise.all(arr).then((result) => {
  //   console.log("result",result);
  //   fetch("http://127.0.0.1:5000/upload",{
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(result),
  //     crossorigin: true,    
  //     mode: 'no-cors',   
  //   })
  // })
}
function createFileUrl() {
  let path_l = "C:/Users/pandeyv1581/OneDrive - ARCADIS/Desktop/uploadfiles" ;
  let path_array = [] 
  for (let i = 0; i < filename.length; i++) {
      let path = ""
      path = path_l + "/" + filename[i];
      // console.log("path",path)
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

function clearInput() {
  document.getElementById("submitFile").value = "";
}

// function onClickHandler() {
//   // Call both functions here
//   createFileUrl(),
//   clearInput()
// }
return (
  <div style={{"backgroundColor":"white"}}> 
    <h1 className="ui header" style={{ "text-align":"center", "backgroundColor": "white"}}>UPLOAD FILES HERE
    <div id="inputFile">
         <input  type="file" onChange={(e) => {
           fileUpload(e.target.files)}}  multiple/>
     </div>
     <div id="sheet_name" style={{ "text-align":"center"}}>
       <input type = "text" placeholder="Sheet Name"></input>
     </div>
     <div id="submitFile"> <button onClick="onClickHandler()">Upload</button> </div>
     </h1>
    </div> 
   );
}
export default UploadPage;