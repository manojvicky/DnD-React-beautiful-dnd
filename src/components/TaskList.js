import React from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks }) => {
  return tasks.map(({ id, task }, index) => {
    console.log("index", index);
    return (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <div
            className="task"
            key={id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task}
          </div>
        )}
      </Draggable>
    );
  });
};

export default TaskList;
