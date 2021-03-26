// STEP 1  ---------------------------------------------------------------------------
// Write 4 functions - 1 for each mathematical operators on the calculator
// Each function should accept two input parameters:
// - firstInput
// - secondInput

// Each function should return the value of the appropriate 
// calculation for the mathematical operator
// -----------------------------------------------------------------------------------
function addition(firstInput, secondInput) {
  result = firstInput + secondInput;
  return result;
  }

function subtraction(firstInput, secondInput) {
  result = firstInput - secondInput;
  return result;
  }

function multiplication(firstInput, secondInput) {
  result = firstInput * secondInput;
  return result;
  }

function division(firstInput, secondInput) {
  result = firstInput / secondInput;
  return result;
  }




// STEP 2  ---------------------------------------------------------------------------
// Write a function called calculate()
// calculate() should accept three input parameters:
// - firstInput
// - secondInput
// - operator

// Inside the calculate() function, write a switch case statement
// Switch case should use operator as the switch parameter
// Include a case for each of the mathematical operators
// Inside each case, call the appropriate mathematical function from step 1
// Return the value of this function, using firstInput and secondInput as parameters
// -----------------------------------------------------------------------------------
function calculate(firstInput, secondInput, operator) {
  switch (operator) {
    case '+':
      return addition(firstInput, secondInput);
      break;
    case '-':
      return subtraction(firstInput, secondInput);
      break;
    case '*':
      return multiplication(firstInput, secondInput);        
      break;
    case '/':
      return division(firstInput, secondInput);
      break;
    
  }
}


