let count = 0;
let button = document.getElementById("clickerButton");
button.textContent = "Count: " + count;
function doSomething() {
    alert("🧀🧀🧀🧀🧀🧀🧀");
}
function incrementCount() {
    count += 1;
    button.textContent = "Count: " + count;
}
function getCount() {
    return count;
}
