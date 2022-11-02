let count: number = 0

function doSomething(): void {
	alert("🧀🧀🧀🧀🧀🧀🧀")
}

function incrementCount(): void {
	count += 1;

	let button = document.getElementById("clickerButton"); 
	button.textContent = "Count: " + count;
}

function getCount(): number {
	return count
}
