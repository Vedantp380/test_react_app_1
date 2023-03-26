
import React from "react";
import Fileuplaod from "./UploadPage";
import Parameterpage from "./Parameter"
import AddContact from "./contact";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  //  <div className="ui container">
  //   <Fileuplaod/>
  //   <Parameterpage/>
  //   <AddContact  sendData={sendData} />
  //   {/* <ContactList/> */}
  //  </div>
<Router>
    <Switch>
      <Route exact path="/" component={Fileuplaod} />
      <Route path="/parameter" component={Parameterpage} />
    </Switch>
</Router>
  );
}



export default App;


