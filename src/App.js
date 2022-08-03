import * as React from "react";
import { Previewer } from "./Previewer";
import { Editor } from "./Editor";

function App() {
  return (
    <div className="app">
      <Previewer />
      <Editor />
    </div>
  );
}

export default App;
