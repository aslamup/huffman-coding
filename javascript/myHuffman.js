//Huffman data compression
var str="aaabbjkkksissjsisijsknjjscjnjksjjksemkc"
function frequency(str){
	var freqs = {};
	for(var ch=0; ch<str.length; ch++){
		if(str[ch] in freqs){
			freqs[str[ch]]++;
        }
      	else
          		freqs[str[ch]]=1;
    }
    return freqs
};
console.log(frequency(str))


function sortFreq(freqs){
	var list=[];
	for(var letter in freqs){
		list.push([freqs[letter],letter])
	}
	list.sort();
	return list
};
console.log(sortFreq(frequency(str)))


function buildTree(tuples) {
	while(tuples.length > 1) {
        	leastTwo = tuples.slice(0,2)
        	theRest = tuples.slice(2)
        	combFreq = leastTwo[0][0] + leastTwo[1][0]
			neww = [[combFreq].concat([leastTwo])]
        	tuples = theRest.concat(neww)
            tuples.sort()
            
    }
	return tuples
};
console.log(buildTree(sortFreq(frequency(str))))


function trimTree(tree){
	var p = tree[1];
	if(typeof p == 'string') {return p;}
	else { return [trimTree(p[0]),trimTree(p[1])]; }
};
console.log(trimTree(buildTree(sortFreq(frequency(str)))));


var codes = {}
function assignCodes(node,pat){
	if(pat == undefined){
		pat = '';
	}
	if(typeof(node) == 'string'){
		codes[node] = pat
	}
	else{
		assignCodes(node[0],pat+"0")
		assignCodes(node[1],pat+"1")
	};
};
assignCodes(timTree(buildTree(sortFreq(frequency(str)))))
console.log(codes)


function encode(string){
	var output = '';
	for(var ch=0;ch<string.length;ch++) { 
      output += codes[string[ch]]
    }
	return output
};
var codes = {'a': '00', 'c': '011', 'b': '1010', 'e': '11', 'd': '1011', 'g': '010', 'f': '100'}
console.log(encode(str))


function decode(tree,str){
	var output = ''
	var p = tree
	for(bit in str){
		if(str[bit] == '0') { p = p[0]}
		else { p = p[1]}
		if(typeof (p) == 'string') {
			output += p
			p = tree
		}
	}
	return output
};
console.log(decode(trimTree(buildTree(sortFreq(frequency(str))))),encode(str))
