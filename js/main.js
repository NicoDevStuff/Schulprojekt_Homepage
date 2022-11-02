let count = 0;
function doSomething() {
    alert("🧀🧀🧀🧀🧀🧀🧀");
}
function incrementCount() {
    count += 1;
    let button = document.getElementById("clickerButton");
    button.textContent = "Count: " + count;
}
function getCount() {
    return count;
}
