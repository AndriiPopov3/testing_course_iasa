// Extra Task #2
var assert = require('assert');

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


assert.equal(uns_to_ip(2149583361), "128.32.10.1");
assert.equal(uns_to_ip(32), "0.0.0.32");
assert.equal(uns_to_ip(0), "0.0.0.0");