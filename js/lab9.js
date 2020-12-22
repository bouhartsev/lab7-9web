function task9_1() {
	console.log("task9_1");
	let student = {
		group: 201,
		last_name: "Иванов",
		first_name: "Иван"
	};
	var str="Список свойств: ";
	for (var key of Object.keys(student)) {
		str+=key+(', ');
	}
	str = str.substr(0, str.length-2);
	console.log(str);
	console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);
}

function arrayCut(arr) {
	while(arr.length!=1) {
		arr.pop();
		console.log(`${arr.length+1} осталось [${arr}]`);
	}
//	console.log(1);
	return 1;
}

function task9_2() {
	console.log("task9_2");
	alert("Введите название функции с аргументами.\nНапример, arrayCut([1,2,3])");
}

function isPalindrome(str) {
	var ans=true;
	for (let i=0; i<str.length/2 && ans==true; i++) {
		if(str[i]!=str[str.length-i-1]) ans=false;
	}
	return ans;
}

function task9_3() {
	console.log("task9_3");
	alert(`Введите название функции с аргументами.\nНапример, isPalindrome("довод")`);
}

function scalarMultiplication(num, arr) {
	for(line of arr) {
		for (value of line) {
			value*=num;
		}
	}
	var str="";
	for(line of arr) {
		for (value of line) {
			str+=value+" ";
		}
		str+="\n";
	}
	console.log(str);
	return 0;
}

function task9_4() {
	console.log("task9_4");
	alert(`Введите название функции с аргументами.\nНапример, scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]])`);
}