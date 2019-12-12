const newTaskForm = document.getElementById("create-task-form");
const userInputField = document.getElementById("new-task-description");
const ulField = document.getElementById("tasks")


newTaskForm.addEventListener("submit", e => {
  e.preventDefault() // on a form so no refresh, fool.
  // console.log(event.target) .. get specific code that we clicked.
  const newListItem = document.createElement("li")
  newListItem.innerText = userInputField.value
  ulField.append(newListItem)

  const del = document.createElement("button")
  del.innerText = 'x'
  newListItem.append(del)

  userInputField.value = ""


  del.addEventListener("click", () => {
    newListItem.remove()
  })

});


// document.addEventListener("keydown", e => window.alert("hey"));