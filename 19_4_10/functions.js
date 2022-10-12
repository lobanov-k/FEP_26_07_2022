const EDIT_ACTION = "EDIT";
const DELETE_ACTION = "DELETE";

function createArticleEl({ id, text, title }) {
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

  return div;
}
