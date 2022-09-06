const errorClass = "error";

function getErrorElement(message) {
  // add error message
  const errorMsg = document.createElement("p"); // <p></p>
  errorMsg.classList.add("errorText"); //  <p class="errorText"></p>
  errorMsg.textContent = message; //  <p class="errorText">Field must not be empty!</p>

  return errorMsg;
}

function addErrorMessage(inputElemnt, message) {
  if (inputElemnt.classList.contains(errorClass)) return;

  inputElemnt.classList.add(errorClass);
  const error = getErrorElement(message);
  inputElemnt.closest(".fieldWrapper").append(error);
}

const form = document.forms["shipment"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.name.value.trim().length) {
    addErrorMessage(form.name, "Field must not be empty!");
  }

  if (!form.address.value.trim().length) {
    addErrorMessage(form.address, "Field must not be empty!");
  }

  console.log("... API CALL");
  // SOME API REQUEST TO SEND FORM'S DATA
});

form.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    this.classList.remove(errorClass);
    this.closest(".fieldWrapper")
      .querySelectorAll(".errorText")
      .forEach((error) => error.remove());
  });
});

// =========== TODO LIST

// attribut object {name: type, value: checkbox}
function createNode(tagName, attributes) {
  const el = document.createElement(tagName);
  attributes.forEach(({ name, value }) => {
    el.setAttribute(name, value);
  });
  return el;
}

const todoForm = document.forms.todo;
const taskList = document.querySelector(".taskList");

todoForm.elements.task.addEventListener("input", function () {
  this.classList.remove(errorClass);
  this.closest(".fieldWrapper")
    .querySelectorAll(".errorText")
    .forEach((error) => error.remove());
});

const tasksArray = [];
// {
//   id,
//   text,
//   isDone
// }

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (todoForm.elements.task.value.trim() === "") {
    addErrorMessage(todoForm.elements.task, "Type something!");
    return;
  }

  const newTask = {
    id: tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1,
    name: todoForm.elements.task.value,
    isDone: false,
  };

  tasksArray.push(newTask);

  console.log(tasksArray);

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");
  taskWrapper.setAttribute("data-id", newTask.id);

  const text = document.createElement("p");
  text.textContent = todoForm.elements.task.value;

  // const checkbox = document.createElement("input");
  // checkbox.setAttribute("type", "checkbox");
  // checkbox.setAttribute("value", "isDone");

  const checkbox = createNode("input", [
    { name: "type", value: "checkbox" },
    { name: "value", value: "isDone" },
  ]);

  taskWrapper.append(checkbox);
  taskWrapper.append(text);

  taskList.append(taskWrapper);

  checkbox.addEventListener("change", function () {
    const wrapper = this.closest(".taskWrapper");
    const id = wrapper.getAttribute("data-id");

    const task = tasksArray.find((taskItem) => taskItem.id == id);

    task.isDone = this.checked;

    if (task.isDone) {
      wrapper.querySelector("p").classList.add("doneTask");
      return;
    }
    wrapper.querySelector("p").classList.remove("doneTask");
  });
});
