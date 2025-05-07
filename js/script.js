// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html

"use strict"

function calculateCost() {
  let pastry = document.getElementById("pastry")
  let value = pastry.options[pastry.selectedIndex].value
  let quantity = parseInt(document.getElementById("quantity").value)
  let itemCost = 0
  let discountRate = 0
  let discount = 0
  let subTotal = 0
  let taxRate = 0.13
  let tax = 0
  let total = 0

  if (value == "cupcake") {
    itemCost = 2.00
  } else if (value == "donut") {
    itemCost = 1.50
  } else if (value == "mini-cheesecake") {
    itemCost = 3.00
  } else if (value == "macaron") {
    itemCost = 1.00
  } else {
    itemCost = 2.50
  }

  if (quantity > 5) {
    discountRate = 0.10
  }

  subTotal = quantity * itemCost
  discount = subTotal * discountRate
  tax = (subTotal - discount) * taxRate
  total = subTotal - discount + tax
  subTotal = subTotal.toFixed(2)
  discount = discount.toFixed(2)
  tax = tax.toFixed(2)
  total = total.toFixed(2)

  document.getElementById('items').innerHTML = "<p>" + quantity + " " + value + "(s)</p>"
  document.getElementById('subTotal').innerHTML = "<p>Subtotal: $" + subTotal + "</p>"
  document.getElementById('discount').innerHTML = "<p>Discount: $" + discount + "</p>"
  document.getElementById('tax').innerHTML = "<p>Tax: $" + tax + "</p>"
  document.getElementById('total').innerHTML = "<p>Total: $" + total + "</p>"
}
