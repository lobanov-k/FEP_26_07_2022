// {
//   id
//   name: "",
//   age: 0,
//   gender: "male/female",
//   address: ""
// }

const USER_LIST_KEY = "userList";
const EDIT = "edit";
const VIEW = "view";
const REMOVE = "remove";

function setToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key, defaultValue) {
  const valueFromLs = localStorage.getItem(key);

  return valueFromLs === null && defaultValue
    ? defaultValue
    : JSON.parse(valueFromLs);
}

function createActionButton(id, text) {
  const button = document.createElement("button");
  button.setAttribute("data-action", id);

  button.textContent = text;
  return button;
}

// NODES
const form = document.forms.user;
const userListBlock = document.getElementById("usersList");

const userList = getFromLS(USER_LIST_KEY, []);

function renderList() {
  userListBlock.innerHTML = "";
  userList.forEach(function (user) {
    const block = document.createElement("div");
    block.setAttribute("data-id", user.id);
    block.classList.add("user");

    for (let key in user) {
      if (key === "id") continue;

      const line = document.createElement("p");
      line.textContent = key + ": " + user[key];
      block.append(line);
    }

    block.append(createActionButton(EDIT, "Edit"));
    block.append(createActionButton(VIEW, "View"));
    block.append(createActionButton(REMOVE, "Remove"));

    userListBlock.append(block);
  });
}

renderList();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const action = this.getAttribute("data-form-action");
  const userId = this.getAttribute("data-user-id");

  switch (action) {
    case EDIT:
      const user = userList.find((user) => user.id == userId);
      user.name = this.name.value;
      user.age = this.age.value;
      user.gender = this.gender.value;
      user.address = this.address.value;
      break;

    default:
      const newUser = {
        id: !userList.length
          ? userList.length
          : userList[userList.length - 1].id + 1,
        name: this.name.value,
        age: this.age.value,
        gender: this.gender.value,
        address: this.address.value,
      };
      userList.push(newUser);
  }

  setToLS(USER_LIST_KEY, userList);
  renderList();
});

userListBlock.addEventListener("click", function (event) {
  const action = event.target.getAttribute("data-action");
  if (!action) return;

  switch (action) {
    case EDIT:
      const id = event.target.closest("[data-id]").getAttribute("data-id");
      const user = userList[id];

      form.setAttribute("data-form-action", EDIT);
      form.setAttribute("data-user-id", id);

      form.name.value = user.name;
      form.age.value = user.age;
      form.gender.value = user.gender;
      form.address.value = user.address;
  }
});
