const inputForm = document.querySelector("#inputForm");
const taskList = document.querySelector("#taskList");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = document.querySelector("#taskInput").value.trim();
  // ALERT MESSAGE (NO INPUT TEXT)
  if (!inputValue) {
    alert("Please enter a task!");
    taskInput.style.borderColor = "red";
    taskInput.style.borderWidth = "3px";
    return;
  }

  // ALERT MESSAGE (MAXUMIM LETTER)
  if (inputValue.length > 5) {
    alert("You exceed the maximum letters allowed (5)!");
    taskInput.style.borderColor = "red";
    taskInput.style.borderWidth = "3px";
    return;
  }

  taskInput.style.borderColor = "";
  addToList(inputValue);
  document.querySelector("#taskInput").value = "";
});

function addToList(inputValue) {
  let newListItem = document.createElement("li");
  newListItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let taskSpan = document.createElement("span");
  taskSpan.textContent = inputValue;
  newListItem.appendChild(taskSpan);

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("btn-group");

  //DONE button!!!!!!!!!!!!!!!!
  let doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.classList.add("btn", "btn-success", "btn-sm", "me-2");
  doneButton.addEventListener("click", function (e) {
    e.preventDefault(); //to prevent the alert!!!!!!!!!!!
    taskSpan.style.textDecoration = "line-through";
  });
  buttonContainer.appendChild(doneButton);

  //DELETE button!!!!!!!!!!!!!!!
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "btn-sm");
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(newListItem);
  });
  buttonContainer.appendChild(deleteButton);

  newListItem.appendChild(buttonContainer);

  taskList.appendChild(newListItem);
}
