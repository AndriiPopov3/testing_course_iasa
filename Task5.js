// Task #5
var assert = require('assert');

function sort_names(string){
	var string_upper = string.toUpperCase();
	var name_list = string_upper.split(";");
	var resulting_string = "(";
	for(var i = 0; i<name_list.length;i++){
		name_list[i]=name_list[i].split(":")[1] + ":" + name_list[i].split(":")[0];
	}
	name_list = name_list.sort();
	for(var i = 0; i<name_list.length;i++){
		resulting_string = resulting_string + name_list[i].split(":")[0] + ", " + name_list[i].split(":")[1] + ")";
		if(i+1 != name_list.length){
			resulting_string = resulting_string + "(";
		}
	}
	return resulting_string;
}

assert.equal(sort_names("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"), "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)");
assert.equal(sort_names("Fred:Corwill;Fred:Corwill;Barney:Tornbull;Betty:Tornbull"), "(CORWILL, FRED)(CORWILL, FRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)");