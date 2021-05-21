// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // this code will check if your integer is positive or negative

  const userNumber = parseInt(document.getElementById('user-number').value)

  if (userNumber < 0) {
		document.getElementById('answer').innerHTML = "Your integer is a negative number.";
	} else {
		document.getElementById('answer').innerHTML = "Your integer is a positive number.";
	}
}
