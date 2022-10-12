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

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = form.title.value;
  const text = form.text.value;

  createArticle({
    title,
    text,
  }).then(({ id, text, title }) => {
    const div = createArticleEl({ id, text, title });
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

          // updateArticle({
          //   id: articleId,
          //   title,
          //   text,
          // }).then(({ id, title, text }) => {
          //   const newArticleEl = createArticleEl({ id, title, text });
          //   articlesList.replaceChild(articleWrapper, newArticleEl);
          // });

          const newArticleEl = createArticleEl({ articleId, title, text });
          articlesList.replaceChild(
            newArticleEl,
            articlesList.querySelector(`[data-id="${articleId}"]`)
          );
        });
      break;

    case DELETE_ACTION:
      const deleteId = event.target
        .closest("[data-id]")
        .getAttribute("data-id");
      deleteArticle({ id: deleteId }).then(() => {
        event.target.closest("[data-id]").remove();
      });
      break;

    default:
      break;
  }
});
