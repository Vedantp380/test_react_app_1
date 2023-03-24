import React from "react";
import { useState } from "react";
// import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form, Container} from "semantic-ui-react";


function AddContact(props) {


   
  
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [mail, setMail] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const name_dict = {
        "First Name": fname,
        "Last Name": lname,
        "E-mail":mail
      }

      props.sendData(name_dict)
      // console.log(name_dict)
    }
  
  

    return (
        <Container  style={{ margin: 20 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>First Name :  </label>
          <input 
            type="text" 
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            // style={myStyle}
          />
        {/* </label> */}
        </Form.Field>
        <Form.Field>
        <label>Last Name :  </label>
          <input 
            type="text" 
            value={lname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            // style={myStyle}
          />
        {/* </label> */}
        </Form.Field>

        <Form.Field>
        <label>Email : </label>
          <input 
            type="text" 
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder='E-mail'
          />
    
        </Form.Field>

        <Checkbox label='I agree to the Terms and Conditions' />

            
        <Form.Field>
        <Button type="submit" >Add </Button>
        </Form.Field>
      </Form>

      </Container>
    )
  }

export default AddContact;
// import { useRef } from "react"

// export const AddContact = () => {
//     const inputFirstName = useRef<HTMLInputElement>(null)
//     const inputLastName = useRef<HTMLInputElement>(null)
//     const inputAge = useRef<HTMLInputElement>(null)

//     // interface FormDataType {firstName:string, lastName: string, age: string}
//     // const formData =  {firstName: String, lastName: String, mail: String}
//     const formData =  {firstName: "", lastName: "", mail: ""}

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//         formData.firstName = inputFirstName?.current?.value||""
//         formData.lastName = inputLastName?.current?.value||""
//         formData.age = inputAge?.current?.value||""
//         console.log(formData)
// 	//Form submission happens here
//     }

//     return(
//         <form onSubmit={onSubmitHandler}>
//             <div><label htmlFor="first_name">First Name</label></div>
//             <div><input id="first_name" ref={inputFirstName} type="text"/></div>
//             <div><label htmlFor="last_name">Last Name</label></div>
//             <div><input id="last_name" ref={inputLastName} type="text"/></div>
//             <div><label htmlFor="age">Age</label></div>
//             <div><input id="age" ref={inputAge} type="number"/></div>
//             <input type="submit"/>
//         </form>
//     )
// }