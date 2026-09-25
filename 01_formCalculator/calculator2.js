function calculate() {
  /*const inputs = [
    document.getElementById("op1"),
    document.getElementById("op2")
  ];*/
  const option1 = document.getElementById("op1").value;
  const option2 = document.getElementById("op2").value;

  //let values = [];
  /*for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("All fields must be filled.");
      console.log("All fields must be filled.");
      return;
    }
    if (isNaN(input.value)) {
      alert("All fields must be numbers.");
      console.log("All fields must be numbers.");
      return;
    }
    values.push(parseFloat(input.value));
  }*/

  if (option1 === "" ) {
    alert("All fields must be filled.");
      console.log("All fields must be filled.");
      return;
  } else if (isNaN(option1.value)) {
    alert("All fields must be numbers.");
      console.log("All fields must be numbers.");
      return;
  } else if (option2 === "" ) {
    alert("All fields must be filled.");
      console.log("All fields must be filled.");
      return;
  } else if (isNaN(option2.value)) {
    alert("All fields must be numbers.");
      console.log("All fields must be numbers.");
      return;
  } else {
  // Recoger operación como en tu versión original
  const form = document.getElementById("calcForm");
  let operation = form.elements["operation"].value;

  let result;
  switch (operation) {
    case "add":
      result = option1 + option2;
      break;
    case "subtract":
      result = option1 - option2;
      break;
    case "multiply":
      result = option1 * option2;
      break;
    case "divide":
      if (option2 === 0) {
        alert("Cannot divide by zero!");
        console.log(`${option2} debe ser diferente de 0`);
        return;
      }
      result = option1 / option2;
      break;
    default:
      alert("No operation selected.");
      console.log("No operation selected.");
      return;
  }

  alert("Result: " + result);
}
}