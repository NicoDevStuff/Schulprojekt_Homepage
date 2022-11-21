let cheese = "cheese \n";
function setCheese() {
    let p = document.getElementById("cheese");
    let i = 0;
    let val = 200;
    for (i = 0; i < val; i++) {
        p.textContent += cheese;
    }
}
function resetCheese() {
    let p = document.getElementById("cheese");
    p.textContent = cheese.toString();
}
function getCheeseSize() {
    let p = document.getElementById("cheese");
    let count = p.textContent.length / cheese.length;
    let cheesebutton = document.getElementById("cheesebutton");
    cheesebutton.textContent = "Get the cheese count: " + count;
}