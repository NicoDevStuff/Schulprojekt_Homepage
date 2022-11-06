let count = 0;
let button = document.getElementById("clickerButton");
button.textContent = "Count: " + count;
function doSomething() {
    document.location.href = "https://www.youtube.com/watch?v=kWrdEbBcsE4";
}
function incrementCount() {
    count += 1;
    button.textContent = "Count: " + count;
}
function getCount() {
    return count;
}
