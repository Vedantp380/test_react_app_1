// import React from "react";
// import { ChangeEvent, useState } from 'react';
// // Integrate post api
// function FileUploadSingle ()  {

//     const [file, setFile] = useState();

//     function handleChange(event) {
//         setFile(event.target.files[0])
//       }
    

//     //   const handleUploadClick = () => {
//     //     if (!file) {
//     //       return;
//     //     }
//     return (

//         <div>
//             <input type="file" onChange={handleChange} />
//             <button type="submit">Upload</button>

//         </div>
//     )
// }

// export default FileUploadSingle;

// import React from 'react';

// class FileUploadSingle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       imageURL: '',
//     };

//     this.handleUploadImage = this.handleUploadImage.bind(this);
//   }

//   handleUploadImage(ev) {
//     ev.preventDefault();

//     const data = new FormData();
//     data.append('file', this.uploadInput.files[0]);
//     data.append('filename', this.fileName.value);

//     fetch('http://localhost:3000//upload', {
//       method: 'POST',
//       body: data,
//     }).then((response) => {
//       response.json().then((body) => {
//         this.setState({ imageURL: `http://localhost:3000/${body.file}` });
//       });
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleUploadImage}>
//         <div>
//           <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
//         </div>
//         {/* <div>
//           <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
//         </div> */}
//         <br />
//         <div>
//           <button>Upload</button>
//         </div>
//         <img src={this.state.imageURL} alt="img" />
//       </form>
//     );
//   }
// }

// export default FileUploadSingle;



import React from "react";
import { ChangeEvent, useState,useEffect } from 'react';


// async function readFileAsync(file) {
//     return new Promise((resolve, reject) => {
//       let reader = new FileReader();
//       reader.onload = () => {
//         resolve(reader.result);
//       };
//       reader.onerror = () => {
//         reject(null);
//       };
//       reader.readAsDataURL(file);
//     });
//   }

// const [imageList, setImageList] = useState([]);
// const [selectedImage, setSelectedImage] = useState();
// const fileUpload = ({
//     props
// }) => {

 
// export default fileUpload;

const UploadPage = () => {


function fileUpload(x) {
  var arr = [];
  arr.push(x)
  // const element = document.getElementById("inputFile")
  console.log(arr)   
  Promise.all(arr).then((result) => {
    console.log("result",result);
    fetch("http://127.0.0.1:5000/upload",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(result),
      crossorigin: true,    
      mode: 'no-cors',   
    })
  })
}



return (

    <div id="inputFile">
         <input  type="file" onChange={(e) => {
           fileUpload(e.target.files[0])}}  multiple/>
     </div>
   );
}
export default UploadPage;