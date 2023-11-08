function addTask() {
  var taskInput = document.getElementById("task");
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");
    li.innerHTML = taskText + '<button onclick="removeTask(this)">Delete</button>';
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function removeTask(button) {
  button.parentElement.remove();
}