function task7_1() {
	console.log("task7_1");
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

function task7_2() {
	console.log("task7_2");
	var enter = "2 3"; //var enter = prompt('Введите длину и ширину (через пробел):', '2 3');
	var first = Number(enter.split(" ")[0]);
	var second = Number(enter.split(" ")[1]);
	console.log(enter);
	console.log((first+second)*2);
	console.log(first*second);
	console.log(((first+second)*2)/(first*second));
}

function convertToF(num) {
	return ((9/5)*num + 32);
}

function convertToC(num) {
	return ((num - 32)*5/9);
}

function task7_3() {
	console.log("task7_3");
	var first = 25;
	var second = 66.2;
	console.log(`${first}${String.fromCharCode(176)}C соответствует ${convertToF(first)}${String.fromCharCode(176)}F`);
	console.log(`${second}${String.fromCharCode(176)}F соответствует ${convertToC(second)}${String.fromCharCode(176)}C`);
}

function task7_4() {
	console.log("task7_4");
	var enter = prompt('Введите год:', '2020');
	var answer = (enter%4==0&&(enter%100!=0 || enter%400==0))? `${enter} - високосный` : `${enter} - не високосный`;
	alert(answer);
	console.log("Complete");
}

function task7_5() {
	console.log("task7_5");
	var first = 1;
	var second = 11;
	if (first==10 || second==10 || first+second==10) console.log("Истина");
	else console.log("Ложь");
}