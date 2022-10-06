const url = "https://api.github.com/users/lobanov-k";
const avatarContainer = document.getElementById("avatar");

// fetch(url)
//   .then((response) => response.json())
//   .then(({ avatar_url }) => {
//     avatarContainer.innerHTML = `<img src="${avatar_url}" />`;
//   });

// ============= ARTICLE =============
const form = document.forms.articleForm;
const articlesList = document.querySelector(".articlesList");
const EDIT_ACTION = "EDIT";
const DELETE_ACTION = "DELETE";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = form.title.value;
  const text = form.text.value;

  createArticle({
    title,
    text,
  }).then(({ id, text, title }) => {
    const div = document.createElement("div");
    div.setAttribute("data-id", id);

    div.innerHTML = `
      <div class="articleContent">
        <h5 class="articleTitle">${title}</h5>
        <p class="articleText">${text}</p>
      </div>
      <div>
        <button data-action="${EDIT_ACTION}" class="btn btn-primary">Edit</button>
        <button data-action="${DELETE_ACTION}" class="btn btn-danger">Delete</button>
      </div>
    `;

    articlesList.append(div);
  });
});

articlesList.addEventListener("click", function (event) {
  event.preventDefault();
  const action = event.target.getAttribute("data-action");

  switch (action) {
    case EDIT_ACTION:
      const articleWrapper = event.target.closest("[data-id]");
      const articleId = articleWrapper.getAttribute("data-id");
      const form = document.createElement("form");

      articleWrapper.querySelector(".articleContent").classList.add("d-none");

      form.setAttribute("data-form", "edit");
      form.setAttribute("name", `article-${articleId}`);

      form.innerHTML = `
        <input class="form-control" name="title" />
        <textarea class="form-control" name="text"> </textarea>
        <button type="submit" class="btn btn-success">Save</button>
      `;

      form.title.value = articleWrapper.querySelector(
        ".articleContent .articleTitle"
      ).textContent;

      form.text.value = articleWrapper.querySelector(
        ".articleContent .articleText"
      ).textContent;

      articleWrapper.append(form);

      form
        .querySelector("[type=submit]")
        .addEventListener("click", function (event) {
          event.preventDefault();

          const title = form.title.value;
          const text = form.text.value;

          updateArticle({
            id: articleId,
            title,
            text,
          }).then((data) => console.log(data));
        });
  }
});
