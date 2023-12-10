class Pizza {
  constructor(toppings, size) {
    this.toppings = toppings;
    this.size = size;
  }
  price() {
    let cost = 0;
    if (this.size == "small") {
      cost += 5;
    }
    else if (this.size == "medium") {
      cost += 7;
    }
    else {
      cost += 10;
    }
    cost += .25 * this.toppings.length;
    return cost;
  }
}
  
let order = [];
  
//UI Logic
window.onload = function () {
  const orderButton = document.getElementById("order");
  const addToOrderButton = document.getElementById("addToOrder");
  const newOrderButton = document.getElementById("newOrder");
    
  addToOrderButton.addEventListener("click", function (event) {
    event.preventDefault();
    const toppings = [];
    const toppingsCheckboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < toppingsCheckboxes.length; i++) {
      if (toppingsCheckboxes[i].checked) {
        toppings.push(toppingsCheckboxes[i].id);
      }
    }
    const sizeSelect = document.getElementById("size");
    const size = sizeSelect.options[sizeSelect.selectedIndex].value;
    const pizza = new Pizza(toppings, size);
    order.push(pizza);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `A ${size} pizza with ${toppings.join(", ")} added to order. Total pizzas in order: ${order.length}`;
  });
    
  orderButton.addEventListener("click", function (event) {
    event.preventDefault();
    let totalCost = 0;
    for (let i = 0; i < order.length; i++) {
      totalCost += order[i].price();
    }
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your order costs $${totalCost.toFixed(2)}`;
  });
  
  newOrderButton.addEventListener("click", function (event) {
    event.preventDefault();
    order = [];
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "New order created. Add pizzas to your order.";
  });
};