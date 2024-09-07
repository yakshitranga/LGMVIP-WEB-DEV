function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const newTask = document.createElement("li");
      newTask.classList.add("list-item");
      newTask.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <span class="close" onclick="removeTask(this)">X</span>
      `;
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  
  function removeTask(element) {
    element.parentElement.remove();
  }