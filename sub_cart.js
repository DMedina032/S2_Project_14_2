"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Dajah Medina
   Date:   4.5.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// This eventListener runs the setCart function when the page is loaded. 
window.addEventListener("load", setCart);
//This function will define event handlers. The addButtons function is declared that belongs to the class. 
function setCart() {
      var addButtons = document.getElementsByClassName("addButton");
      //Loops through the buttons collection for the event handler to be ran when clicked.
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}


//This function is added for the shopping cart when it is clicked. The nextElementSibling is used to reference the next sibling to the target of the event object. the foodItem varible is declared which is set to a value of the id attribute of foodItem. The foodItem is stored in foodDescription. To create a copy of the foodItem element and its decendants, cloneNode is used.
function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;
      //Loop thrtough the element child nodes of CartBox to detemine if the user palced the order or not and run through it. 
      for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
            if (n.id === foodID) {
                  duplicateOrder = true;
                  n.firstChild.textContent++;
                  break;
            }
      }
      if (duplicateOrder === false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = "1";
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);
            cartBox.appendChild(foodDescription);
      }
}