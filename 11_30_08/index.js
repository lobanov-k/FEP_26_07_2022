const form = document.forms.taskForm;
const input = document.querySelector("input");
const checkbox = document.querySelector(".checkbox");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.setAttribute("class", "input-item");
  newTask.innerHTML = form.input.value;
  form.appendChild(newTask);

  input.value = "";
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.className = "checkbox";
  newTask.prepend(newCheckbox);

  newCheckbox.addEventListener("change", function () {
    newTask.classList.toggle("input-through");
  });

  const close = document.createElement("span");
  const txt = document.createTextNode("\u00d7");
  close.className = "close";
  close.appendChild(txt);
  newTask.appendChild(close);

  close.addEventListener("click", function () {
    newTask.remove();
  });
});
