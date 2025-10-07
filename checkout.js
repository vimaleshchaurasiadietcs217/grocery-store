const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const orderInput = document.getElementById("orderInput");

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let html = "<ul>";
  let orderText = "";

  cart.forEach(item => {
    html += `<li>${item.qty} x ${item.name} - $${(item.qty * item.price).toFixed(2)}</li>`;
    orderText += `${item.qty} x ${item.name} - $${(item.qty * item.price).toFixed(2)}\n`;
  });

  html += "</ul>";
  cartContainer.innerHTML = html;
  orderInput.value = orderText;
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  localStorage.removeItem("cart"); // Optional: clear cart after submit
});
