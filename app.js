let x,y;
let elem = document.getElementById("result");

function addXAndY(x, y) {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  let z = x + y;
  let arr = z.toString().split(".");
  let newArr = [];
  // if result is an integer
  if(arr.length === 1) {
    if(arr[0].length > 10) {
      elem.innerHTML = z.toPrecision(1);
    } else {
      elem.innerHTML = z;
    }
  // if result is a float
  } else if(arr.length === 2) {
    // if decimals are more than 9
    if(arr[1].length > 9) {
      elem.innerHTML = z.toPrecision(9);
    } else {
      for(let i = 9; i > 0; i--) {
        let counter = 10 - i;
        if(arr[0].length > 9) {
          elem.innerHTML = z.toPrecision(1);
        } else if(arr[0].length === i) {
          newArr.push(arr[0]);
          let decimals = arr[1].slice(0, counter);
          newArr.push(decimals);
          z = parseFloat(newArr.join("."));
          elem.innerHTML = z;
          break;
        }
      }
    }
  }
}

function subtractXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  let z = x - y;
  let arr = z.toString().split(".");
  let newArr = [];
  // if result is an integer
  if(arr.length === 1) {
    if(arr[0].length > 10) {
      elem.innerHTML = z.toPrecision(1);
    } else {
      elem.innerHTML = z;
    }
  // if result is a float
  } else if(arr.length === 2) {
    // if decimals are more than 9
    if(arr[1].length > 9) {
      elem.innerHTML = z.toPrecision(9);
    } else {
      for(let i = 9; i > 0; i--) {
        let counter = 10 - i;
        if(arr[0].length > 9) {
          elem.innerHTML = z.toPrecision(1);
        } else if(arr[0].length === i) {
          newArr.push(arr[0]);
          let decimals = arr[1].slice(0, counter);
          newArr.push(decimals);
          z = parseFloat(newArr.join("."));
          elem.innerHTML = z;
          break;
        }
      }
    }
  }
}

function multiplyXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  let z = x * y;
  let arr = z.toString().split(".");
  let newArr = [];
  // if result is an integer
  if(arr.length === 1) {
    if(arr[0].length > 10) {
      elem.innerHTML = z.toPrecision(1);
    } else {
      elem.innerHTML = z;
    }
  // if result is a float
  } else if(arr.length === 2) {
    // if decimals are more than 9
    if(arr[1].length > 9) {
      elem.innerHTML = z.toPrecision(9);
    } else {
      for(let i = 9; i > 0; i--) {
        let counter = 10 - i;
        if(arr[0].length > 9) {
          elem.innerHTML = z.toPrecision(1);
        } else if(arr[0].length === i) {
          newArr.push(arr[0]);
          let decimals = arr[1].slice(0, counter);
          newArr.push(decimals);
          z = parseFloat(newArr.join("."));
          elem.innerHTML = z;
          break;
        }
      }
    }
  }
}


function divideXAndY() {
  x = Number(document.getElementById("fieldOne").value);
  y = Number(document.getElementById("fieldTwo").value);
  let z = x / y;
  let arr = z.toString().split(".");
  let newArr = [];
  // if result is an integer
  if(arr.length === 1) {
    if(arr[0].length > 10) {
      elem.innerHTML = z.toPrecision(1);
    } else {
      elem.innerHTML = z;
    }
  // if result is a float
  } else if(arr.length === 2) {
    // if decimals are more than 9
    if(arr[1].length > 9) {
      elem.innerHTML = z.toPrecision(9);
    } else {
      for(let i = 9; i > 0; i--) {
        let counter = 10 - i;
        if(arr[0].length > 9) {
          elem.innerHTML = z.toPrecision(1);
        } else if(arr[0].length === i) {
          newArr.push(arr[0]);
          let decimals = arr[1].slice(0, counter);
          newArr.push(decimals);
          z = parseFloat(newArr.join("."));
          elem.innerHTML = z;
          break;
        }
      }
    }
  }
}



// Second Calculator:
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