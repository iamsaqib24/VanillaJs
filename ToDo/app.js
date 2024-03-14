document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const tasksList = document.getElementById("tasksList");

  // Load tasks from local storage
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteTask(index);
      li.appendChild(deleteBtn);
      tasksList.appendChild(li);
    });
  };

  // Add a new task
  const addTask = () => {
    const task = taskInput.value;
    if (task) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = ""; // Clear input field
      loadTasks();
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  };

  addTaskBtn.addEventListener("click", addTask);
  loadTasks();
});
