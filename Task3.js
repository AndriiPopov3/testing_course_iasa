// Task #3
var assert = require('assert');

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

assert.equal(digital_root(16), 7);
assert.equal(digital_root(942), 6);
assert.equal(digital_root(132189), 6);
assert.equal(digital_root(493193), 2);