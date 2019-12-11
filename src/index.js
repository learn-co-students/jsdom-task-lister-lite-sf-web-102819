document.addEventListener("DOMContentLoaded", () => {
  // get the form (form tag)
  const taskForm = document.getElementById("create-task-form");
  // get the list that we are appending our items to
  const list = document.getElementById("list");

  // when the form is submited do this
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // user input field
    let userInput = document.getElementById("new-task-description");
    // create item to add to list section
    let item = document.createElement("li");
    item.textContent = userInput.value;
    // append also works
    list.appendChild(item);
    // clears field
    userInput.value = "";
  })
});
