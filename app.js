let x,y;

function addXAndY(x, y) {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  document.getElementById("result").innerHTML = x + y;
}

function subtractXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  document.getElementById("result").innerHTML = x - y;
}

function multiplyXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  document.getElementById("result").innerHTML = x * y;
}

function divideXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  document.getElementById("result").innerHTML = x / y;
}

document.getElementById("mainDisplay").value = "";

function inputNumber(n) {
  document.getElementById("mainDisplay").value += n.toString();
}

function add() {
  document.getElementById("secondaryDisplay").value =
  document.getElementById("mainDisplay").value + " +";
  document.getElementById("mainDisplay").value = "";
}
function minus() {
  document.getElementById("secondaryDisplay").value =
  document.getElementById("mainDisplay").value + " -";
  document.getElementById("mainDisplay").value = "";
}
function times() {
  document.getElementById("secondaryDisplay").value =
  document.getElementById("mainDisplay").value + " x";
  document.getElementById("mainDisplay").value = "";
}
function divided() {
  document.getElementById("secondaryDisplay").value =
  document.getElementById("mainDisplay").value + " /";
  document.getElementById("mainDisplay").value = "";
}

function dot() {
  document.getElementById("mainDisplay").value += ".";
}

function equals() {
  let r = document.getElementById("secondaryDisplay").value;
  let result = r.split(" ");
  if(result[1] === "+") {
    document.getElementById("mainDisplay").value =
    parseFloat(result[0]) + parseFloat(document.getElementById("mainDisplay").value);
  } else if(result[1] === "-") {
    document.getElementById("mainDisplay").value =
    parseFloat(result[0]) - parseFloat(document.getElementById("mainDisplay").value);
  } else if(result[1] === "x") {
    document.getElementById("mainDisplay").value =
    parseFloat(result[0]) * parseFloat(document.getElementById("mainDisplay").value);
  } else if(result[1] === "/") {
    document.getElementById("mainDisplay").value =
    parseFloat(result[0]) / parseFloat(document.getElementById("mainDisplay").value);
  }
}

function clearMain() {
  document.getElementById("mainDisplay").value = "";
  document.getElementById("secondaryDisplay").value = "";
}