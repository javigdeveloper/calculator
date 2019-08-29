function addXAndY() {
    var x,y,z;
    x = document.getElementById("fieldOne").value;
    y = document.getElementById("fieldTwo").value;
    x = Number(x);
    y = Number(y);
    z = x + y;
    document.getElementById("result").innerHTML = z;
}
function subtractXAndY() {
    var x,y,z;
    x = document.getElementById("fieldOne").value;
    y = document.getElementById("fieldTwo").value;
    x = Number(x);
    y = Number(y);
    z = x - y;
    document.getElementById("result").innerHTML = z;
}
function multiplyXAndY() {
    var x,y,z;
    x = document.getElementById("fieldOne").value;
    y = document.getElementById("fieldTwo").value;
    x = Number(x);
    y = Number(y);
    z = x * y;
    document.getElementById("result").innerHTML = z;
}
function divideXAndY() {
    var x,y,z;
    x = document.getElementById("fieldOne").value;
    y = document.getElementById("fieldTwo").value;
    x = Number(x);
    y = Number(y);
    z = x / y;
    document.getElementById("result").innerHTML = z;
}