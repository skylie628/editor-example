import { useState } from "react";
import EditorPanel from "./component/Specific/EditorPanel";
import MyOptimizeEditorPanel from "./component/Specific/MyOptimizeEditorPanel";
import "./App.css";

function App() {
  return (
    <>
      <EditorPanel />
      <MyOptimizeEditorPanel />
    </>
  );
}

export default App;
