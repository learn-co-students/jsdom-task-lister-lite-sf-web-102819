document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const task = document.getElementById("tasks");
  taskForm.addEventListener("submit", function(event){
    
    event.preventDefault();
    const userInputField = event.target.querySelector('#new-task-description');
    let userInput = userInputField.value;
    
    let listElement = document.createElement("li");
    listElement.innerText = userInput;
    task.appendChild(listElement);
   userInputField.value = null
  })
});
