import React, { useState } from 'react';
import '../style.css'; 

function CheckboxContainer(props) {

  const[set, setSet] = useState([])  
  const { filesheet, onCheckboxChange } = props;

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
  
    onCheckboxChange((prevValues) => {
      const newValues = { ...prevValues };
  
      if (checked) {
        if (!newValues[name]) {
          newValues[name] = { sheetNames: [] };
        }
        newValues[name].sheetNames.push(value);
      } else {
        const sheetIndex = newValues[name].sheetNames.indexOf(value);
        if (sheetIndex !== -1) {
          newValues[name].sheetNames.splice(sheetIndex, 1);
        }
        if (newValues[name].sheetNames.length === 0) {
          delete newValues[name];
        }
      }
      setSet(newValues)
      return newValues;
    });
  };

// console.log("new",set)


  

  // Render the checkboxes as before




  return (
    <div className="checkbox-container">
      {Object.keys(filesheet).map((key) => {
        const { fileName, sheetNames } = filesheet[key];

        return (
          <div className="file-checkbox" key={key}>
            <label>{fileName}</label>
            {sheetNames.map((sheet) => {
              return (
                <div className="sheet-checkbox" key={`${key}-${sheet}`}>
                  <input
                    type="checkbox"
                    name={fileName}
                    value={sheet}
                    onChange={handleCheckboxChange}
                  />
                  <label>{sheet}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CheckboxContainer;
