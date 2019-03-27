import React from "react";
import ReactDOM from "react-dom";
import DragNdrop from "./dragndrop/DragNdrop";
import { DragDropContext } from "react-beautiful-dnd";

import "./styles.css";
function handleOnDrag(values) {
  console.log("Values", values);
}
function App() {
  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      <DragDropContext onDragEnd={handleOnDrag}>
        <DragNdrop />
      </DragDropContext>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
