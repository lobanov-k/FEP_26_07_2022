const form = document.getElementById("someForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(this.elements);

  // for (let i = 0; i < this.elements.length; i++) {
  // console.log(this.elements[i].value);
  // }

  console.log(form.elements["lastName"].value);
});

form.elements["lastName"].addEventListener("change", function () {
  console.log(this.value.length);
});

console.log(document.forms["persona"]);

form.elements["gender"].forEach((item) => {
  item.addEventListener("change", function () {
    if (this.value === "male") {
      form.querySelector(".womanSize").classList.add("hidden");
      form.querySelector(".menSize").classList.remove("hidden");
    } else if (this.value === "female") {
      form.querySelector(".womanSize").classList.remove("hidden");
      form.querySelector(".menSize").classList.add("hidden");
    }
  });
});

form.elements["comment"].addEventListener("input", function (event) {
  form.querySelector("#commentLength").textContent = this.value.length;
  if (this.value.length >= 4) {
    this.setAttribute("disabled", "");
  }
});
