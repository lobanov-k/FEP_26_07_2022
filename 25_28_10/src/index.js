const usersBlock = document.getElementById("pills-users");
const carsBlock = document.getElementById("pills-cars");

const usersOptions = users.map((item) => {
  const { name, age } = item;

  return {
    text: `${name}, ${age}`,
    disabled: false,
    instance: item,
  };
});

const carsOptions = cars.map((item) => {
  const { brand, year } = item;

  return {
    text: `${brand} ${year}`,
    disabled: false,
    instance: item,
  };
});

const renderUsers = () => {
  usersBlock.innerHTML = "";

  users.forEach((item) => {
    usersBlock.appendChild(getUserHtml(item));
  });
};

cars.forEach((item) => {
  carsBlock.appendChild(getCarHtml(item));

  const selectorWrapper =
    carsBlock.children[carsBlock.children.length - 1].querySelector(
      ".select-wrapper"
    );

  appendSelectHtml(
    item.setOwner.bind(item),
    usersOptions,
    selectorWrapper,
    "no owner"
  );
});

// перехватываем change, чтобы знать когда произошли изменения и надо перерендерить пользователей
carsBlock.addEventListener("change", renderUsers);

renderUsers();
