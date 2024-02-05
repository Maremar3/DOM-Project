const todoForm = document.getElementById('todo-form');
//const todoInput = document.getElementById('todo-input');
const todoInput = document.getElementById('todo-input');
//const todoList = document.getElementById('todo-list');
const todoList = document.querySelector('#todo-list');




todoForm.addEventListener('submit', function(event) {
  // Existing code

newTask=todoInput.value;
 ;
  addTask(newTask); // Add the new task
});



// function addTask(task) {
//   const listItem = document.createElement('li');
//   listItem.textContent = task;
//   alert('YOur TASK IS!'+task);
//   // Additional functionality to be added here

//   todoList.appendChild(listItem);
// }



// addTask has additional features like checkboxes and delete buttons for each task. 
 //Here’s an updated version of the function:
function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

//we will add edit button for each task.
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);


//dd the functionality to edit tasks. This involves toggling between viewing and editing states
editButton.addEventListener('click', function() {
  const isEditing = listItem.classList.contains('editing');

  if (isEditing) {
      // Switch back to view mode
      taskText.textContent = this.previousSibling.value; // Assuming the input field is right before the edit button
      listItem.classList.remove('editing');
      editButton.textContent = 'Edit';
  } else {
      // Switch to edit mode
      const input = document.createElement('input');
      input.type = 'text';
      input.value = taskText.textContent;
      listItem.insertBefore(input, taskText);
      listItem.removeChild(taskText);
      listItem.classList.add('editing');
      editButton.textContent = 'Save';
  }
});





 // Event listeners for the checkbox task
  checkBox.addEventListener('change', function() {
    if (this.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }

     });

// Event listeners for the delete
deleteButton.addEventListener('click', function() {
  todoList.removeChild(listItem);
});
}




todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
   const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }

  // Additional code to add the task will go here

  todoInput.value = ''; // Clear the input field after adding a task
});


//save tasks to the browser’s local storage so they persist even after the browser is closed.
function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll('#todo-list li').forEach(task => {
      const taskText = task.querySelector('span').textContent;
      const isCompleted = task.classList.contains('completed');
      tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//When the page loads, we should retrieve and display the tasks from local storage:
document.addEventListener('DOMContentLoaded', function() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
      addTask(task.text);
  });
});