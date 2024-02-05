const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');



todoForm.addEventListener('submit', function(event) {
  // Existing code

newTask=todoInput.value;
 // alert('YOur TASK IS  !    '+todoInput.value);
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
let file = "info.txt"

fetch (file)
.then(x => x.text())
//.then(y => document.getElementById("demo").innerHTML = y);
.then(y=todoForm.innerHTML=y)