# PizzaParlor
#### By: **Mark Courtney**
#### _Website for Marks Pizza Parlor._
https://genecourtney7.github.io/pizzaParlor/

## Technologies used
* _developer.mozilla.org_
* _learnhowtocode.com lessons_
* _google.com_
* _vs code terminal_

## Description
This is a website that will allow the user to create a custom pizza! They will select from different toppings and place order. They will be able to create a new order.

## Tests
Describe: Pizza.constructor(toppings, size)

Test: It should set the `toppings` and `size` properties to the provided values.
Code: const pizza = new Pizza(["cheese", "pepperoni"], "medium");
Expected Output: 
pizza.toppings[0] === "cheese"
pizza.toppings[1] === "pepperoni"
pizza.size === "medium"

Describe: Pizza.getCost()

Test: It should return the correct cost based on the size and number of toppings.
Code:
const pizza1 = new Pizza([], "small");
const pizza2 = new Pizza([], "medium");
const pizza3 = new Pizza([], "large");
const pizza4 = new Pizza(["cheese", "pepperoni"], "large");
Expected Output:
pizza1.getCost() === 5
pizza2.getCost() === 8
pizza3.getCost() === 10
pizza4.getCost() === 10.5

## Setup/Installation Requirements
* Clone this repository to your desktop: `https://genecourtney7.github.io/
* Open `index.html` in a web browser. 
* Begin building custom pizza.
* Select toppings for custom pizza.
* Place order. 

## Known Bugs
* No known Bugs

## License  
* MIT 

Copyright (c) _12-7-23_ Author: _Mark Courtney_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.