function task1() {
	var num = 1;
	var string = "1";
	var boolean = true;
	var empty = null;
	console.log(string+num);//num to string
	console.log(num+boolean);//bool to num
	console.log(string+boolean);//bool to string
	console.log(string+empty);//null to string
	console.log(boolean+empty);//bool and null to num
	console.log(string-num);//string to num
}

function task2() {
	var enter = "2 3"; //var enter = prompt('Введите длину и ширину (через пробел):', '2 3');
	var first = Number(enter.split(" ")[0]);
	var second = Number(enter.split(" ")[1]);
	console.log(enter);
	console.log((first+second)*2);
	console.log(first*second);
	console.log(((first+second)*2)/(first*second));
}

function task3() {
	//
}

function task4() {
	//
}

function task5() {
	//
}