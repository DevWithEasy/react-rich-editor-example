import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQuillComponent = () => {
    const [value,setValue] = useState()
  const modules ={
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
}
  console.log(value)
    return (
        <div>
            <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." style={{height:"120px"}}/>
        </div>
    );
};

export default ReactQuillComponent;