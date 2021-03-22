//SELECTORS
const todoInput = document.querySelector('.todo-inputs');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");


//EVENT LISTENER
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("change",filterTodo);


//FUNCTIONS
function addTodo(event){
 event.preventDefault(); //stop refresh page when adding new element
 const todoDiv = document.createElement('div');
 todoDiv.classList.add("todo");
 //inserting new to-dos
 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo);
 //checke button
 const completeButton = document.createElement("button");

 completeButton.innerHTML = '<i class = "fas fa-check"></i>';//set attribute?
 /*
  same as
  const buttonIcon = document.createElement("i")
  buttonIcon.classList.add("fas")
  buttonIcon.classList.add("fa-check")
  completeButton.append(buttonIcon)
 */
 completeButton.classList.add("complete-btn");
 todoDiv.appendChild(completeButton);
 //delete button
 const deleteButton = document.createElement("button");
 deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
 deleteButton.classList.add("delete-btn");
 todoDiv.appendChild(deleteButton);
 //append to list
 todoList.appendChild(todoDiv);
}
//clear input value
todoInput.value = "";
//delete to-dos
function deleteCheck(e){
  const item = e.target; //see where the mouse click on
 if(item.classList[0] === "delete-btn"){
     const todo = item.parentElement;
     //animation
     todo.classList.add("fall"); //for deleting effect
     todo.addEventListener("transitionend",function(){
         todo.remove();
     }) //run only after the function is completed
     //delete the item
    } 
 if(item.classList[0] === "complete-btn"){
     const todo = item.parentElement;
     todo.classList.toggle("completed");
     //check the item
    }
}
//filter
function filterTodo(e){
    const todos = todoList.childNodes;
      todos.forEach(function(todo) {
        if(todos[0] == todo){
          return;
        }
        switch(e.target.value) {
            case "all": 
             todo.style.display = "flex";
             break;
            case "completed":
             if (todo.classList.contains("completed")){
                  todo.style.display = "flex";
                  break;
                  } 
                else {
                  todo.style.display = "none";
                  break;
                 }
           case "in-progress":
             if (!todo.classList.contains("completed")){
                  todo.style.display = "flex";
                  break;
                  } 
                else {
                  todo.style.display = "none";
                  break;
                 }
            }
            }
        );
 }