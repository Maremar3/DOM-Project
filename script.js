const todoForm = document.getElementById('todo-form');
//console.log(todoForm )

/////const cBtn = document.getElementById("addCommentBtn");

/////const todoInput = document.getElementById('todo-input');

/////const todoList = document.getElementById('todo-list');



//const cList = document.getElementById("commentList");
const cInput = document.getElementById("todo-input");
const cBtn = document.getElementById("addCommentBtn");

// The function to handle adding new comments.
function addComment() {
  const newComment = cInput.value;

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  /////cList.appendChild(document.createElement("li")).textContent = newComment;
  ////cInput.value = "";
  ///cInput.focus();
}

// Register the event listener.
////cBtn.addEventListener("click", addComment);
todoForm.addEventListener('submit', addComment) 

//We need to handle the event when a user adds a new task. 
//todoForm.addEventListener('click', function(event) {
   ///// function addComment() {
       ///// const newComment = todoInput.value;
      /////console.log(newComment);
        // This wasn't in the instructions, but
        // we added a guard against empty comments:
       // const newTask = todoInput.value;


        // if (newComment === ""){
        //      return;
        //      window.alert('Please,you have to enter your task!');
        // }
      


       // cList.appendChild(document.createElement("li")).textContent = newComment;
       //// todoInput.value = "";
      //  cInput.focus();
     ///// }
    
     ///// cBtn.addEventListener("click", addComment);
      //{

    //event.preventDefault();
  
    //const newTask = todoInput.value;
  
    // if (newTask === "") {
    //    window.alert('Please,you have to enter your task!');
    //     return;
    // }
  
    // Additional code to add the task will go here
  
    //todoInput.value = ''; // Clear the input field after adding a task
 // });
  function addTask(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
  
    // Additional functionality to be added here
  
    todoList.appendChild(listItem);
  }

//integrate our addTask function into the form submission event:
  todoForm.addEventListener('submit', function(event) {
    // Existing code
  
    addTask(newTask); // Add the new task
  });
