// Task #1
var assert = require('assert');

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

assert.deepEqual(filter_list([1,2,'a','b']), [1,2]);
assert.deepEqual(filter_list([1,'a','b',0,15]), [1,0,15]);
assert.deepEqual(filter_list([1,2,'aasf','1','123',123]), [1,2,123]);