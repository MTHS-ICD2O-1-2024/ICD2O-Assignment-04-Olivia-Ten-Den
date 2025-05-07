// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html

"use strict"

function checkDiscount() {
  let age = parseInt(document.getElementById("age").value);
  let dayOfTheWeek = document.getElementById("day");
  let value = dayOfTheWeek.options[dayOfTheWeek.selectedIndex].value;

  if (value == "tuesday" || value == "thursday" || (age > 12 && age < 21)) {
    document.getElementById('result').innerHTML = "<p>You are eligible for the discount.</p>";
  } else {
    document.getElementById('result').innerHTML = "<p>You are NOT eligible for the discount.</p>";
  }
}
