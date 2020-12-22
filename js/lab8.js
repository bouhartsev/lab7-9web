function task8_1() {
	console.log("task8_1");
	var enter = Number(prompt('Введите натуральное число:', '3'));
	var answer = "";
	for (let i=0; i<enter;) {
		answer+=++i + " ";
		if(i>10&&i<20) answer+="овечек... ";
		else if (i%10==1) answer+="овечка... ";
		else if (i%10>1&&i%10<5) answer+="овечки... ";
		else answer+="овечек... ";
	}
	console.log(answer);
}

function task8_2() {
	console.log("task8_2");
	for (let i=0; i<15; i++) {
		if (i%2==1) console.log(i+" нечётное");
		else console.log(i+" чётное");
	}
}

function task8_3() {
	console.log("task8_3");
	var i=8, j=8, str="";
	while(i!=0) {
		while(j!=0) {
			if ((i+j)%2!=0) str += "#";
			else str += " ";
			j--;
		}
		str+="\n";
		i--;
		j=8;
	}
	console.log(str);
}

function task8_4() {
	console.log("task8_4");
	var arr = [0, -3, 1];
	console.log(arr);
	if (arr[0]>arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]];
	if (arr[1]>arr[2]) [arr[1], arr[2]] = [arr[2], arr[1]];
	if (arr[0]>arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]];
	console.log(arr);
}

function task8_5() {
	console.log("task8_5");
	var arr = [2, -1, 0, -5, -4];
	var max = arr[0];
	for (let i=0; i<arr.length; i++) {
		if (arr[i]>max) max=arr[i];
	}
	console.log(max);
}