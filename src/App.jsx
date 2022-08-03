import * as React from "react";
import { Previewer } from "./Previewer";
import { Editor } from "./Editor";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { INITIAL_TEXT } from "./data";

function App() {
  const [input, setInput] = React.useState(INITIAL_TEXT);
  const [html, setHtml] = React.useState();

  React.useEffect(() => {
    setHtml(textToHtml(input));
  }, [input]);

  const handleInputChange = (textInput = "") => {
    setInput(textInput);
    setHtml(textToHtml(textInput));
  };

  const textToHtml = (text) => {
    return DOMPurify.sanitize(marked.parse(text, { breaks: true }));
  };

  return (
    <div className="app">
      <Previewer html={html} />
      <Editor input={input} handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;
