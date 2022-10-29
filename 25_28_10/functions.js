function getCarHtml(car) {
  return `
    <div car-id=${car.id}>
      <p>${car.brand}, ${car.year}. Power: ${car.hp} hP</p>
    </div>
  `;
}

function getUserHtml(user) {
  return `
    <div>
      <p>${user.name}</p>
      <p>${user.age} y/o</p>
      <p>Cars: ${user
        .getCars()
        .reduce((acc, item) => `${acc}, ${item.brand}`, "")}</p>
    </div>
  `;
}
