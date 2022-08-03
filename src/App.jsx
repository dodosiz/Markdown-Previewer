import * as React from "react";
import { Previewer } from "./Previewer";
import { Editor } from "./Editor";

function App() {
  const [input, setInput] = React.useState("");
  return (
    <div className="app">
      <Previewer input={input} />
      <Editor handleInputChange={(i) => setInput(i)} />
    </div>
  );
}

export default App;
