let cheese = "🧀";
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
