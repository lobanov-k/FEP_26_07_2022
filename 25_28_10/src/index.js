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

const renderCars = () => {
  carsBlock.innerHTML = "";

  cars.forEach((item) => {
    carsBlock.appendChild(getCarHtml(item));
  });
};

users.forEach((item) => {
  usersBlock.appendChild(getUserHtml(item));

  const selectorWrapper =
    usersBlock.children[usersBlock.children.length - 1].querySelector(
      ".select-wrapper"
    );

  appendSelectHtml(
    item.setCar.bind(item),
    carsOptions,
    selectorWrapper,
    "no car"
  );
});

// перехватываем change, чтобы знать когда произошли изменения и надо перерендерить пользователей
usersBlock.addEventListener("change", renderCars);

renderCars();
