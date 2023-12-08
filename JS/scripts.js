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