const initalData = {
  tasks: {
    task1: { id: "task1", task: "Take TeaPot" },
    task2: { id: "task2", task: "Put water" },
    task3: { id: "task3", task: "Light gas" },
    task4: { id: "task4", task: "Boil water" },
    task5: { id: "task5", task: "Put tea powder and ginger" },
    task6: { id: "task6", task: "wait for 10 minutes and put sugar" },
    task7: { id: "task7", task: "Tea is ready. Filter it and serve it" }
  },
  columns: {
    column1: {
      id: "column1",
      title: "Steps to prepare tea",
      tasks: ["task1", "task2", "task3", "task4", "task5", "task6", "task7"]
    }
  },
  columnsOrder: ["column1"]
};

export default initalData;
