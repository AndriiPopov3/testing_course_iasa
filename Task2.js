// Task #2, case-sensitive
var assert = require('assert');

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

assert.equal(first_non_repeating_letter("stress"), "t");
assert.equal(first_non_repeating_letter("ssttrriinngg"), "");
assert.equal(first_non_repeating_letter("sTreSS"), "T");
assert.equal(first_non_repeating_letter("ssttrrInngg"), "I");
assert.equal(first_non_repeating_letter("ssttrrIinngg"), "");