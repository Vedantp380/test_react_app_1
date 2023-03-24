
import React from "react";
import Fileuplaod from "./UploadPage";
import AddContact from "./contact";
import { useState } from "react";
// import ContactList from "./contactlist";



function App() {
 
  const [data, setData] = useState({
    "First Name": "",
    "Last Name": "",
    "E-mail":""
  })
  console.log(data)
  const sendData = (data) => {
    setData(data)
  }

  return (
   <div className="ui container">
    <Fileuplaod/>
    <AddContact  sendData={sendData} />
    {/* <ContactList/> */}
   </div>
  );
}



export default App;


