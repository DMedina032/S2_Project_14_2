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
window.addEventListener("load", setCart);

function setCart() {
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons; i++) {
            addButtons[i].onclick.addItem;
      }
}



function addItem(e) {
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;
      for (let n = cartBox.firstChild; n = n.nextElementSibling; n != null) {
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