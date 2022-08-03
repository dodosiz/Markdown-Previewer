import * as React from "react";
import { Previewer } from "./Previewer";
import { Editor } from "./Editor";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { INITIAL_HTML } from "./data";

function App() {
  const [html, setHtml] = React.useState(INITIAL_HTML);
  const handleInputChange = (textInput = "") => {
    setHtml(DOMPurify.sanitize(marked.parse(textInput)));
  };
  return (
    <div className="app">
      <Previewer html={html} />
      <Editor handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;
