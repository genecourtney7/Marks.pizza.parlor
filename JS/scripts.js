// Business Logic

class Pizza {
  constructor(crust,toppings, size) {
    this.crust = crust;
    this.toppings = toppings;
    this.size = size;
  }

  price() {
    let cost = 0;
    if (this.size == "small") {
      cost += 5;
    }
    else if (this.size == "medium"){
      cost += 7;
    }
    else {
      cost += 10;
    }
    cost += .25 * this.toppings.length;
    return cost;
  }
}


//UI Logic
window.onload = function () {
  const orderButton = document.getElementById("order");
  orderButton.addEventListener("click", function (event){
    event.preventDefault();
    const toppings = [];
    const toppingsCheckboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0, i < toppingsCheckboxes.length; i++) {
        if (toppingsCheckboxes[i].checked) {
            toppings.push(toppingsCheckboxes[i].id);
        }
    }
    const sizeSelect = document.getElementById("size");
    const size = sizeSelect.options[sizeSelect.selectedIndex].value;
    const pizza = new Pizza(crust, toppings, size);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your pizza cost $${pizza.price()}`;
  });
};