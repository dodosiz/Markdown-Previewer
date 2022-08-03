import * as React from "react";
import { Previewer } from "./Previewer";
import { Editor } from "./Editor";
import { marked } from "marked";
import DOMPurify from "dompurify";

function App() {
  const handleInputChange = (textInput = "") => {
    document.getElementById("preview").innerHTML = DOMPurify.sanitize(
      marked.parse(textInput)
    );
  };
  return (
    <div className="app">
      <Previewer />
      <Editor handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;
