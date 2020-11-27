// Task #4 - pairs (x1,x2) and (x2,x1) are considered the same
var assert = require('assert');

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

assert.equal(pair_counter([1,3,6,2,2,0,4,5]), 4);
assert.equal(pair_counter([1,5]), 0);
assert.equal(pair_counter([1,5,4]), 1);
assert.equal(pair_counter([1,5,4,4,4]), 3);