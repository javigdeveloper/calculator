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

function inputNumber(n) {
  document.getElementById("mainDisplay").value = n;
}