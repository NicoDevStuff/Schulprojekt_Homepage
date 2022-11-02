let cheese: String = "🧀"

function setCheese(): void {
	let p = document.getElementById("cheese")
	let i: number = 0;
	let val: number = 200;

	for (i = 0; i < val; i ++) {
		p.textContent += cheese;
	}
}

function resetCheese(): void {
	let p = document.getElementById("cheese")
	p.textContent = cheese.toString();
}
