
import React from "react";
import Header from "./header";
import AddContact from "./contact";
import ContactList from "./contactlist";



function App() {

  const contacts = [ {
    id:"1",
    "name": "Dipesh",
    "email":"pandeyvedant0@gmail.com"
  },
  {
    id:"2",
    "name": "Romit",
    "email":"romitt0@gmail.com"
  }]
  return (
   <div className="ui container">
    <Header/>
    <AddContact />
    <ContactList  contacts = {contacts}/>
   </div>
  );
}



export default App;
