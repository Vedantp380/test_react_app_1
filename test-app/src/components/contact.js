import React from "react";
// import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form} from "semantic-ui-react";


class AddContact extends React.Component{
    render() {
        return (
            <div className="ui-main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <lable>Name</lable>
                        <input type="text" name = "name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <lable>Name</lable>
                        <input type="text" name = "name" placeholder="Name"/>
                    </div>
                    <button type='submit' className="ui button">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;
