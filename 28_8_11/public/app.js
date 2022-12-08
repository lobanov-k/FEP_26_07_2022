const API_URL = "http://127.0.0.1:3000";

const usersBlock = document.querySelector(".usersBlock");

const addUsersHtml = ({ id, name, age }) => {
  const div = document.createElement("div");
  div.setAttribute("data-id", id);

  div.insertAdjacentHTML(
    "beforeend",
    `<p><span>User: ${name}; Age: ${age}</span><button data-action="delete">Delete</button><button data-action="edit" data-id="${id}" data-name="${name}" data-age="${age}">Edit</button></p>`
  );

  usersBlock.append(div);
};

const getUsers = () =>
  fetch(`${API_URL}/users`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      usersBlock.innerHTML = "";
      data.forEach(addUsersHtml);
    })
    .catch((error) => {
      alert(error.message);
    });

getUsers();

document.forms.user.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = this.name.value;
  const age = this.age.value;

  fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => addUsersHtml(data))
    .catch((error) => alert(error.message));
});

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "delete") return;
  const id = event.target.closest("[data-id]").dataset.id;

  fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => getUsers())
    .catch((error) => alert(error.message));
});

usersBlock.addEventListener("click", function (event) {
  if (event.target.dataset.action !== "edit") return;
  const id = event.target.dataset.id;
  const name = event.target.dataset.name;
  const age = event.target.dataset.age;

  const edit_form = document.forms.user_edit;
  edit_form.querySelector('[name="id"]').value = id;
  edit_form.querySelector('[name="name"]').value = name;
  edit_form.querySelector('[name="age"]').value = age;
  edit_form.style.display = "block";
});

document.forms.user_edit.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = this.id.value;
  const name = this.name.value;
  const age = this.age.value;

  fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const edit_form = document.forms.user_edit;
      edit_form.querySelector('[name="id"]').value = "";
      edit_form.querySelector('[name="name"]').value = "";
      edit_form.querySelector('[name="age"]').value = "";
      edit_form.style.display = "none";

      getUsers();
    })
    .catch((error) => alert(error.message));
});
