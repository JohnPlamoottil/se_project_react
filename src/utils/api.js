const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

// addItem - analyze how you use getItems, and by analogy use postItems
function addItems({ name, imageUrl, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

// removeItem
const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
export { getItems, addItems, removeItem, checkResponse };
