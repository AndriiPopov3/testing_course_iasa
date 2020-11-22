// Task #1
function filter_list(array){
	var new_array = [];
	var i = 0;
	// console.log(array.length);
	for (i=0;i<array.length;i++){
		if(typeof(array[i])=='number'){
			new_array.push(array[i]);
		}
	}
	return new_array;
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]))



// Task #2
function first_non_repeating_letter(line){
	var str = line.split("");
	var i = 0;
	var unrep_char = "";
	var unrep_char_case = "";
	var beacon = true;
	for(i=0;i<str.length;i++){
		unrep_char=str[i].toLowerCase();
		unrep_char_case=str[i];
		beacon = true
		for(var j=0;j<str.length;j++){
			if(j!=i){
				if(str[j].toLowerCase()==unrep_char){
				beacon = false;
				unrep_char="";
				unrep_char_case="";
				break;
			}
			}
		}
		if(beacon==true){
			break;
		}
		
	}
	return unrep_char_case;
}

console.log(first_non_repeating_letter("stress"));
console.log(first_non_repeating_letter("ssttrriinngg"));
console.log(first_non_repeating_letter("sTreSS"));
console.log(first_non_repeating_letter("ssttrrInngg"));
console.log(first_non_repeating_letter("ssttrrIinngg"));



// Task #3
function digital_root(int){
	var int_str = "";
	int_str = int_str + int;
	var str = int_str.split("");
	var root = parseInt(str[0]);
	// console.log(int_str, typeof(int_str));
	do {
		int_str = "";
		int_str = int_str + int;
		str = int_str.split("");
		root = parseInt(str[0]);
		for(i=1;i<str.length;i++){
			root = root + parseInt(str[i]);
		}
		int=root;
	}while(root / 10 >= 1);

	
	return root;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));



// Task #4 - pairs (x1,x2) and (x2,x1) are considered the same
function pair_counter(array){
	var target = 5;
	var counter = 0;
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array.length;j++){
			if(array[i]+array[j]==target){
				counter++;
			}
		}
	}
	return counter/2;
}

console.log(pair_counter([1,3,6,2,2,0,4,5]));
console.log(pair_counter([1,5]));
console.log(pair_counter([1,5,4]));
console.log(pair_counter([1,5,4,4,4]));



// Task #5
function sort_names(string){
	var string_upper = string.toUpperCase();
	var name_list = string_upper.split(";");
	var resulting_string = "(";
	for(var i = 0; i<name_list.length;i++){
		name_list[i]=name_list[i].split(":")[1] + ":" + name_list[i].split(":")[0];
	}
	for(var i = 0; i<name_list.length;i++){
		resulting_string = resulting_string + name_list[i].split(":")[0] + ", " + name_list[i].split(":")[1] + ")";
		if(i+1 != name_list.length){
			resulting_string = resulting_string + "(";
		}
	}
	return resulting_string;
}

console.log(sort_names("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));




// Extra task #1
function nextBigger(number){
	var num_str = "";
	num_str = num_str + number;
	var num_split = num_str.split("");
	var temp_val = 0;
	var result = "";
	var second_half_digits = [];
	for(var i=num_split.length-2;i>=0;i--){
		if(num_split[i]<num_split[i+1]){
			temp_val = num_split[i];
			num_split[i]=num_split[i+1];
			num_split[i+1]=temp_val;
			break;
		}
	}
	if(i==-1){
		return -1;
	}else{
		var saved_index = i+1;
	for(var si = i+1; si<num_split.length;si++){
		second_half_digits.push(num_split[si]);
	}
	second_half_digits = second_half_digits.sort();
	for(var j=0;j<saved_index;j++){
		result = result + num_split[j];
	}
	for(j=0;j<second_half_digits.length;j++){
		result = result + second_half_digits[j];
	}
	return parseInt(result);
	}
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));
console.log(nextBigger(5004));
console.log(nextBigger(500410));
console.log(nextBigger(54545321));
console.log(nextBigger(987654321));
console.log(nextBigger(123454321));



// Extra Task #2
function uns_to_ip(number){
	var binary = "";
    var temp = number;
 
    while(temp > 0){
        if(temp % 2 == 0){
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }
    var n = binary.toString();
    if(n.split("").length < 32){
    	for(var i=n.split("").length; i<32; i++){
    		n = "0"+n;
    	}
    }
    var num_str = "";
	num_str = num_str + n;
	var num1 = "";
	var num2 = "";
	var num3 = "";
	var num4 = "";
	for(var i=0;i<32;i++){
		if(i<8){
			num1 = num1 + num_str[i];
		}
		if((i>=8)&&(i<16)){
			num2 = num2 + num_str[i];
		}
		if((i>=16)&&(i<24)){
			num3 = num3 + num_str[i];
		}
		if((i>=24)&&(i<32)){
			num4 = num4 + num_str[i];
		}
	}
	return parseInt(num1, 2) + "." + parseInt(num2,2) + "." + parseInt(num3,2) + "." + parseInt(num4,2);
}

console.log(uns_to_ip(2149583361));
console.log(uns_to_ip(32));
console.log(uns_to_ip(0));