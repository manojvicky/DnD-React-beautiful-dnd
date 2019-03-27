import React from "react";
import Title from "./Title";
import TaskList from "./TaskList";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import "../style/style.css";
export default class Columns extends React.Component {
  render() {
    console.log("colunmns props", this.props);
    const {
      column: { title, id },
      tasks
    } = this.props;
    return (
      <div>
        <Title title={title} />
        <Droppable droppableId={id}>
          {provided => (
            <div {...provided.droppableProps} innerRef={provided.innerRef}>
              {tasks.map(task => (
                <div key={task.id} className="task">
                  {task.task}
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
