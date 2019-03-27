import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function handleOnDrag(values, that) {
  console.log("Values", values, that);
  const { destination, draggableId, source } = values;
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  // const val = {
  //   "draggableId": "step4",
  //   "type": "DEFAULT",
  //   "source": {
  //     "index": 3,
  //     "droppableId": "column1"
  //   },
  //   "reason": "DROP",
  //   "mode": "FLUID",
  //   "destination": {
  //     "droppableId": "column1",
  //     "index": 0
  //   },
  //   "combine": null
  // }
  let { arr } = that.state;

  arr = arr.filter((item, index) => index !== values.source.index);

  arr.splice(values.destination.index, 0, that.state.arr[values.source.index]);

  that.setState({ arr: arr });
  console.log("neww arr", arr);
}
const style = {
  border: "1px solid lightgray",
  width: "90%",
  margin: "auto",
  padding: "5px 10px",
  marginBottom: "10px",
  borderRadius: "2px",
  cursor: "pointer",
  textAlign: "left"
};
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: ["step1", "step2", "step3", "step4", "step5"]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Drag and Drop</h1>
        <DragDropContext onDragEnd={values => handleOnDrag(values, this)}>
          <Droppable droppableId="column1">
            {(provided, snapshotOld) => {
              console.log("==snapshot", provided, snapshotOld);
              const isDraggingOverProp = snapshotOld.isDraggingOver;
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    border: "1px solid lightgray",
                    textAlign: "center",
                    background: isDraggingOverProp ? "lightgrey" : "white"
                  }}
                >
                  <p>Steps as follows</p>
                  {this.state.arr.map((step, index) => {
                    return (
                      <Draggable
                        key={index}
                        draggableId={`${step}`}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          console.log("==snapshot", provided, snapshot);
                          const isDraggingProp = snapshot.isDragging;
                          return (
                            <div
                              key={`${step}`}
                              index={`${step}`}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              isDragging={snapshot.isDragging}
                            >
                              <span
                                style={{
                                  border: "1px solid lightgray",
                                  width: "90%",
                                  margin: "auto",
                                  padding: "5px 10px",
                                  marginBottom: "10px",
                                  borderRadius: "2px",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  display: "block",
                                  background: isDraggingProp
                                    ? "lightgreen"
                                    : "white"
                                }}
                              >
                                {step}
                              </span>
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
