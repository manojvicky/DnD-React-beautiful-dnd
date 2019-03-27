import React from "react";
import initalData from "../data/initalData";
import Columns from "../components/Columns";
export default class DragNdrop extends React.Component {
  constructor(props) {
    super(props);
    this.initalData = initalData;
  }
  render() {
    console.log("this.state", this.initalData);
    return this.initalData.columnsOrder.map(columnId => {
      const column = this.initalData.columns[columnId];
      const tasks = column.tasks.map(task => {
        return this.initalData.tasks[task];
      });
      console.log("columnId", columnId, column, tasks);
      return <Columns key={columnId} column={column} tasks={tasks} />;
    });
  }
}
