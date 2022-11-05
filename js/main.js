let count = 0;
let button = document.getElementById("clickerButton");
button.textContent = "Count: " + count;
function doSomething() {
    alert("🧀🧀🧀🧀🧀🧀🧀");
    document.location.href = "https://www.youtube.com/watch?v=a3tDlT-Owys";
}
function incrementCount() {
    count += 1;
    button.textContent = "Count: " + count;
}
function getCount() {
    return count;
}
