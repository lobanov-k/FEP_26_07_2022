function getCarHtml(car) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <div class="card-body">
      <p>${car.brand}, ${car.year}. Power: ${car.hp} hP</p>
      <div class="select-wrapper"></div>
    </div>`;
  return div;
}

function getUserHtml(user) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <div class="card-body">
      <p class='nameJS'>${user.name}</p>
      <p>${user.age} y/o</p>
      <p>Cars: ${user
        .getCars()
        .reduce((acc, item) => `${acc ? acc + ", " : ""}${item.brand}`, "")}
      </p>
      <div class="select-wrapper"></div>
    </div>
  `;
  return div;
}

/**
 * Create select ti bind some object to another
 * @param {function} callback - callback to be called on select changes
 * @param {[{text, disabled: boolean, instance: object, id}]} options
 */
function appendSelectHtml(callback, options, parentEl, defaultOptionName) {
  const selectEl = document.createElement("select");
  selectEl.classList.add("form-select");

  selectEl.innerHTML += `<option value="">${defaultOptionName}</option>`;

  options.forEach(({ text, disabled }, index) => {
    selectEl.innerHTML += `<option value="${index}" ${
      disabled ? "disabled" : ""
    }>${text}</option>`;
  });

  parentEl.append(selectEl);

  // on select call callback with instance
  selectEl.addEventListener("change", function (event) {
    callback(options[event.target.value].instance);
  });

  return selectEl;
}

const addCarSelect = (cars) => {
  usersBlock.childNodes.forEach((element) => {
    let markup = `<select class='selectJS'><option>${cars[0]?.brand}</option><option>${cars[1]?.brand}</option><option>${cars[2]?.brand}</option><option>${cars[3]?.brand}</option></select>`;
    element.insertAdjacentHTML("beforeend", markup);
  });
};

const addSelectedCar = (event) => {
  const cardBody = event.target.closest("div");
  const carName = event.target.value;
  const markup = `<span>${carName}</span>`;
  cardBody.insertAdjacentHTML("beforeend", markup);

  const currentUser = cardBody.querySelector(".nameJS");
  const userName = currentUser.innerHTML;
  let currentUserObj;

  users.filter((e) => {
    if (userName === e.name) {
      currentUserObj = e;
    }
  });

  cars.filter((e) => {
    if (carName === e.brand) {
      e.setOwner(currentUserObj);
      console.log(e.brand, "has a new owner:", currentUserObj.name);

      const select = usersBlock.querySelector("select");
      const selectAll = usersBlock.querySelectorAll("select");
      let markup;
      usersBlock.childNodes.forEach((element) => {
        console.log(element);
        cars.forEach((car) => {
          if (car.owner === null) {
            console.log(car);
            markup += `<option>${car?.brand}</option>`;
          }
        });
        // markup = `<option>${cars[0]?.brand}</option><option>${cars[1]?.brand}</option><option>${cars[2]?.brand}</option>`;
        select.innerHTML = `<select class='selectJS'>${markup}</select>`;
        selectAll.forEach((e) => {
          e.innerHTML = `<select class='selectJS'>${markup}</select>`;
        });
      });
    }
  });
};
