const API_URL = "https://jsonplaceholder.typicode.com/posts";

const createArticle = ({ title, text }) => {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      text: text,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

const getArticle = ({ id }) =>
  fetch(`${API_URL}/${id}`).then((response) => response.json());

const updateArticle = ({ id, title, text }) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      text: text,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

const deleteArticle = ({ id }) =>
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
