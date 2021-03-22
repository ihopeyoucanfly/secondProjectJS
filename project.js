let cart = {
  sisls23: 0,
};

document.onclick = (event) => {
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
  } else if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
  }
};

let title = document.getElementById("title");

// увеличение кол-ва товара
const plusFunction = (id) => {
  cart[id]++;
  title.textContent = cart[id];
  renderCart();
};

// уменьшение кол-ва товара
const minusFunction = (id) => {
  if (cart[id] <= 0) {
    minusNull(id);
    return true;
  } else if (cart[id] - 1 == 0) {
    deleteFunction(id);
    return true;
  }

  cart[id]--;
  title.textContent = cart[id];
  renderCart();
};

// удаление товара
const deleteFunction = (id) => {
  cart[id]--;
  title.textContent = cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};

renderCart();

