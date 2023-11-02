let number1 = 0;
let number2 = 0;
let check;
let result = 0;

do {
let calcu = prompt('что хотите сделать? плюс(+), минус(-), делить(/), умножить(*)');
	if (calcu === "+" || calcu === "-" || calcu === "/" || calcu === "*" ) {
		number1 = +prompt('введите первое число') ;
		number2 = +prompt('введите второе число') ;
		check = false;
	}else {
		alert('не верно указан символ +, -, *, /.');
		check = true;
	}
	if (isNaN(number1) === true || isNaN(number2) === true) {
		alert("не верно указаны цифры");
		check = true;
	} else {
		if (calcu === "+") {
			result = number1 + number2;
			alert(`${number1} + ${number2} = ${result}`);
		} else if (calcu === "-") {
			result = number1 - number2;
			alert(`${number1} - ${number2} = ${result}`);
		} else if (calcu === "*") {
			result = number1 * number2;
			alert(`${number1} * ${number2} = ${result}`);
		} else if (calcu === "/") {
			result = number1 / number2;
			alert(`${number1} / ${number2} = ${result}`);
		} else {
			check = true;
		}
	}
} while (check);







