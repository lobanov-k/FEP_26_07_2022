const form = document.forms.taskForm;
const input = document.querySelector("input");
const checkbox = document.querySelector(".checkbox");
const select = document.querySelector(".filterOption");

const tasksArray = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.input.value.trim() === "") {
    addErrorMessage(form.input, "Строка не должна быть пустой!");
    return;
  }

  const newTaskArray = {
    id: tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1,
    name: form.input.value,
    isDone: false,
  };

  tasksArray.push(newTaskArray);

  console.log(tasksArray);

  const newTask = document.createElement("div");
  newTask.setAttribute("data-id", newTaskArray.id);
  newTask.setAttribute("class", "inputWrapper");

  const newElem = document.createElement("p");
  newElem.textContent = form.input.value;
  newElem.classList.add("inProgress");

  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("value", "isDone");

  newCheckbox.className = "checkbox";

  const close = document.createElement("span");
  const txt = document.createTextNode("\u00d7");
  close.className = "close";
  close.append(txt);

  newElem.append(newCheckbox);
  newElem.append(close);
  newTask.append(newElem);
  form.append(newTask);

  input.value = "";

  newCheckbox.addEventListener("change", function (event) {
    const wrapper = this.closest(".inputWrapper");
    const id = wrapper.getAttribute("data-id");

    wrapper.querySelector("p").classList.add("all");

    const task = tasksArray.find((taskItem) => taskItem.id == id);
    task.isDone = this.checked;

    if (task.isDone) {
      wrapper.querySelector("p").classList.add("input-through");
      wrapper.querySelector("p").classList.toggle("done");
      wrapper.querySelector("p").classList.toggle("inProgress");
    } else {
      wrapper.querySelector("p").classList.remove("input-through", "done");
      wrapper.querySelector("p").classList.toggle("inProgress");
    }
  });
  select.addEventListener("click", filterTodo);

  function filterTodo(e) {
    const todos = newTask.childNodes;
    todos.forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;

        case "done":
          if (todo.classList.contains("done")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;

        case "inProgress":
          if (todo.classList.contains("inProgress")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }

  close.addEventListener("click", function () {
    newTask.remove();
  });
});

form.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    this.classList.remove("classError");
    this.closest(".inputWrapper")
      .querySelectorAll(".errorText")
      .forEach((error) => error.remove());
  });
});

function addErrorMessage(inputElement, message) {
  inputElement.classList.add("classError");
  const error = getErrorElement(message);
  form.input.closest(".inputWrapper").append(error);
}

function getErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = message;
  errorMsg.classList.add("errorText");

  return errorMsg;
}
