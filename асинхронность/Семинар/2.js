const allTast = (taskList, interval) => {
    let delay=0;
  taskList.forEach((task) => {
    setTimeout(() => {
      console.log(task.name);
    }, delay);
    delay+=interval;
  });
};

const tasks = [
  { name: "task 1", time: 1000 },
  { name: "task 2", time: 2000 },
  { name: "task 3", time: 3000 },
  { name: "task 4", time: 4000 },
  { name: "task 5", time: 5000 },
];

allTast(tasks,1000);
