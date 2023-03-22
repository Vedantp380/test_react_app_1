import React from "react";
import { useState } from "react";
// import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form, Container} from "semantic-ui-react";


function AddContact() {

    // const myStyle = {
    //     color: "white",
    //     backgroundColor: "White",
    //     padding: "5px",
    //     fontFamily: "Sans-Serif",
    //     box-sizing:"border-box";
    //   };

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
        <Button type="submit">Add </Button>
        </Form.Field>
      </Form>

      </Container>
    )
  }

export default AddContact;
