const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const completedTasks = document.getElementById('completed-tasks');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', toggleTaskCompletion);
    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', deleteTask);
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function toggleTaskCompletion() {
  const taskItem = this.parentNode;
  taskItem.classList.toggle('completed');
  if (taskItem.classList.contains('completed')) {
    completedTasks.value += `- ${taskItem.querySelector('label').textContent}\n`;
  } else {
    const completedTaskText = `- ${taskItem.querySelector('label').textContent}\n`;
    completedTasks.value = completedTasks.value.replace(completedTaskText, '');
  }
}

function deleteTask() {
  const taskItem = this.parentNode;
  const completedTaskText = `- ${taskItem.querySelector('label').textContent}\n`;
  completedTasks.value = completedTasks.value.replace(completedTaskText, '');
  taskItem.remove();
}