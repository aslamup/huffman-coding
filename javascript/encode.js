function encode(string){
	var output = '';
	for(var ch=0;ch<string.length;ch++) { 
      output += codes[string[ch]]
    }
	return output
};
var codes = {'a': '00', 'c': '011', 'b': '1010', 'e': '11', 'd': '1011', 'g': '010', 'f': '100'}
console.log(encode('abacfggg'))
