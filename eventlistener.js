const todoForm = document.getElementById('todo-form');
const cInput = document.getElementById("todo-input");

const cBtn = document.getElementById("addCommentBtn");
const todoList = document.getElementById('todo-list');
// The function to handle adding new comments.
//todoForm.addEventListener('submit', function(event) {







// todoForm.addEventListener('submit', function(event) {

//   event.preventDefault();
//   const newTask = cInput.value;
//   if (newTask === '') {
//       alert('Please enter a task!');
//       return;
//   }

//   // Additional code to add the task will go here

//   cInput.value = ''; // Clear the input field after adding a task
// });







// function addComment() {
//   const newComment = cInput.value;

//   // This wasn't in the instructions, but
//   // we added a guard against empty comments:
//   if (newComment === "") return;

//   /////cList.appendChild(document.createElement("li")).textContent = newComment;
//   ////cInput.value = "";
//   ///cInput.focus();
// }

// // Register the event listener.
cBtn.addEventListener("click",myfunction);
function myfunction(){

  window.alert('Please,you have to enter your task!');
}

//todoForm.addEventListener('submit', addComment) 

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
 //Creating a Function to Add Tasks////////
  function addTask(task) {
    const listItem = document.createElement('li');
   // console.log(task);
    listItem.textContent = task;
  
    // Additional functionality to be added here
  
    todoList.appendChild(listItem);
  }

//integrate our addTask function into the form submission event:
  todoForm.addEventListener('submit', function(event) {
    // Existing code
  
    addTask(newTask); // Add the new task
  });
