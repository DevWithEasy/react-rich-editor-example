import Editor from 'ckeditor5-custom-build/build/ckeditor';
import React from 'react';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';


const MyCkeditor = () => {
    const [data,setData] = useState("")
    const handleData = (e,editor)=>{
        setData(editor.getData())
    }
    console.log(data)   
    return (
        <div>
            <div className="App">
                <h2>Using CKEditor 5 from online builder in React</h2>
                <CKEditor
                    editor={Editor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onChange={(e, editor) => handleData(e, editor)}
                />
            </div>
        </div>
    )
}

export default MyCkeditor;