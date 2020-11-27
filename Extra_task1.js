// Extra task #1
var assert = require('assert');

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

assert.equal(nextBigger(12), 21);
assert.equal(nextBigger(513), 531);
assert.equal(nextBigger(2017), 2071);
assert.equal(nextBigger(9), -1);
assert.equal(nextBigger(111), -1);
assert.equal(nextBigger(531), -1);
assert.equal(nextBigger(5004), 5040);
assert.equal(nextBigger(500410), 504001);
assert.equal(nextBigger(54545321), 54551234);
assert.equal(nextBigger(987654321), -1);
assert.equal(nextBigger(123454321), 123512344);