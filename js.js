document.querySelectorAll(".button").forEach((item) => {
	item.addEventListener("click", function (event) {
		let number1 = +document.getElementById("number1").value;
		let number2 = +document.getElementById("number2").value;
		let result = 0;

		if (event.target.id === "buttonplus") {
			result = number1 + number2;
		} else if (event.target.id === "buttonminus") {
			result = number1 - number2;
		} else if (event.target.id === "buttonmultiply") {
			result = number1 * number2;
		} else if (event.target.id === "buttondevide") {
			result = number1 / number2;
		} else {
			alert("error");
		}
		alert(result);
	});
});
