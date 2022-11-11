import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
       apiKey='v2sbsywfnsa6j93lh90oarfjzpmzretr6cfi3cu18fccizkw'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"

        tagName='section'
        init={{
          height: 200,
          menubar: false,
          content_style: `
          body {
              background: #000000;
          }

          @media (min-width: 840px) {
              html {
                  background: #eceef4;
                  min-height: 100%;
                  padding: 0 .5rem
               }
              body {
                  background-color: #000000;
                  box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                  box-sizing: border-box;
                  margin: 1rem auto 0;
                  max-width: 820px;
                  min-height: calc(100vh - 1rem);
                  padding:4rem 6rem 6rem 6rem
               }
           }
         `, 
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
