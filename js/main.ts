let count: number = 0
let button = document.getElementById("clickerButton"); 
button.textContent = "Count: " + count;

function doSomething(): void {
	alert("🧀🧀🧀🧀🧀🧀🧀")
}

function incrementCount(): void {
	count += 1;

	button.textContent = "Count: " + count;
}

function getCount(): number {
	return count
}
